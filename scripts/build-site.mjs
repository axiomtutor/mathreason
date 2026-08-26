#!/usr/bin/env node
/**
 * Build a static, GitHub Pages ready website from the Notion-exported
 * markdown files in this repository.
 *
 *   node scripts/build-site.mjs [sourceDir] [outDir]
 *
 * Defaults: sourceDir = ".", outDir = "docs"
 * Put the generated `docs/` folder in your repo and set
 * GitHub Pages -> Deploy from branch -> main -> /docs
 */
import fs from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";
import mdKatex from "@vscode/markdown-it-katex";
const katexPlugin = mdKatex.katex ?? mdKatex.default ?? mdKatex;

const SRC = path.resolve(process.argv[2] ?? ".");
const OUT = path.resolve(process.argv[3] ?? "docs");

const IMG_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);
const HEX32 = /\s+[0-9a-f]{32}$/i;

/* ------------------------------------------------------------------ helpers */

const walk = (dir, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules" || e.name === "docs" || e.name === "scripts")
      continue;
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
};

const slugify = (name) =>
  name
    .replace(/\.md$/i, "")
    .replace(HEX32, "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase() || "page";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* -------------------------------------------------------------- collect docs */

const files = walk(SRC);
const mdFiles = files.filter((f) => f.toLowerCase().endsWith(".md") && path.basename(f) !== "README.md");
if (!mdFiles.length) {
  console.error(`No markdown found in ${SRC}`);
  process.exit(1);
}

// The shortest path depth wins as the home page (Notion's top-level export).
const rootFile = mdFiles.slice().sort(
  (a, b) => a.split(path.sep).length - b.split(path.sep).length || a.length - b.length
)[0];

const pages = new Map(); // absolute md path -> page record
const usedSlugs = new Set();
for (const f of mdFiles) {
  const isRoot = f === rootFile;
  let slug = isRoot ? "index" : slugify(path.basename(f));
  let n = 2;
  while (usedSlugs.has(slug)) slug = `${slugify(path.basename(f))}-${n++}`;
  usedSlugs.add(slug);
  const raw = fs.readFileSync(f, "utf8");
  const h1 = raw.match(/^#\s+(.+)$/m);
  pages.set(f, {
    file: f,
    slug,
    isRoot,
    raw,
    title: (h1?.[1] ?? path.basename(f).replace(/\.md$/i, "").replace(HEX32, "")).trim(),
    href: `${slug}.html`,
  });
}

/* ------------------------------------------------------------------- assets */

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "assets"), { recursive: true });

const imageHref = new Map(); // absolute image path -> assets/<name>
const usedImgNames = new Set();
for (const f of files) {
  if (!IMG_EXT.has(path.extname(f).toLowerCase())) continue;
  const dirTag = slugify(path.basename(path.dirname(f)));
  let name = `${dirTag}-${path.basename(f).replace(/\s+/g, "-").toLowerCase()}`;
  let n = 2;
  while (usedImgNames.has(name)) name = `${dirTag}-${n++}-${path.basename(f).replace(/\s+/g, "-").toLowerCase()}`;
  usedImgNames.add(name);
  fs.copyFileSync(f, path.join(OUT, "assets", name));
  imageHref.set(f, `assets/${name}`);
}

// KaTeX stylesheet + fonts, copied locally so the site works offline.
const katexDist = path.dirname(new URL(import.meta.resolve("katex")).pathname);
const katexRoot = path.resolve(katexDist, "..");
fs.cpSync(path.join(katexRoot, "dist", "katex.min.css"), path.join(OUT, "assets", "katex.min.css"));
fs.cpSync(path.join(katexRoot, "dist", "fonts"), path.join(OUT, "assets", "fonts"), { recursive: true });

/* ------------------------------------------------------------- link rewrites */

const resolveTarget = (from, rawHref) => {
  const decoded = decodeURI(rawHref.split("#")[0].split("?")[0]);
  const hash = rawHref.includes("#") ? "#" + rawHref.split("#").slice(1).join("#") : "";
  const abs = path.resolve(path.dirname(from), decoded);
  const page = pages.get(abs);
  if (page) return page.href + hash;
  if (imageHref.has(abs)) return imageHref.get(abs);
  // tolerate case / whitespace mismatches
  const hit =
    [...pages.values()].find((p) => path.basename(p.file) === path.basename(decoded)) ??
    null;
  if (hit) return hit.href + hash;
  const img = [...imageHref.keys()].find((k) => path.basename(k) === path.basename(decoded));
  return img ? imageHref.get(img) : null;
};

/* --------------------------------------------------------------- md renderer */

// Notion's math needs a little normalising before KaTeX sees it:
// unicode operators become TeX commands, non-breaking spaces become spaces,
// and multi-line display math is wrapped in `aligned` so `\\` keeps working.
const MATH_UNICODE = [
  [/\u2209/g, "\\notin "],
  [/\u25a1/g, "\\square "],
  [/\u25ca/g, "\\Diamond "],
  [/\u00a0/g, " "],
];

