import { writeFileSync, existsSync } from 'fs'
import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://www.0xx402.com'
const outDir = resolve(__dirname, '..', 'docs', '.vitepress', 'dist')

if (!existsSync(outDir)) {
  console.error('❌ dist directory not found')
  process.exit(1)
}

const posts = [
  {
    id: 'what-is-xpaylabs',
    titleZh: 'XPayLabs 是什么？自托管加密支付网关完全解读',
    titleEn: 'What Is XPayLabs? A Complete Guide to Self-Hosted Crypto Payments',
    date: '2026-05-23',
    descriptionZh: 'XPayLabs 是一个自托管、非托管的加密支付基础设施。支持 TRON、20+ EVM 链和 SUI 网络，零网关手续费，企业级安全。',
    descriptionEn: 'XPayLabs is a self-hosted, non-custodial crypto payment infrastructure supporting TRON, 20+ EVM chains, and SUI. Zero gateway fees, enterprise-grade security.',
  },
  {
    id: 'smart-contract-security-tips',
    titleZh: '智能合约安全开发最佳实践',
    titleEn: 'Smart Contract Security Best Practices',
    date: '2026-05-10',
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience.',
  }
]

function rssXml(locale) {
  const lang = locale === 'zh' ? 'zh-CN' : 'en-US'
  const prefix = locale === 'zh' ? '' : '/en'
  const title = locale === 'zh' ? 'Neil Yan Web3 技术博客' : 'Neil Yan Web3 Tech Blog'
  const desc = locale === 'zh' ? 'Web3 技术博客，涵盖智能合约开发、DeFi 协议、加密货币支付等话题。' : 'Web3 technical blog covering smart contracts, DeFi, crypto payments, and more.'
  const link = siteUrl + prefix + '/blog/'

  const items = posts.map(p => {
    const itemLink = siteUrl + prefix + '/blog/' + p.id + '.html'
    const itemTitle = locale === 'zh' ? p.titleZh : p.titleEn
    const itemDesc = locale === 'zh' ? p.descriptionZh : p.descriptionEn
    return `    <item>
      <title><![CDATA[${itemTitle}]]></title>
      <link>${itemLink}</link>
      <description><![CDATA[${itemDesc}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid>${itemLink}</guid>
    </item>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${link}</link>
    <description>${desc}</description>
    <language>${lang}</language>
    <atom:link href="${link}rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`
}

writeFileSync(join(outDir, 'blog', 'rss.xml'), rssXml('zh'), 'utf-8')
console.log('✅ /blog/rss.xml generated')

writeFileSync(join(outDir, 'en', 'blog', 'rss.xml'), rssXml('en'), 'utf-8')
console.log('✅ /en/blog/rss.xml generated')
