# mathreason static site

This turns the markdown in the repository into a static website
that GitHub Pages can serve. Nothing but HTML, CSS, images and locally hosted
KaTeX fonts — no JavaScript framework, no build server.

## What is in the bundle

```
docs/                 the finished website (commit this)
  index.html          home page (the top-level markdown file)
  <chapter>.html      one page per markdown file
  assets/             images, stylesheet, KaTeX css + fonts
  .nojekyll           stops GitHub from re-processing the output
scripts/build-site.mjs   the generator
scripts/site-style.css   all of the site's styling
```

## Publish on GitHub Pages

1. Copy `docs/` (and, if you want to regenerate later, `scripts/`) into the root
   of the `mathreason` repository and push.
2. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**,
   pick branch `main` and folder `/docs`, then Save.
3. The site appears at `https://axiomtutor.github.io/mathreason/`.

## Regenerating after editing the markdown

Requires Node 20+ (or Bun).

```bash
npm install --no-save markdown-it katex @vscode/markdown-it-katex
node scripts/build-site.mjs . docs
```

Then commit the refreshed `docs/`.

## Sources

The **Obsidian vault in `obsidian/`** is the primary source: its home note
becomes `index.html` and its chapters become the sidebar. The older Notion
export at the repository root is still built (so the home page's "Old content"
links keep working) but is left out of the sidebar.

## How it handles the Obsidian markdown

- YAML frontmatter is stripped; `title:` becomes the page title (falling back to
  the first `#` heading).
- Wikilinks (`[[Note|Label]]`, `![[image.png]]`) are converted to real links.
- Obsidian callouts become colored boxes: `> [!definition]`, `> [!theorem]`,
  `> [!proof]`, `> [!exercise]`, `> [!note]`. A `-` after the type
  (`> [!note]- Solution`) makes the box a collapsible dropdown, `+` makes it
  start open. Callout lines that lost their `>` prefix on export are re-attached
  automatically.
- Image paths that point at the old Notion attachment folders are matched by
  folder + filename, so images keep working.

## How it handles the Notion export

- The shallowest markdown file becomes `index.html`; every other file becomes
  `<slug>.html` with the 32-character Notion id stripped from the name.
- Relative `.md` links (including `%20`-escaped ones) are rewritten to the new
  HTML filenames, so all cross-links keep working.
- Images are copied into `assets/` with collision-safe names and lazily loaded.
- `$...$` and `$$...$$` math is rendered at build time with KaTeX. Multi-line
  display math is wrapped in `aligned` so `\\` line breaks survive, and a few
  unicode operators Notion inserts are swapped for TeX commands.
- The sidebar order follows the order the home page links to the chapters;
  anything not linked from the home page is appended afterwards.
- Each page gets its own `<title>`, meta description and Open Graph tags,
  an on-page table of contents, and previous/next navigation.

## Styling

Everything lives in `scripts/site-style.css` (copied to `docs/assets/style.css`
at build time). Edit the variables at the top to change the paper/ink/accent
colours, fonts, or text measure.
