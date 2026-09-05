#!/usr/bin/env node
/**
 * Build a static, GitHub Pages ready website from the markdown in this
 * repository.
 *
 *   node scripts/build-site.mjs [sourceDir] [outDir]
 *
 * Defaults: sourceDir = ".", outDir = "docs"
 *
 * Primary source is the Obsidian vault in `obsidian/` (YAML frontmatter,
 * `> [!callout]` blocks, wikilinks). The older Notion export at the repository
 * root is still built so that the "Old content" links keep working.
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
const SKIP_DIRS = new Set(["node_modules", "docs", "scripts", ".obsidian"]);

/* ------------------------------------------------------------------ helpers */

const walk = (dir, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || SKIP_DIRS.has(e.name)) continue;
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
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_]+/g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .toLowerCase() || "page";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* --------------------------------------------------- obsidian preprocessing */

// `---\ntitle: ...\n---` at the top of a file.
const stripFrontmatter = (raw) => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { body: raw, meta: {} };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) meta[kv[1].toLowerCase()] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return { body: raw.slice(m[0].length), meta };
};

// `[[Target|Label]]` / `[[Target]]` / `![[Image]]` -> standard markdown.
const expandWikilinks = (raw) =>
  raw.replace(/(!?)\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_m, bang, target, label) => {
    const t = target.trim();
    const text = (label ?? t).trim();
    if (bang) return `![${text}](${encodeURI(t)})`;
    const href = /\.[a-z0-9]+$/i.test(t) ? t : `${t}.md`;
    return `[${text}](${encodeURI(href)})`;
  });

const CALLOUT_START = /^\s*>\s*\[!([A-Za-z-]+)\]([+-]?)/;

