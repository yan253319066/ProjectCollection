export interface BlogPost {
  id: string
  titleZh: string
  titleEn: string
  date: string
  tagsZh: string[]
  tagsEn: string[]
  descriptionZh: string
  descriptionEn: string
  projectId?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'what-is-xpaylabs',
    titleZh: 'XPayLabs 是什么？自托管加密支付网关完全解读',
    titleEn: 'What Is XPayLabs? A Complete Guide to Self-Hosted Crypto Payments',
    date: '2026-05-23',
    tagsZh: ['XPayLabs', '支付网关', '加密货币', '自托管', 'USDT'],
    tagsEn: ['XPayLabs', 'Payment Gateway', 'Cryptocurrency', 'Self-Hosted', 'USDT'],
    descriptionZh: 'XPayLabs 是一个自托管、非托管的加密支付基础设施。支持 TRON、20+ EVM 链和 SUI 网络，零网关手续费，企业级安全。了解它的核心优势和与 BitPay 等竞品的对比。',
    descriptionEn: 'XPayLabs is a self-hosted, non-custodial crypto payment infrastructure supporting TRON, 20+ EVM chains, and SUI. Zero gateway fees, enterprise-grade security. Compare with BitPay, Coinbase Commerce, and NowPayments.',
    projectId: 'xpay-labs'
  },
  {
    id: 'smart-contract-security-tips',
    titleZh: '智能合约安全开发最佳实践',
    titleEn: 'Smart Contract Security Best Practices',
    date: '2026-05-10',
    tagsZh: ['Solidity', '安全', '智能合约', '开发'],
    tagsEn: ['Solidity', 'Security', 'Smart Contract', 'Development'],
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点，包括重入攻击防护、权限管理、预言机安全等关键实践。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience, covering reentrancy protection, access control, oracle security, and more.',
  },
  {
    id: 'dapp-development-cost',
    titleZh: '开发一个 DApp 需要多少钱？2026 年 Web3 开发完整预算指南',
    titleEn: 'How Much Does It Cost to Build a DApp? 2026 Web3 Development Budget Guide',
    date: '2026-05-25',
    tagsZh: ['DApp', 'Web3开发', '开发成本', '智能合约', 'DeFi', '预算'],
    tagsEn: ['DApp', 'Web3 Development', 'Development Cost', 'Smart Contract', 'DeFi', 'Budget'],
    descriptionZh: '开发一个 Web3 DApp 要花多少钱？本文从智能合约开发、前端开发、审计部署等维度，详细拆解 DApp 开发预算，帮助你在找 Web3 开发者前做好预算规划。',
    descriptionEn: 'How much does it cost to build a Web3 DApp? This guide breaks down DApp development costs from smart contracts to frontend, helping you budget before hiring a Web3 developer.',
  },
  {
    id: 'how-to-find-web3-developer',
    titleZh: '如何找 Web3 开发者？2026 年完整指南（附避坑建议）',
    titleEn: 'How to Find a Web3 Developer in 2026 — Complete Guide',
    date: '2026-05-25',
    tagsZh: ['Web3开发', '找开发者', '区块链开发外包', '智能合约', '项目预算'],
    tagsEn: ['Web3 Developer', 'Hire Blockchain Developer', 'Smart Contract Developer', 'Freelance Developer', 'DApp Development'],
    descriptionZh: '想找 Web3 开发者但不知道从哪里开始？本文详细介绍如何找到合适的区块链开发者，包括招聘渠道、评估标准、避坑指南和真实预算参考。',
    descriptionEn: 'Looking to hire a Web3 developer? This guide covers where to find blockchain developers, how to evaluate them, red flags to avoid, and real budget expectations for DApp projects.',
  }
]

export function getBlogPosts(locale: 'zh' | 'en') {
  return blogPosts
    .map(post => ({
      ...post,
      title: locale === 'zh' ? post.titleZh : post.titleEn,
      tags: locale === 'zh' ? post.tagsZh : post.tagsEn,
      description: locale === 'zh' ? post.descriptionZh : post.descriptionEn,
      link: locale === 'zh' ? `/blog/${post.id}.html` : `/en/blog/${post.id}.html`
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
