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

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html') && entry.name !== '404.html' && !entry.name.startsWith('google')) {
      const url = pageUrl(full)
      const stat = statSync(full)
      const lastmod = stat.mtime.toISOString().split('T')[0]
      const isIndex = url === '' || url.endsWith('/index')
      const changefreq = isIndex ? 'weekly' : 'monthly'
      const priority = isIndex ? '1.0' : url === '' ? '1.0' : '0.8'
      pages.push({ url: '/' + url, full, lastmod, changefreq, priority })
    }
  }
}
walk(outDir)

// Generate sitemap.xml
const urls = pages.map(p => `  <url>\n    <loc>${siteUrl}${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf-8')
console.log(`✅ sitemap.xml generated with ${pages.length} URLs`)

// Inject canonical URLs into each HTML file
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
