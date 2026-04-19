import { defineConfig } from 'vitepress'

const siteUrl = 'https://dev.pulsepay.fun'

export default defineConfig({
  title: "Web3 Developer Portfolio | Yan - 区块链独立开发者",
  description: "Yan - 区块链独立开发者作品集。专注于 Web3、DeFi、DApp 开发。提供 AI 量化交易、加密理财、永续合约、预测市场等 DeFi 项目。掌握 Solidity、React、Next.js、Vue 等技术。",
  outDir: './.vitepress/dist',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'alternate', href: siteUrl, hreflang: 'zh-CN' }],
    ['link', { rel: 'alternate', href: siteUrl + '/en/', hreflang: 'en-US' }],
    ['link', { rel: 'alternate', href: siteUrl + '/ja/', hreflang: 'ja-JP' }],
    ['link', { rel: 'alternate', href: siteUrl + '/ko/', hreflang: 'ko-KR' }],
    ['meta', { name: 'author', content: 'Yan - Web3 Developer' }],
    ['meta', { name: 'keywords', content: 'Web3, Blockchain, DeFi, DApp, Solidity, Ethereum, 智能合约, 量化交易, 加密货币, 区块链开发者, 独立开发者, Crypto, Web3 Developer, Blockchain Developer' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:title', content: 'Web3 Developer Portfolio | Yan - 区块链独立开发者' }],
    ['meta', { property: 'og:description', content: '区块链独立开发者作品集。专注于 Web3、DeFi、DApp 开发。提供 AI 量化交易、加密理财、永续合约、预测市场等 DeFi 项目。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: 'ja_JP' }],
    ['meta', { property: 'og:locale:alternate', content: 'ko_KR' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Web3 Developer Portfolio | Yan - 区块链独立开发者' }],
    ['meta', { name: 'twitter:description', content: '区块链独立开发者作品集。专注于 Web3、DeFi、DApp 开发。' }],
    ['meta', { property: 'og:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'twitter:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Yan",
      "url": siteUrl,
      "jobTitle": "Web3 Developer",
      "description": "区块链独立开发者，专注于 Web3、DeFi、DApp 开发。掌握 Solidity、React、Next.js、Vue 等技术，已发布多个 Web3 DApp 产品。",
      "knowsAbout": ["Web3", "Blockchain", "DeFi", "DApp", "Solidity", "Ethereum", "Smart Contracts", "React", "Next.js", "Vue", "Ethers.js", "wagmi", "viem"],
      "sameAs": ["https://github.com/yan253319066", "https://t.me/OS_Blockchain"],
      "contactPoint": { "@type": "ContactPoint", "email": "yanning-1987@outlook.com", "contactType": "Developer" }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Web3 Developer Portfolio",
      "url": siteUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": siteUrl + "/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Yan 是做什么的开发者？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yan 是区块链独立开发者，专注于 Web3、DeFi、DApp 开发。从 2018 年开始投身区块链技术，已成功发布多个 Web3 DApp 产品。"
          }
        },
        {
          "@type": "Question",
          "name": "Yan 开发过哪些项目？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "已发布 4 个 Web3 DApp：AI Quant Robot（AI 量化交易）、Crypto Earn（加密理财）、Perpetual Trading（永续合约）、Prediction Market（预测市场）。"
          }
        },
        {
          "@type": "Question",
          "name": "如何联系 Yan 开发 Web3 项目？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可通过 GitHub (github.com/yan253319066)、Telegram (@OS_Blockchain)、Email (yanning-1987@outlook.com) 联系。"
          }
        },
        {
          "@type": "Question",
          "name": "Yan 使用什么技术栈？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "智能合约：Solidity、Hardhat、Foundry、OpenZeppelin；前端：React、Next.js、Vue、TypeScript、Tailwind CSS；Web3：Ethers.js、viem、wagmi、Reown AppKit；后端：Node.js、Java、Python；数据库：MySQL、PostgreSQL、Redis、Supabase；AI：Google Gemini、OpenAI、阿里云通义千问。"
          }
        },
        {
          "@type": "Question",
          "name": "支持哪些区块链？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "支持 Ethereum、Polygon、BNB Chain、Solana、Avalanche、Arbitrum、Optimism 等多链。"
          }
        }
      ]
    })]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Web3 Developer Portfolio',
      description: '区块链开发者作品集',
      head: [
        ['link', { rel: 'canonical', href: siteUrl }]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          { text: '项目', link: '/#projects' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 Web3 Developer'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Web3 Developer Portfolio',
      description: 'Blockchain Developer Portfolio',
      head: [
        ['link', { rel: 'canonical', href: siteUrl + '/en/' }]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Projects', link: '/en/#projects' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 Web3 Developer'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      title: 'Web3 Developer Portfolio',
      description: 'ブロック체인開発者ポートフォリオ',
      head: [
        ['link', { rel: 'canonical', href: siteUrl + '/ja/' }]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'プロジェクト', link: '/ja/#projects' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 Web3 Developer'
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      title: 'Web3 Developer Portfolio',
      description: '블록체인 개발자 포트폴리오',
      head: [
        ['link', { rel: 'canonical', href: siteUrl + '/ko/' }]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '프로젝트', link: '/ko/#projects' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 Web3 Developer'
        }
      }
    }
  }
})