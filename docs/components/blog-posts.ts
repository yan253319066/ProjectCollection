export interface BlogPost {
  id: string
  titleZh: string
  titleEn: string
  titleJa?: string
  titleKo?: string
  date: string
  tagsZh: string[]
  tagsEn: string[]
  tagsJa?: string[]
  tagsKo?: string[]
  descriptionZh: string
  descriptionEn: string
  descriptionJa?: string
  descriptionKo?: string
  projectId?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'independent-developer-survival-guide',
    titleZh: '独立开发者生存指南：从接项目到自研产品，我的 17 年全栈之路',
    titleEn: "The Independent Developer's Survival Guide: 17 Years of Full-Stack, From Freelancing to Building Products",
    date: '2026-07-08',
    tagsZh: ['独立开发者', '全栈开发', '自由职业', '远程工作', '接项目', '创业', 'Web3', '独立创始人', '副业', '开发者成长'],
    tagsEn: ['Independent Developer', 'Full-Stack', 'Freelance', 'Remote Work', 'Solo Founder', 'Web3', 'Indie Hacker', 'Career Growth', 'Side Project'],
    descriptionZh: '从 17 年全栈开发经验出发，分享独立开发者的真实生存指南：如何找客户、报价技巧、双轨模式（自研产品+客户交付）、时间管理和技术栈选择。不只是方法论，更是踩坑经验。',
    descriptionEn: "A 17-year full-stack developer shares the real survival guide for independent developers: finding clients, pricing strategies, the dual-track model (products + client work), time management, and tech stack decisions. Honest lessons from the trenches.",
  },
  {
    id: 'crypto-payment-gateway-comparison',
    titleZh: '自托管 vs 第三方：加密货币支付网关怎么选？全面对比指南',
    titleEn: 'Self-Hosted vs Third-Party Crypto Payment Gateways: A Complete Comparison',
    date: '2026-07-08',
    tagsZh: ['加密货币支付', '支付网关', 'XPayLabs', 'USDT', '自托管', '电商', '区块链支付', 'TRON', '支付接入'],
    tagsEn: ['Crypto Payment', 'Payment Gateway', 'XPayLabs', 'USDT', 'Self-Hosted', 'E-Commerce', 'Blockchain Payment', 'TRON', 'Payment Integration'],
    descriptionZh: '加密货币支付网关选型指南。从手续费、资金控制权、KYC、接入难度等 8 个维度对比自托管和第三方方案，帮助电商和开发者选择最适合的加密支付方案。',
    descriptionEn: 'A comprehensive comparison of self-hosted vs third-party crypto payment gateways across 8 dimensions: fees, fund control, KYC, integration difficulty, and more. Built on experience from XPayLabs.',
    projectId: 'xpay-labs'
  },
  {
    id: 'how-to-get-cited-by-chatgpt-geo-guide',
    titleZh: '如何被 ChatGPT 引用？AI 品牌可见性（GEO）实战指南',
    titleEn: 'How to Get Cited by ChatGPT: A Practical Guide to AI Brand Visibility (GEO)',
    date: '2026-07-08',
    tagsZh: ['GEO', 'AI品牌可见性', 'ChatGPT', '生成式引擎优化', 'AI搜索', 'LLM', 'GetCiteFlow', 'AI引用'],
    tagsEn: ['GEO', 'AI Brand Visibility', 'ChatGPT', 'Generative Engine Optimization', 'AI Search', 'LLM', 'GetCiteFlow', 'AI Citations'],
    descriptionZh: 'AI 搜索引擎（ChatGPT、Perplexity、Claude）正在改变用户获取信息的方式。本文从实战出发，详解如何优化网站被 AI 引用的 6 个核心维度和 7 个可执行步骤，帮助你抓住 AI 搜索流量入口。',
    descriptionEn: 'AI search engines like ChatGPT, Perplexity, and Claude are changing how users discover information. A practical guide covering the 6 dimensions and 7 actionable steps to get your website cited by AI, from the builder of GetCiteFlow.',
    projectId: 'getciteflow'
  },
  {
    id: 'google-ai-optimization-guide',
    titleZh: 'Google 官方 AI 搜索优化指南解读：哪些该做，哪些是噱头？',
    titleEn: "Google's Official AI Search Optimization Guide: What Works, What's Hype?",
    date: '2026-06-13',
    tagsZh: ['Google', 'AI搜索', 'SEO', 'GEO', 'AI Overviews', 'E-E-A-T', '搜索优化', 'GetCiteFlow'],
    tagsEn: ['Google', 'AI Search', 'SEO', 'GEO', 'AI Overviews', 'E-E-A-T', 'Search Optimization', 'GetCiteFlow'],
    descriptionZh: 'Google 正式发布了 AI 搜索优化官方指南。本文解读核心要点，分析 Google 的建议与其它 AI 平台（ChatGPT、Claude、Perplexity）的差异，并介绍如何全面覆盖所有 AI 搜索引擎的优化需求。',
    descriptionEn: 'Google has officially released its AI search optimization guide. Breaks down key takeaways, analyzes differences between Google and other AI platforms, and covers cross-platform optimization strategies.',
    projectId: 'getciteflow'
  },
  {
    id: 'what-is-geo-generative-engine-optimization',
    titleZh: '什么是GEO？让网站被ChatGPT、Claude、Perplexity引用的完整指南',
    titleEn: 'What is GEO? The Complete Guide to Getting Your Website Cited by ChatGPT, Claude & Perplexity',
    titleJa: 'GEOとは？ChatGPT、Claude、Perplexityに引用されるための完全ガイド',
    titleKo: 'GEO란? ChatGPT, Claude, Perplexity에 인용되는 완벽 가이드',
    date: '2026-06-13',
    tagsZh: ['GEO', 'Generative Engine Optimization', 'AI搜索', 'LLM', 'ChatGPT', 'Claude', 'Perplexity', 'AI可见性', 'SEO'],
    tagsEn: ['GEO', 'Generative Engine Optimization', 'AI Search', 'LLM', 'ChatGPT', 'Claude', 'Perplexity', 'AI Visibility', 'SEO'],
    tagsJa: ['GEO', 'Generative Engine Optimization', 'AI検索', 'LLM', 'ChatGPT', 'Claude', 'Perplexity', 'AI可視性'],
    tagsKo: ['GEO', 'Generative Engine Optimization', 'AI 검색', 'LLM', 'ChatGPT', 'Claude', 'Perplexity', 'AI 가시성'],
    descriptionZh: 'GEO（Generative Engine Optimization）是让网站被AI搜索引擎引用的关键技术。本文详解GEO原理、8大优化维度、实施步骤，以及如何用GetCiteFlow提升AI可见性。',
    descriptionEn: 'GEO (Generative Engine Optimization) is the key to getting your website cited by AI search engines. This guide covers 8 optimization dimensions, implementation steps, and how GetCiteFlow can help.',
    descriptionJa: 'GEO（Generative Engine Optimization）は、WebサイトがAI検索エンジンに引用されるための重要な技術です。GEOの原理、8つの最適化次元、実装手順、GetCiteFlowを使ったAI可視性向上方法を詳しく解説します。',
    descriptionKo: 'GEO(Generative Engine Optimization)는 웹사이트가 AI 검색 엔진에 인용되는 핵심 기술입니다. GEO 원리, 8가지 최적화 차원, 구현 단계, GetCiteFlow를 사용한 AI 가시성 향상 방법을 상세히 설명합니다.',
    projectId: 'getciteflow'
  },
  {
    id: 'what-is-xpaylabs',
    titleZh: 'XPayLabs 是什么？自托管加密支付网关完全解读',
    titleEn: 'What Is XPayLabs? A Complete Guide to Self-Hosted Crypto Payments',
    date: '2025-11-08',
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
    date: '2020-03-15',
    tagsZh: ['Solidity', '安全', '智能合约', '开发'],
    tagsEn: ['Solidity', 'Security', 'Smart Contract', 'Development'],
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点，包括重入攻击防护、权限管理、预言机安全等关键实践。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience, covering reentrancy protection, access control, oracle security, and more.',
  },
  {
    id: 'dapp-development-cost',
    titleZh: '开发一个 DApp 需要多少钱？2026 年 Web3 开发完整预算指南',
    titleEn: 'How Much Does It Cost to Build a DApp? 2026 Web3 Development Budget Guide',
    date: '2026-03-01',
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
    tagsEn: ['Web3 Developer', 'Hire Blockchain Developer', 'Smart Contract Developer', 'Founder & Developer', 'DApp Development'],
    descriptionZh: '想找 Web3 开发者但不知道从哪里开始？本文详细介绍如何找到合适的区块链开发者，包括招聘渠道、评估标准、避坑指南和真实预算参考。',
    descriptionEn: 'Looking to hire a Web3 developer? This guide covers where to find blockchain developers, how to evaluate them, red flags to avoid, and real budget expectations for DApp projects.',
  },
  {
    id: 'nft-marketplace-development-guide',
    titleZh: 'NFT 市场开发指南：从智能合约到前端部署',
    titleEn: 'NFT Marketplace Development Guide: From Smart Contracts to Deployment',
    date: '2021-06-20',
    tagsZh: ['NFT', '市场', '智能合约', 'ERC721', 'Solidity', 'Web3开发'],
    tagsEn: ['NFT', 'Marketplace', 'Smart Contract', 'ERC721', 'Solidity', 'Web3 Development'],
    descriptionZh: '完整的 NFT 市场开发指南，涵盖 ERC721 合约编写、元数据存储、铸币功能、交易市场合约和前端集成，以及常见安全陷阱和成本预算。',
    descriptionEn: 'Complete NFT marketplace development guide covering ERC721 contract writing, metadata storage, minting, marketplace contract, frontend integration, security pitfalls, and cost estimates.',
    projectId: 'blackhole-protocol'
  },
  {
    id: 'what-is-rwa-tokenization',
    titleZh: 'RWA 代币化是什么？现实世界资产上链完整解读',
    titleEn: 'What Is RWA Tokenization? Real-World Assets on the Blockchain',
    date: '2024-09-18',
    tagsZh: ['RWA', '代币化', '现实世界资产', 'DeFi', '区块链', '可再生能源'],
    tagsEn: ['RWA', 'Tokenization', 'Real World Assets', 'DeFi', 'Blockchain', 'Renewable Energy'],
    descriptionZh: 'RWA 代币化是将现实世界资产（如房地产、可再生能源、大宗商品）转化为区块链代币的过程。深入解读 RWA 代币化的原理、优势和实际应用案例。',
    descriptionEn: 'RWA tokenization converts real-world assets like real estate, renewable energy, and commodities into blockchain tokens. A complete guide to how it works, benefits, and use cases.',
    projectId: 'solaris-rwa'
  },
  {
    id: 'multi-chain-dapp-development',
    titleZh: '多链 DApp 开发指南：一次部署 15+ 条公链的实战经验',
    titleEn: 'Multi-Chain DApp Development Guide: Deploying Across 15+ Blockchains',
    date: '2022-08-10',
    tagsZh: ['多链', '跨链', 'DApp', 'Ethereum', 'Polygon', 'Arbitrum', '智能合约'],
    tagsEn: ['Multi-Chain', 'Cross-Chain', 'DApp', 'Ethereum', 'Polygon', 'Arbitrum', 'Smart Contract'],
    descriptionZh: '多链 DApp 开发实战指南，覆盖合约适配、跨链桥接、链上交互差异、Gas 策略和部署流程。基于 15+ 条公链的实际部署经验总结。',
    descriptionEn: 'Multi-chain DApp development guide covering contract adaptation, cross-chain bridges, chain-specific differences, gas strategies, and deployment workflows based on 15+ chain deployment experience.',
  },
  {
    id: 'smart-contract-audit-guide',
    titleZh: '智能合约审计指南：流程、费用和常见漏洞',
    titleEn: 'Smart Contract Audit Guide: Process, Costs, and Common Vulnerabilities',
    date: '2023-04-05',
    tagsZh: ['智能合约', '审计', '安全', 'Solidity', 'DeFi', '漏洞'],
    tagsEn: ['Smart Contract', 'Audit', 'Security', 'Solidity', 'DeFi', 'Vulnerability'],
    descriptionZh: '智能合约审计完整指南 — 审计流程、费用参考、10 个最常见智能合约漏洞类型，以及如何选择审计公司。基于 8 年 Web3 开发和审计对接经验。',
    descriptionEn: 'Complete smart contract audit guide covering the audit process, cost estimates, 10 most common smart contract vulnerability types, and how to choose an audit firm.',
  }
]