const normaliseMath = (body, display) => {
  let out = body;
  for (const [re, rep] of MATH_UNICODE) out = out.replace(re, rep);
  if (display && /\\\\/.test(out) && !/\\begin\{/.test(out)) {
    out = `\\begin{aligned}${out}\\end{aligned}`;
  }
  return out;
};

const fixMath = (src) =>
  src
    .replace(/\$\$([\s\S]*?)\$\$/g, (_m, body) => `$$${normaliseMath(body, true)}$$`)
    .replace(/\$([^$\n]+)\$/g, (_m, body) => `$${normaliseMath(body, false)}$`);

const md = new MarkdownIt({ html: true, linkify: true, typographer: false }).use(katexPlugin, {
  throwOnError: false,
  strict: false,
  errorColor: "#b3261e",
});


const renderPage = (page) => {
  const env = {};
  const tokens = md.parse(fixMath(page.raw), env);
  const headings = [];
  const seenIds = new Set();

  // Links and images live inside `inline` token children, so walk both levels.
  const rewriteInline = (t) => {
    if (t.type === "link_open") {
      const hrefIdx = t.attrIndex("href");
      const href = t.attrs[hrefIdx][1];
      if (/^(https?:|mailto:|#)/i.test(href)) {
        if (!href.startsWith("#")) {
          t.attrSet("target", "_blank");
          t.attrSet("rel", "noopener noreferrer");
        }
      } else {
        const mapped = resolveTarget(page.file, href);
        if (mapped) t.attrs[hrefIdx][1] = mapped;
      }
    }
    if (t.type === "image") {
      const src = t.attrGet("src");
      if (src && !/^https?:/i.test(src)) {
        const mapped = resolveTarget(page.file, src);
        if (mapped) t.attrSet("src", mapped);
      }
      t.attrSet("loading", "lazy");
    }
    if (t.children) t.children.forEach(rewriteInline);
  };

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    rewriteInline(t);

    if (t.type === "heading_open") {
      const inline = tokens[i + 1];
      const text = inline?.content ?? "";
      let id = slugify(text.replace(/\$[^$]*\$/g, "")) || `section-${headings.length + 1}`;
      let n = 2;
      while (seenIds.has(id)) id = `${id}-${n++}`;
      seenIds.add(id);
      t.attrSet("id", id);
      t.meta = { ...(t.meta ?? {}), origTag: t.tag, id, text };
    }
  }

  // Drop the leading H1 (the layout prints the page title itself).
  if (tokens[0]?.type === "heading_open" && tokens[0].tag === "h1") tokens.splice(0, 3);

  // Notion uses `#`/`##` for in-page sections; demote one level so the page
  // title stays the only H1, then build the table of contents.
  const demote = { h1: "h2", h2: "h3", h3: "h4", h4: "h5", h5: "h6", h6: "h6" };
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type !== "heading_open" && t.type !== "heading_close") continue;
    const next = t.type === "heading_open" ? t : tokens[i];
    next.tag = demote[next.tag] ?? next.tag;
    if (t.type === "heading_open" && (t.meta?.origTag === "h1" || t.meta?.origTag === "h2")) {
      headings.push({ id: t.meta.id, text: t.meta.text, level: t.tag });
    }
  }

  const withCallouts = wrapCallouts(tokens);
  const withSections = wrapSections(withCallouts, md, env);

  return { html: md.renderer.render(withSections, md.options, env), headings };
};

/* ------------------------------------------------- callouts & collapsibles */

const htmlTok = (content) => ({ type: "html_block", tag: "", content, block: true, attrs: null, children: null });

// Notion marks blocks with a standalone `***Definition***` style paragraph.
const CALLOUT_RE = /^\*\*\*\s*(Definition|Definition continued|Theorem|Lemma|Corollary|Proposition|Proof|No proof|Exercise|Example|Remark|Notation)\s*\*\*\*:?\s*$/i;

const calloutKind = (label) => {
  const l = label.toLowerCase();
  if (l.startsWith("definition") || l === "notation") return "definition";
  if (l === "proof" || l === "no proof") return "proof";
  if (l === "exercise") return "exercise";
  if (l === "example" || l === "remark") return "note";
  return "theorem";
};

// A callout runs from its marker to the next marker, heading, or divider.
const wrapCallouts = (tokens) => {
  const out = [];
  let open = false;
  const close = () => {
    if (open) {
      out.push(htmlTok("</div></section>"));
      open = false;
    }
  };

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const inline = tokens[i + 1];
    const marker =
      t.type === "paragraph_open" && inline?.type === "inline" ? inline.content.match(CALLOUT_RE) : null;

    if (marker) {
      close();
      const label = marker[1].replace(/\b\w/g, (c) => c.toUpperCase());
      open = true;
      out.push(
        htmlTok(
          `<section class="callout callout-${calloutKind(marker[1])}"><p class="callout-label">${esc(
            label
          )}</p><div class="callout-body">`
        )
      );
      i += 2; // skip paragraph_open / inline / paragraph_close
      continue;
    }

    if (t.type === "heading_open" || t.type === "hr") close();
    out.push(t);
  }
  close();
  return out;
};

