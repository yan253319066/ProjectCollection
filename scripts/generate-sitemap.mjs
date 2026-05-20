import { writeFileSync, readdirSync, existsSync } from 'fs'
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
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html') && entry.name !== '404.html' && !entry.name.startsWith('google')) {
      let url = relative(outDir, full).replace(/\\/g, '/')
      if (url === 'index.html' || url === 'index') url = ''
      else if (url.endsWith('/index.html')) url = url.slice(0, -10)
      else if (url.endsWith('.html')) url = url.slice(0, -5)
      pages.push('/' + url)
    }
  }
}
walk(outDir)

const urls = pages.map(p => `  <url><loc>${siteUrl}${p}</loc></url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf-8')
console.log(`✅ sitemap.xml generated with ${pages.length} URLs`)
