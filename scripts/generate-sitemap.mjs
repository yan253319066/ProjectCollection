import { writeFileSync, readFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join, relative, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://www.0xx402.com'
const outDir = resolve(__dirname, '..', 'docs', '.vitepress', 'dist')

if (!existsSync(outDir)) {
  console.error('❌ dist directory not found')
  process.exit(1)
}

const pages = []

function pageUrl(full) {
  let url = relative(outDir, full).replace(/\\/g, '/')
  if (url === 'index.html' || url === 'index') url = ''
  else if (url.endsWith('/index.html')) url = url.slice(0, -10)
  else if (url.endsWith('.html')) url = url.slice(0, -5)
  return url
}

function restKey(url) {
  const p = url.replace(/^\//, '')
  if (p.startsWith('en/')) return p.slice(3)
  if (p.startsWith('ja/')) return p.slice(3)
  if (p.startsWith('ko/')) return p.slice(3)
  return p
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
      const url = pageUrl(full)
      const stat = statSync(full)
      const lastmod = stat.mtime.toISOString().split('T')[0]
      const path = '/' + url
      const isHome = path === '/' || path === '/en/' || path === '/ja/' || path === '/ko/'
      const changefreq = isHome ? 'weekly' : 'monthly'
      const priority = isHome ? '1.0' : path.includes('geo-services') ? '0.9' : '0.8'
      pages.push({ url: path, full, lastmod, changefreq, priority, rest: restKey(path) })
    }
  }
}
walk(outDir)

const byRest = new Map()
for (const p of pages) {
  const list = byRest.get(p.rest) || []
  list.push(p)
  byRest.set(p.rest, list)
}

function hreflangFor(url) {
  if (url.startsWith('/en/')) return 'en-US'
  if (url.startsWith('/ja/')) return 'ja-JP'
  if (url.startsWith('/ko/')) return 'ko-KR'
  return 'zh-CN'
}

function xhtmlLinks(page) {
  const cluster = byRest.get(page.rest) || [page]
  const links = cluster.map(
    (c) => `    <xhtml:link rel="alternate" hreflang="${hreflangFor(c.url)}" href="${siteUrl}${c.url}"/>`
  )
  const zh = cluster.find((c) => hreflangFor(c.url) === 'zh-CN') || cluster[0]
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${zh.url}"/>`)
  return links.join('\n')
}

const urls = pages.map((p) => `  <url>\n    <loc>${siteUrl}${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n${xhtmlLinks(p)}\n  </url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`
writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf-8')
console.log(`✅ sitemap.xml generated with ${pages.length} URLs`)

const canonicalTag = (url) => `<link rel="canonical" href="${siteUrl}${url}">`

for (const { url, full } of pages) {
  let html = readFileSync(full, 'utf-8')
  const existing = html.match(/<link rel="canonical"[^>]*>/)
  if (existing) {
    html = html.replace(existing[0], canonicalTag(url))
  } else {
    html = html.replace('</head>', `  ${canonicalTag(url)}\n</head>`)
  }
  writeFileSync(full, html, 'utf-8')
}
console.log(`✅ canonical URLs injected for ${pages.length} pages`)

for (const name of ['llms.txt', 'llms-full.txt']) {
  const file = join(outDir, name)
  if (!existsSync(file)) continue
  const before = readFileSync(file, 'utf-8')
  const after = before.replace(/\]\((\/[^)\s]+)\.md\)/g, ']($1)')
  if (after !== before) {
    writeFileSync(file, after, 'utf-8')
    console.log(`✅ stripped .md suffixes in ${name}`)
  }
}