// Top-level chapter sections (Notion's `#`, demoted to h2) become <details>.
const wrapSections = (tokens, mdInst, env) => {
  const out = [];
  let open = false;
  const close = () => {
    if (open) {
      out.push(htmlTok("</div></details>"));
      open = false;
    }
  };

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === "heading_open" && t.meta?.origTag === "h1") {
      close();
      const headingHtml = mdInst.renderer.render(tokens.slice(i, i + 3), mdInst.options, env);
      out.push(
        htmlTok(
          `<details class="section"><summary class="section-summary">${headingHtml}<span class="section-chevron" aria-hidden="true"></span></summary><div class="section-body">`
        )
      );
      open = true;
      i += 2;
      continue;
    }
    out.push(t);
  }
  close();
  return out;
};



/* ------------------------------------------------------------------- layout */

const rootPage = pages.get(rootFile);
const chapters = [...pages.values()].filter((p) => !p.isRoot);

// Order the sidebar the way the home page links to the chapters, then the rest.
const linkOrder = [...rootPage.raw.matchAll(/\]\(([^)]+\.md)\)/g)]
  .map((m) => resolveTarget(rootFile, m[1]))
  .filter(Boolean);
const nav = [
  ...linkOrder.map((href) => chapters.find((c) => c.href === href)).filter(Boolean),
  ...chapters.filter((c) => !linkOrder.includes(c.href)),
].filter((c, i, a) => a.indexOf(c) === i);

const siteTitle = rootPage.title;

const layout = ({ page, body, headings }) => {
  const navHtml = nav
    .map(
      (c, i) =>
        `<li><a class="nav-link${c.slug === page.slug ? " is-active" : ""}" href="${c.href}"><span class="nav-num">${String(
          i + 1
        ).padStart(2, "0")}</span>${esc(c.title)}</a></li>`
    )
    .join("\n");

  const tocHtml = headings.length
    ? `<nav class="toc" aria-label="On this page"><p class="toc-title">On this page</p><ul>${headings
        .map((h) => `<li class="toc-${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`)
        .join("")}</ul></nav>`
    : "";

  const idx = nav.findIndex((c) => c.slug === page.slug);
  const prev = idx > 0 ? nav[idx - 1] : page.isRoot ? null : null;
  const next = idx >= 0 && idx < nav.length - 1 ? nav[idx + 1] : null;
  const pager =
    idx >= 0
      ? `<nav class="pager">${
          prev ? `<a class="pager-link" href="${prev.href}"><span>Previous</span>${esc(prev.title)}</a>` : "<span></span>"
        }${
          next ? `<a class="pager-link pager-next" href="${next.href}"><span>Next</span>${esc(next.title)}</a>` : "<span></span>"
        }</nav>`
      : "";

  const description = (page.raw
    .replace(/^#.*$/gm, "")
    .replace(/\$\$[\s\S]*?\$\$/g, "")
    .replace(/[#*_>`$\[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155) || siteTitle).trim();

  const fullTitle = page.isRoot ? siteTitle : `${page.title} — ${siteTitle}`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(fullTitle.slice(0, 70))}</title>
<meta name="description" content="${esc(description)}" />
<meta property="og:title" content="${esc(fullTitle)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:type" content="article" />
<meta name="twitter:card" content="summary" />
<link rel="stylesheet" href="assets/katex.min.css" />
<link rel="stylesheet" href="assets/style.css" />
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
  <button class="menu-toggle" aria-label="Toggle chapter list" aria-expanded="false">Chapters</button>
  <a class="brand" href="index.html">${esc(siteTitle)}</a>
</header>
<div class="shell">
  <aside class="sidebar" id="sidebar">
    <a class="side-brand" href="index.html">${esc(siteTitle)}</a>
    <p class="side-label">Contents</p>
    <ul class="nav">${navHtml}</ul>
  </aside>
  <main class="content" id="main">
    <article class="prose">
      <h1>${esc(page.title)}</h1>
      ${tocHtml}
      ${body}
      ${pager}
    </article>
  </main>
</div>
<script>
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    this.setAttribute("aria-expanded", String(open));
  });

  // Sections load collapsed; open (and scroll to) the one holding a hash target.
  function revealHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var p = el.closest("details");
    while (p) {
      p.open = true;
      p = p.parentElement && p.parentElement.closest("details");
    }
    el.scrollIntoView();
  }
  window.addEventListener("hashchange", revealHash);
  revealHash();
</script>

</body>
</html>
`;
};

/* -------------------------------------------------------------------- write */

for (const page of pages.values()) {
  const { html, headings } = renderPage(page);
  fs.writeFileSync(path.join(OUT, page.href), layout({ page, body: html, headings }));
}

fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
fs.writeFileSync(path.join(OUT, "assets", "style.css"), fs.readFileSync(
  path.join(path.dirname(new URL(import.meta.url).pathname), "site-style.css"),
  "utf8"
));

console.log(`Built ${pages.size} pages + ${imageHref.size} images -> ${path.relative(process.cwd(), OUT)}/`);
