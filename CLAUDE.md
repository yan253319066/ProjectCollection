# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

VitePress 1.6.x static portfolio site for Neil Yan (Web3 founder). Deployed to Vercel at `www.0xx402.com`.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run docs:dev` | Dev server (hot reload) on `docs/` |
| `npm run docs:build` | Production build → sitemap gen → RSS gen (chained sequentially) |
| `npm run docs:preview` | Preview the production build locally |

No linter, no tests, no CI pipeline.

## Architecture

### Multi-locale structure

4 locales, each with its own directory under `docs/`:

| Locale | Path | VitePress route |
|--------|------|----------------|
| zh-CN (root) | `docs/` | `/` |
| en-US | `docs/en/` | `/en/` |
| ja-JP | `docs/ja/` | `/ja/` |
| ko-KR | `docs/ko/` | `/ko/` |

Each locale has: `index.md` (homepage), `seo.md` (SEO landing page), `geo-services.md` (GEO services page). Blog posts and project pages exist only for locales that have translated content. **ja and ko are partial translations** — only a subset of blog posts and project pages are translated.

### Shared vs locale-specific content

- **Shared** (one file, used by all locales): `docs/components/projects.ts`, `docs/components/blog-posts.ts` — both contain all 4 locale strings inline via `nameZh`/`nameEn`/`nameJa`/`nameKo` pattern.
- **Locale-specific** (one file per locale): All `.md` pages under `docs/`, `docs/en/`, `docs/ja/`, `docs/ko/`.
- **ja/ko blog filtering**: [blog-posts.ts](docs/components/blog-posts.ts) `getBlogPosts()` filters posts to only those with `titleJa`/`titleKo` set. The `BlogList.vue` component uses this to avoid showing 404 links for untranslated posts. Don't break this invariant.

### Key files

- **[docs/.vitepress/config.mts](docs/.vitepress/config.mts)**: Single VitePress config with all 4 locale definitions, SEO head tags (JSON-LD Person/WebSite/FAQPage per locale, OG meta, hreflang alternates), VitePress LLMs plugin config, and `transformHead` hook for blog article metadata. This is the "god object" of the site — changes to nav, title, SEO, or locale setup all happen here.
- **[docs/components/projects.ts](docs/components/projects.ts)**: The single source of truth for all 9 portfolio projects. Each project has `name*`, `tagline*`, `description*` fields for all 4 locales. `ProjectGrid`, `ProjectCard`, and `ProjectModal` Vue components consume this data.
- **[docs/components/blog-posts.ts](docs/components/blog-posts.ts)**: All 10 blog post metadata with `getBlogPosts(locale)` helper that filters and sorts. Blog page components consume this.
- **[docs/.vitepress/theme/index.ts](docs/.vitepress/theme/index.ts)**: Custom theme entry — extends VitePress default, registers custom Vue components globally (`ProjectGrid`, `ProjectCard`, `ProjectModal`, `BlogList`, `BackToBlog`).
- **[docs/.vitepress/theme/Layout.vue](docs/.vitepress/theme/Layout.vue)**: Wraps VitePress default layout to inject Vercel Analytics and `BreadcrumbJsonLd` structured data.

### Post-build scripts (run in order after `vitepress build`)

1. **`scripts/generate-sitemap.mjs`**: Walks the dist directory, generates `sitemap.xml`, AND injects canonical `<link>` tags into every HTML file's `<head>`. Exists because VitePress's built-in sitemap plugin didn't meet SEO requirements.
2. **`scripts/generate-rss.mjs`**: Generates `blog/rss.xml` (zh) and `en/blog/rss.xml` (en) from a hardcoded post list. **Note**: the RSS post list in this script is a separate copy from `blog-posts.ts` — when adding a new blog post, both files need updating.

### LLMs plugin

`vitepress-plugin-llms` in [config.mts](docs/.vitepress/config.mts) generates `llms.txt` and `llms-full.txt` at build time. Configured to **exclude ja and ko pages** (`ignoreFiles: ['**/ja/**', '**/ko/**']`). Only `llms-full.txt` is generated (per-page LLM-friendly docs disabled).

### SEO/GEO stack

- JSON-LD: `Person` + `WebSite` (site-wide in config head), `FAQPage` (per locale in config), `BreadcrumbList` (per page via `BreadcrumbJsonLd.vue` component)
- hreflang alternates in `<head>` for all 4 locales
- Open Graph + Twitter Card meta tags
- Canonical URLs injected by post-build sitemap script
- `robots.txt` explicitly allows all AI crawlers: Google-Extended, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Applebot

## Conventions

### Adding a new project
1. Append to the `projects` array in [docs/components/projects.ts](docs/components/projects.ts) — fill all `name*`, `tagline*`, `description*` fields for all 4 locales
2. If the project has a detail page (`detailPath`), create the corresponding `.md` file in each locale's `projects/` directory that should have it

### Adding a new blog post
1. Add to the `blogPosts` array in [docs/components/blog-posts.ts](docs/components/blog-posts.ts)
2. Create the `.md` file in `docs/blog/` and `docs/en/blog/` (plus `ja/`/`ko/` if translated)
3. Update the `posts` array in [scripts/generate-rss.mjs](scripts/generate-rss.mjs) — they're not synced automatically
4. If ja/ko translations exist, set `titleJa`/`titleKo` and `descriptionJa`/`descriptionKo`; otherwise the post is hidden from those locales

### Locale routing
- zh content goes in `docs/<section>/` (no prefix)
- Other locales mirror the structure under `docs/<locale>/<section>/`
- ja/ko blog and project content is a **subset** — only create files that have actual translations
- `getBlogPosts('ja')` and `getBlogPosts('ko')` automatically filter to posts with translations

### Theme customization
- Minor overrides in [docs/.vitepress/theme/custom.css](docs/.vitepress/theme/custom.css) — use VitePress CSS variables (`--vp-c-*`)
- Custom Vue components registered globally in theme `index.ts` — available in any `.md` file without importing

### Editing config.mts
- Each locale section is ~100 lines of near-duplicate config (head tags, nav, themeConfig). When changing nav structure, metadata, or JSON-LD, update all 4 locale blocks.
- The `head` array at the root level applies site-wide; per-locale `head` arrays under each locale entry are merged in.