// Obsidian callouts are written as blockquotes, but the export often drops the
// `>` on continuation lines. Re-add it until a genuinely blank line so the
// whole callout stays inside one blockquote.
const normaliseCallouts = (raw) => {
  const lines = raw.split(/\r?\n/);
  const out = [];
  let inside = false;
  for (const line of lines) {
    if (CALLOUT_START.test(line)) {
      inside = true;
      out.push(line.replace(/^\s+/, ""));
      continue;
    }
    if (inside) {
      if (!line.trim()) {
        inside = false;
        out.push("");
        continue;
      }
      // Headings and dividers are never part of a callout — end it.
      if (/^\s*(#{1,6}\s|(?:---|\*\*\*|___)\s*$)/.test(line)) {
        inside = false;
        out.push("");
        out.push(line);
        continue;
      }
      out.push(/^\s*>/.test(line) ? line.replace(/^\s+/, "") : `> ${line}`);
      continue;
    }
    out.push(line);
  }
  return out.join("\n");
};

/* -------------------------------------------------------------- collect docs */

const files = walk(SRC);
const mdFiles = files.filter((f) => f.toLowerCase().endsWith(".md") && path.basename(f) !== "README.md");
if (!mdFiles.length) {
  console.error(`No markdown found in ${SRC}`);
  process.exit(1);
}

const obsidianDir = path.join(SRC, "obsidian");
const isObsidian = (f) => f.startsWith(obsidianDir + path.sep);
const hasObsidian = mdFiles.some(isObsidian);

// Home page: the shallowest file in the Obsidian vault (or overall, if absent).
const depth = (f) => f.split(path.sep).length;
const rootFile = mdFiles
  .filter((f) => (hasObsidian ? isObsidian(f) : true))
  .slice()
  .sort((a, b) => depth(a) - depth(b) || a.length - b.length)[0];

// The Notion export's own index page is superseded by the Obsidian home page.
const buildFiles = mdFiles.filter(
  (f) => f === rootFile || !hasObsidian || path.dirname(f) !== SRC
);

const pages = new Map(); // absolute md path -> page record
const usedSlugs = new Set();
for (const f of buildFiles) {
  const isRoot = f === rootFile;
  const base = path.basename(f);
  let slug = isRoot ? "index" : slugify(base);
  let n = 2;
  while (usedSlugs.has(slug)) slug = `${slugify(base)}-${n++}`;
  usedSlugs.add(slug);

  const { body, meta } = stripFrontmatter(fs.readFileSync(f, "utf8"));
  const raw = normaliseCallouts(expandWikilinks(body));
  const h1 = raw.match(/^#\s+(.+)$/m);
  const title = (
    meta.title ||
    h1?.[1] ||
    base.replace(/\.md$/i, "").replace(HEX32, "")
  ).trim();

  pages.set(f, {
    file: f,
    slug,
    isRoot,
    raw,
    legacy: hasObsidian && !isObsidian(f),
    title,
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
// IMPORTANT: use the exact katex version the plugin renders with —
// a CSS/renderer version mismatch breaks glyph positioning (e.g. \notin).
const katexRoot = (() => {
  // Resolve katex the same way the plugin does, so CSS matches the renderer.
  const pluginPkg = new URL(import.meta.resolve("@vscode/markdown-it-katex/package.json")).pathname;
  const nested = path.resolve(path.dirname(pluginPkg), "node_modules", "katex");
  if (fs.existsSync(path.join(nested, "dist", "katex.min.css"))) return nested;
  return path.resolve(path.dirname(new URL(import.meta.resolve("katex/package.json")).pathname), "..");
})();
fs.cpSync(path.join(katexRoot, "dist", "katex.min.css"), path.join(OUT, "assets", "katex.min.css"));
fs.cpSync(path.join(katexRoot, "dist", "fonts"), path.join(OUT, "assets", "fonts"), { recursive: true });

/* ------------------------------------------------------------- link rewrites */

const tail2 = (p) => path.join(path.basename(path.dirname(p)), path.basename(p)).toLowerCase();

const resolveTarget = (from, rawHref) => {
  const decoded = decodeURI(rawHref.split("#")[0].split("?")[0]);
  const hash = rawHref.includes("#") ? "#" + rawHref.split("#").slice(1).join("#") : "";
  const abs = path.resolve(path.dirname(from), decoded);
  const page = pages.get(abs);
  if (page) return page.href + hash;
  if (imageHref.has(abs)) return imageHref.get(abs);

  // Obsidian paths do not always line up with where the assets actually live,
  // so fall back to matching "<folder>/<file>" and then bare file names.
  const imgKeys = [...imageHref.keys()];
  const img2 = imgKeys.find((k) => tail2(k) === tail2(abs));
  if (img2) return imageHref.get(img2);

  const hit = [...pages.values()].find(
    (p) => path.basename(p.file).toLowerCase() === path.basename(decoded).toLowerCase()
  );
  if (hit) return hit.href + hash;

  const img = imgKeys.find((k) => path.basename(k).toLowerCase() === path.basename(decoded).toLowerCase());
  return img ? imageHref.get(img) : null;
};

/* --------------------------------------------------------------- md renderer */

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

  // `#`/`##` mark in-page sections; demote one level so the page title stays
  // the only H1, then build the table of contents.
  const demote = { h1: "h2", h2: "h3", h3: "h4", h4: "h5", h5: "h6", h6: "h6" };
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type !== "heading_open" && t.type !== "heading_close") continue;
    t.tag = demote[t.tag] ?? t.tag;
    if (t.type === "heading_open" && (t.meta?.origTag === "h1" || t.meta?.origTag === "h2")) {
      headings.push({ id: t.meta.id, text: t.meta.text, level: t.tag });
    }
  }

  const withCallouts = page.legacy ? wrapLegacyCallouts(tokens) : wrapObsidianCallouts(tokens, md, env);
  const withSections = wrapSections(withCallouts, md, env);

  return { html: md.renderer.render(withSections, md.options, env), headings };
};

/* ------------------------------------------------- callouts & collapsibles */

const htmlTok = (content) => ({ type: "html_block", tag: "", content, block: true, attrs: null, children: null });

const kindOf = (label) => {
  const l = label.trim().toLowerCase();
  if (l.startsWith("definition") || l.startsWith("notation")) return "definition";
  if (l.startsWith("proof") || l.startsWith("no proof")) return "proof";
  if (l.startsWith("exercise")) return "exercise";
  if (l.startsWith("solution")) return "solution";
  if (l.startsWith("theorem") || l.startsWith("lemma") || l.startsWith("corollary") || l.startsWith("proposition"))
    return "theorem";
  if (l.startsWith("example") || l.startsWith("remark") || l.startsWith("note")) return "note";
  return null;
};

// Prefer the label ("***Theorem***") when it names a block kind, otherwise the
// callout type ("[!note]"), otherwise treat it as a plain note.
const calloutKind = (label, type = "") => kindOf(label) ?? kindOf(type) ?? "note";

const stripEmphasis = (s) =>
  s
    .replace(/^\**\s*|\s*\**$/g, "")
    .replace(/[*_]{1,3}/g, "")
    .trim();

const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Obsidian: `> [!definition] ***Definition***` (a `-`/`+` suffix on the type
// makes it collapsible: `-` closed, `+` open).
const wrapObsidianCallouts = (tokens, mdInst, env) => {
  const out = [];
  const closers = []; // stack of html strings for matching blockquote_close
  const OPEN_RE = /^\[!([A-Za-z-]+)\]([+-]?)\s*(.*)$/;

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];

    if (t.type === "blockquote_open") {
      const pOpen = tokens[i + 1];
      const inline = tokens[i + 2];
      const m =
        pOpen?.type === "paragraph_open" && inline?.type === "inline"
          ? inline.content.split("\n")[0].match(OPEN_RE)
          : null;

      if (m) {
        const [, type, fold, rest] = m;
        const rawLabel = stripEmphasis(rest) || titleCase(type);
        const kind = calloutKind(stripEmphasis(rest), type);
        const labelHtml = mdInst.renderInline(fixMath(rawLabel), env);

        // Remove the marker line from the first paragraph.
        const remainder = inline.content.split("\n").slice(1).join("\n");
        if (remainder.trim()) {
          inline.content = remainder;
          inline.children = null;
          mdInst.inline.parse(inline.content, mdInst, env, (inline.children = []));
        } else {
          tokens.splice(i + 1, 3); // drop the now-empty paragraph
        }

        if (fold) {
          out.push(
            htmlTok(
              `<details class="callout callout-${kind} callout-fold"${fold === "+" ? " open" : ""}>` +
                `<summary class="callout-label">${labelHtml}<span class="callout-chevron" aria-hidden="true"></span></summary>` +
                `<div class="callout-body">`
            )
          );
          closers.push("</div></details>");
        } else {
          out.push(
            htmlTok(
              `<section class="callout callout-${kind}"><p class="callout-label">${labelHtml}</p><div class="callout-body">`
            )
          );
          closers.push("</section:callout>");
        }
        continue;
      }

      closers.push(null);
      out.push(t);
      continue;
    }

    if (t.type === "blockquote_close") {
      const c = closers.pop();
      if (c === "</section:callout>") out.push(htmlTok("</div></section>"));
      else if (c) out.push(htmlTok(c));
      else out.push(t);
      continue;
    }

    out.push(t);
  }
  return out;
};

// Notion export: a standalone `***Definition***` paragraph opens a block that
// runs to the next marker, heading, or divider.
const LEGACY_RE = /^\*\*\*\s*(Definition|Definition continued|Theorem|Lemma|Corollary|Proposition|Proof|No proof|Exercise|Example|Remark|Notation)\s*\*\*\*:?\s*$/i;

const wrapLegacyCallouts = (tokens) => {
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
      t.type === "paragraph_open" && inline?.type === "inline" ? inline.content.match(LEGACY_RE) : null;

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
      i += 2;
      continue;
    }

    if (t.type === "heading_open" || t.type === "hr") close();
    out.push(t);
  }
  close();
  return out;
};

