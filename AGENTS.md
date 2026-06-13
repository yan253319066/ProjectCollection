# ProjectCollection — VitePress Portfolio Site

A **VitePress 1.6.x** static site (Neil Yan's Web3 developer portfolio). Stack: Vue 3, Node.js, npm.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run docs:dev` | Dev server on `docs/` |
| `npm run docs:build` | Production build + custom sitemap generation |
| `npm run docs:preview` | Preview production build |

No tests, no linter, no CI.

## Key architecture

- **4 locales**: zh-CN (root `/`), en-US (`/en/`), ja-JP (`/ja/`), ko-KR (`/ko/`). Each locale has `index.md` and `seo.md`.
- **Project data**: All 9 projects in `docs/components/projects.ts`. Edit that file to add/update a project. `ProjectCard`, `ProjectGrid`, `ProjectModal` consume it.
- **LLM plugin** (`vitepress-plugin-llms`): Generates `llms.txt`/`llms-full.txt`. Configured to **ignore** Japanese and Korean pages (`ignoreFiles: ['*/ja/*', '*/ko/*']`).
- **Post-build sitemap**: `scripts/generate-sitemap.mjs` runs **after** `vitepress build`. It generates `sitemap.xml` AND injects canonical `<link>` tags into all HTML files. History: it exists because VitePress's built-in sitemap didn't meet SEO needs.
- **SEO**: JSON-LD structured data (Person, WebSite, FAQPage per locale), Google Search Console verification, Open Graph, all major AI crawlers allowed in `robots.txt`.
- **Deployment**: Vercel (`vercel.json`). Build command: `npm run docs:build`.

## Conventions

- Add new projects by appending to `docs/components/projects.ts` and creating a corresponding project page (or linking to the live DApp URL). All `name*`/`description*` fields must be filled for all 4 locales.
- `docs/.vitepress/theme/custom.css` for minor theme overrides. Use VitePress CSS variables.
- No TypeScript config file needed — VitePress handles TS internally.
- `.trae/` directory is Trae IDE artifacts; ignore for agent work.
