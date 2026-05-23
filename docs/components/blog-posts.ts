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
