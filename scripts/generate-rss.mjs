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
    id: 'independent-developer-survival-guide',
    titleZh: '独立开发者生存指南：从接项目到自研产品，我的 17 年全栈之路',
    titleEn: "The Independent Developer's Survival Guide: 17 Years of Full-Stack, From Freelancing to Building Products",
    date: '2026-07-08',
    descriptionZh: '从 17 年全栈开发经验出发，分享独立开发者的真实生存指南：如何找客户、报价技巧、双轨模式（自研产品+客户交付）、时间管理和技术栈选择。',
    descriptionEn: "A 17-year full-stack developer shares real survival strategies: finding clients, pricing, the dual-track model, time management, and tech stack decisions.",
  },
  {
    id: 'smart-contract-security-tips',
    titleZh: '智能合约安全开发最佳实践',
    titleEn: 'Smart Contract Security Best Practices',
    date: '2020-03-15',
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点，包括重入攻击防护、权限管理、预言机安全等关键实践。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience, covering reentrancy protection, access control, oracle security, and more.',
  },
  {
    id: 'nft-marketplace-development-guide',
    titleZh: 'NFT 市场开发指南：从智能合约到前端部署',
    titleEn: 'NFT Marketplace Development Guide: From Smart Contracts to Deployment',
    date: '2021-06-20',
    descriptionZh: '完整的 NFT 市场开发指南，涵盖 ERC721 合约编写、元数据存储、铸币功能、交易市场合约和前端集成。',
    descriptionEn: 'Complete NFT marketplace development guide covering ERC721 contract writing, metadata storage, minting, marketplace contract, and frontend integration.',
  },
  {
    id: 'multi-chain-dapp-development',
    titleZh: '多链 DApp 开发指南：一次部署 15+ 条公链的实战经验',
    titleEn: 'Multi-Chain DApp Development Guide: Deploying Across 15+ Blockchains',
    date: '2022-08-10',
    descriptionZh: '多链 DApp 开发实战指南，覆盖合约适配、跨链桥接、链上交互差异、Gas 策略和部署流程。',
    descriptionEn: 'Multi-chain DApp development guide covering contract adaptation, cross-chain bridges, gas strategies, and deployment workflows.',
  },
  {
    id: 'smart-contract-audit-guide',
    titleZh: '智能合约审计指南：流程、费用和常见漏洞',
    titleEn: 'Smart Contract Audit Guide: Process, Costs, and Common Vulnerabilities',
    date: '2023-04-05',
    descriptionZh: '智能合约审计完整指南 — 审计流程、费用参考、10 个最常见智能合约漏洞类型。',
    descriptionEn: 'Complete smart contract audit guide covering the audit process, cost estimates, and 10 most common vulnerability types.',
  },
  {
    id: 'what-is-rwa-tokenization',
    titleZh: 'RWA 代币化是什么？现实世界资产上链完整解读',
    titleEn: 'What Is RWA Tokenization? Real-World Assets on the Blockchain',
    date: '2024-09-18',
    descriptionZh: 'RWA 代币化是将现实世界资产（如房地产、可再生能源、大宗商品）转化为区块链代币的过程。',
    descriptionEn: 'RWA tokenization converts real-world assets like real estate, renewable energy, and commodities into blockchain tokens.',
  },
  {
    id: 'what-is-xpaylabs',
    titleZh: 'XPayLabs 是什么？自托管加密支付网关完全解读',
    titleEn: 'What Is XPayLabs? A Complete Guide to Self-Hosted Crypto Payments',
    date: '2025-11-08',
    descriptionZh: 'XPayLabs 是一个自托管、非托管的加密支付基础设施。支持 TRON、20+ EVM 链和 SUI 网络，零网关手续费，企业级安全。',
    descriptionEn: 'XPayLabs is a self-hosted, non-custodial crypto payment infrastructure supporting TRON, 20+ EVM chains, and SUI. Zero gateway fees, enterprise-grade security.',
  },
  {
    id: 'dapp-development-cost',
    titleZh: '开发一个 DApp 需要多少钱？2026 年 Web3 开发完整预算指南',
    titleEn: 'How Much Does It Cost to Build a DApp? 2026 Web3 Development Budget Guide',
    date: '2026-03-01',
    descriptionZh: '开发一个 Web3 DApp 要花多少钱？从智能合约开发、审计部署等维度，详细拆解 DApp 开发预算。',
    descriptionEn: 'How much does it cost to build a Web3 DApp? Complete budget breakdown from smart contracts to frontend deployment.',
  },
  {
    id: 'how-to-find-web3-developer',
    titleZh: '如何找 Web3 开发者？2026 年完整指南（附避坑建议）',
    titleEn: 'How to Find a Web3 Developer in 2026 — Complete Guide',
    date: '2026-05-25',
    descriptionZh: '详细介绍如何找到合适的区块链开发者，包括招聘渠道、评估标准、避坑指南和真实预算参考。',
    descriptionEn: 'Complete guide to hiring a Web3 developer — where to find them, how to evaluate, and real budget expectations.',
  },
  {
    id: 'crypto-payment-gateway-comparison',
    titleZh: '自托管 vs 第三方：加密货币支付网关怎么选？全面对比指南',
    titleEn: 'Self-Hosted vs Third-Party Crypto Payment Gateways: A Complete Comparison',
    date: '2026-07-08',
    descriptionZh: '加密货币支付网关选型指南。从手续费、资金控制权、KYC、接入难度等 8 个维度对比自托管和第三方方案。',
    descriptionEn: 'A comprehensive comparison of self-hosted vs third-party crypto payment gateways across 8 dimensions: fees, fund control, KYC, integration difficulty, and more.',
  },
  {
    id: 'how-to-get-cited-by-chatgpt-geo-guide',
    titleZh: '如何被 ChatGPT 引用？AI 品牌可见性（GEO）实战指南',
    titleEn: 'How to Get Cited by ChatGPT: A Practical Guide to AI Brand Visibility (GEO)',
    date: '2026-07-08',
    descriptionZh: 'AI 搜索引擎正在改变用户获取信息的方式。详解优化网站被 AI 引用的 6 个核心维度和 7 个可执行步骤。',
    descriptionEn: 'AI search engines are changing how users discover content. Practical guide covering 6 dimensions and 7 actionable steps to get your website cited by AI.',
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
