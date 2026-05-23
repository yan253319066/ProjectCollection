# Blog Navigation Design

**Date:** 2026-05-23
**Status:** Design Spec

## Motivation

Add a blog section to Neil Yan's VitePress portfolio site (0xx402.com) to increase SEO and GEO (Generative Engine Optimization) weight. Blog content (technical tutorials, industry insights, trend analysis) will generate indexed pages, build internal link networks to projects (especially XPayLabs at xpaylabs.com), and attract enterprises, developers, and individual users.

## Scope

- Add blog pages for **Chinese** (`/blog/`) and **English** (`/en/blog/`)
- Japanese and Korean nav items point to English blog
- Custom Vue components for blog list
- SEO/GEO optimization (JSON-LD, RSS, internal links)
- No new npm dependencies

## Directory Structure

```
docs/
├── blog/                          # Chinese blog
│   ├── index.md                   # Blog list page (zh)
│   ├── how-to-integrate-xpaylabs.md
│   └── smart-contract-security-tips.md
├── en/blog/                       # English blog
│   ├── index.md                   # Blog list page (en)
│   ├── how-to-integrate-xpaylabs.md
│   └── smart-contract-security-tips.md
├── components/
│   ├── projects.ts                # Existing project data
│   ├── blog-posts.ts              # NEW: Blog post metadata
│   ├── BlogList.vue               # NEW: Blog listing component
│   ├── ProjectGrid.vue
│   ├── ProjectCard.vue
│   └── ProjectModal.vue
```

## Blog Post Frontmatter

Each `.md` file uses YAML frontmatter:

```yaml
---
title: How to Integrate XPayLabs Payment Gateway
date: 2026-05-20
author: Neil Yan
tags: ['XPayLabs', 'Payment', 'Integration']
description: Step-by-step guide to integrating XPayLabs for crypto payments
project: xpay-labs
image: /og-blog-image.png
---
```

Fields:
- `title` — Article title (also used for `<title>` and Open Graph)
- `date` — Publication date for sorting and schema markup
- `author` — Defaults to "Neil Yan"
- `tags` — Categorization for filtering
- `description` — Meta description, OG description, JSON-LD excerpt
- `project` — (Optional) Links to a project ID in `projects.ts`
- `image` — (Optional) OG image override

## Blog Data Layer

### `docs/components/blog-posts.ts`

Similar pattern to `projects.ts`. Exports an array of blog post entries, each containing references to `.md` files + locale-specific metadata:

```typescript
export interface BlogPost {
  id: string                    // matches the .md filename (without extension)
  titleZh: string
  titleEn: string
  date: string                  // ISO date for sorting
  tagsZh: string[]
  tagsEn: string[]
  descriptionZh: string
  descriptionEn: string
  projectId?: string            // links to a project in projects.ts
}
```

A helper function `getBlogPosts(locale)` returns posts sorted by date descending for the given locale.

## Blog List Page

- `docs/blog/index.md` and `docs/en/blog/index.md` are VitePress content pages
- Each embeds `<BlogList locale="zh" />` or `<BlogList locale="en" />`
- `<BlogList>` component reads from `blog-posts.ts`, renders a list with:
  - Title (linked to the `.md` page)
  - Date
  - Tags (as styled badges)
  - Description excerpt
  - Related project card (if `projectId` is set)

## Navigation Updates

In `docs/.vitepress/config.mts`, update `themeConfig.nav` for each locale:

| Locale | Nav Text | Link |
|--------|----------|------|
| zh-CN (root) | 博客 | `/blog/` |
| en-US | Blog | `/en/blog/` |
| ja-JP | ブログ | `/en/blog/` |
| ko-KR | 블로그 | `/en/blog/` |

## SEO / GEO Optimization

### Article JSON-LD

Each blog page (`*.md`) injects `<script type="application/ld+json">` with `@type: Article` via the `head` frontmatter:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "<title>",
  "description": "<description>",
  "author": { "@type": "Person", "name": "Neil Yan" },
  "datePublished": "<date>",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "<url>" }
}
```

Implementation: generate the `head` array dynamically in `config.mts` or use a per-page frontmatter helper.

### Internal Linking

- `<BlogList>` renders a "Related Project" card linking to the project URL (e.g., XPayLabs)
- Posts can cross-reference each other with markdown links
- Project sections on the homepage can cite relevant blog posts

### RSS Feed

Post-build script `scripts/generate-rss.mjs`:

- Reads `blog-posts.ts` data + generated HTML files
- Generates `docs/.vitepress/dist/blog/rss.xml` and `dist/en/blog/rss.xml`
- RSS 2.0 format with `<item>` per post, including description and link

Add `<link>` tag in `<head>` to point to RSS.

### LLMs Plugin

`vitepress-plugin-llms` automatically includes all new `.md` pages. No config change needed — `ignoreFiles: ['*/ja/*', '*/ko/*']` already excludes Japanese/Korean, Chinese/English blog is unaffected.

### Sitemap

Existing `scripts/generate-sitemap.mjs` already walks all `.html` files. New blog pages are automatically included. No change needed.

## Implementation Order

1. Create `docs/components/blog-posts.ts` with post data + helper
2. Create `docs/components/BlogList.vue` component
3. Write sample blog posts (`.md` files) for both locales
4. Update `config.mts` — add nav items for all 4 locales
5. Add JSON-LD head injection for blog pages
6. Implement `scripts/generate-rss.mjs` post-build step
7. Wire RSS into `package.json` build script
8. Verify with `npm run docs:build`

## Files to Create

| File | Purpose |
|------|---------|
| `docs/components/blog-posts.ts` | Blog post data + helper |
| `docs/components/BlogList.vue` | Blog listing component |
| `docs/blog/index.md` | Chinese blog list page |
| `docs/en/blog/index.md` | English blog list page |
| `docs/blog/how-to-integrate-xpaylabs.md` | Sample post (zh) |
| `docs/blog/smart-contract-security-tips.md` | Sample post (zh) |
| `docs/en/blog/how-to-integrate-xpaylabs.md` | Sample post (en) |
| `docs/en/blog/smart-contract-security-tips.md` | Sample post (en) |
| `scripts/generate-rss.mjs` | RSS feed generation |

## Files to Modify

| File | Change |
|------|--------|
| `docs/.vitepress/config.mts` | Add nav items, blog page head handling |
| `docs/.vitepress/theme/index.ts` | Register `BlogList` component |
| `package.json` | Add RSS generation to build script |

## Out of Scope

- Blog search / filtering by tag (future enhancement)
- Comments system
- Japanese and Korean blog content
- Editing/management UI