// Top-level chapter sections (source `#`, demoted to h2) become <details>.
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
const linkOrder = [...expandWikilinks(rootPage.raw).matchAll(/\]\(([^)]+\.md)\)/g)]
  .map((m) => resolveTarget(rootFile, m[1]))
  .filter(Boolean)
  .map((h) => h.split("#")[0]);
// The sidebar lists the current (Obsidian) chapters only; the superseded
// Notion pages stay reachable from the home page's "Old content" list.
const nav = [
  ...linkOrder.map((href) => chapters.find((c) => c.href === href)).filter(Boolean),
  ...chapters.filter((c) => !linkOrder.includes(c.href)),
]
  .filter((c) => !c.legacy)
  .filter((c, i, a) => a.indexOf(c) === i);

const siteTitle = rootPage.title;

const layout = ({ page, body, headings }) => {
  const navHtml = nav
    .map(
      (c) =>
        `<li><a class="nav-link${c.slug === page.slug ? " is-active" : ""}" href="${c.href}">${esc(c.title)}</a></li>`
    )
    .join("\n");

  const tocHtml = headings.length
    ? `<nav class="toc" aria-label="On this page"><p class="toc-title">On this page</p><ul>${headings
        .map((h) => `<li class="toc-${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`)
        .join("")}</ul></nav>`
    : "";

  const idx = nav.findIndex((c) => c.slug === page.slug);
  const prev = idx > 0 ? nav[idx - 1] : null;
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
    .replace(/^>.*$/gm, "")
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

  // ---- Remember which dropdowns were left open, per page ----------------
  // Each <details> gets a stable key (page + position) and its open state
  // is saved to localStorage whenever it is toggled.
  var STORE_KEY = "mr-details:" + location.pathname;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) {}
  document.querySelectorAll("details").forEach(function (d, i) {
    d.dataset.dkey = String(i);
    if (Object.prototype.hasOwnProperty.call(saved, i)) d.open = !!saved[i];
    d.addEventListener("toggle", function () {
      saved[i] = d.open;
      try { localStorage.setItem(STORE_KEY, JSON.stringify(saved)); } catch (e) {}
    });
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