export function getBlogPosts(locale: 'zh' | 'en' | 'ja' | 'ko') {
  const filtered = locale === 'ja' ? blogPosts.filter(p => p.titleJa)
    : locale === 'ko' ? blogPosts.filter(p => p.titleKo)
    : blogPosts
  return filtered
    .map(post => {
      const title = locale === 'zh' ? post.titleZh
        : locale === 'ja' ? (post.titleJa || post.titleEn)
        : locale === 'ko' ? (post.titleKo || post.titleEn)
        : post.titleEn
      const tags = locale === 'zh' ? post.tagsZh
        : locale === 'ja' ? (post.tagsJa || post.tagsEn)
        : locale === 'ko' ? (post.tagsKo || post.tagsEn)
        : post.tagsEn
      const description = locale === 'zh' ? post.descriptionZh
        : locale === 'ja' ? (post.descriptionJa || post.descriptionEn)
        : locale === 'ko' ? (post.descriptionKo || post.descriptionEn)
        : post.descriptionEn
      const link = locale === 'zh' ? `/blog/${post.id}`
        : locale === 'en' ? `/en/blog/${post.id}`
        : locale === 'ja' ? `/ja/blog/${post.id}`
        : `/ko/blog/${post.id}`
      return { ...post, title, tags, description, link }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
