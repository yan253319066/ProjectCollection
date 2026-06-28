import { defineConfig } from 'vitepress'
import llms from 'vitepress-plugin-llms'

const siteUrl = 'https://www.0xx402.com'

export default defineConfig({
  vite: {
    plugins: [
      llms({
        ignoreFiles: ['*/ja/*', '*/ko/*'],
        generateLLMsFullTxt: true,
        generateLLMFriendlyDocsForEachPage: false
      })
    ]
  },
  title: "Web3 Founder Portfolio | Neil Yan - XPayLabs & GetCiteFlow 创始人",
  description: "Neil Yan — XPayLabs 与 GetCiteFlow 创始人。专注于 Web3、DeFi、DApp 领域创业与产品交付。已推出 AI 量化交易、加密理财、永续合约、混合交易所、RWA代币化、支付网关、预测市场、Blackhole协议等 DeFi 项目。掌握 Solidity、React、Next.js、Vue 等技术栈。",
  outDir: './.vitepress/dist',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['superpowers/**'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'alternate', href: siteUrl, hreflang: 'zh-CN' }],
    ['link', { rel: 'alternate', href: siteUrl + '/en/', hreflang: 'en-US' }],
    ['link', { rel: 'alternate', href: siteUrl + '/ja/', hreflang: 'ja-JP' }],
    ['link', { rel: 'alternate', href: siteUrl + '/ko/', hreflang: 'ko-KR' }],
    ['meta', { name: 'author', content: 'Neil Yan - Web3 Founder & Blockchain Expert' }],
    ['meta', { name: 'keywords', content: 'Web3, Blockchain, DeFi, DApp, Solidity, Ethereum, 智能合约, 量化交易, 加密货币, Web3 Founder, Crypto, Web3 Entrepreneur, Blockchain Project Founder, 区块链项目创始人, 加密货币支付, NFT, EVM, Blackhole Protocol' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (中文)', href: siteUrl + '/blog/rss.xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (English)', href: siteUrl + '/en/blog/rss.xml' }],
    ['meta', { property: 'og:title', content: 'Web3 Founder Portfolio | Neil Yan - XPayLabs & GetCiteFlow 创始人' }],
    ['meta', { property: 'og:description', content: 'XPayLabs 与 GetCiteFlow 创始人。专注于 Web3、DeFi、DApp 领域创业与产品交付。已推出 AI 量化交易、加密理财、永续合约、混合交易所、RWA代币化、支付网关、预测市场、Blackhole协议等 DeFi 项目。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: 'ja_JP' }],
    ['meta', { property: 'og:locale:alternate', content: 'ko_KR' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Web3 Founder Portfolio | Neil Yan - XPayLabs & GetCiteFlow 创始人' }],
    ['meta', { name: 'twitter:description', content: 'XPayLabs 与 GetCiteFlow 创始人。专注于 Web3、DeFi、DApp 领域创业与产品交付。' }],
    ['meta', { property: 'og:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'twitter:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Neil Yan",
      "url": siteUrl,
      "jobTitle": "Web3 Founder & Blockchain Expert",
      "description": "XPayLabs 与 GetCiteFlow 创始人，8年+ Web3、DeFi 领域创业经验。精通 Solidity、React、Next.js、Vue 技术栈，已成功发布多个 Web3 产品，智能合约累计处理 100,000+ 笔交易。",
      "knowsAbout": ["Web3", "Blockchain", "DeFi", "DApp", "Solidity", "Ethereum", "Smart Contracts", "React", "Next.js", "Vue", "Ethers.js", "wagmi", "viem", "Hardhat", "Foundry", "OpenZeppelin", "AI Trading", "RWA Tokenization", "Crypto Payment Gateway", "NFT Marketplace", "Perpetual Trading", "Blackhole Protocol"],
      "sameAs": ["https://github.com/yan253319066", "https://t.me/OS_Blockchain"],
      "contactPoint": { "@type": "ContactPoint", "email": "yanning-1987@outlook.com", "contactType": "Founder" }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Web3 Founder Portfolio",
      "url": siteUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": siteUrl + "/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    })]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Neil Yan - XPayLabs & GetCiteFlow 创始人 | Web3 Founder',
      description: 'Neil Yan — XPayLabs 与 GetCiteFlow 创始人，8年Web3行业经验。专注于智能合约、DeFi协议、AI量化交易、RWA代币化、加密货币支付网关、NFT平台、Blackhole协议。展示9个代表性Web3项目，服务2,000+平台用户。',
      head: [
        ['link', { rel: 'alternate', hreflang: 'x-default', href: siteUrl }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Neil Yan 是做什么的？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan 是 XPayLabs 与 GetCiteFlow 创始人，专注于 Web3、DeFi、DApp 开发。从 2018 年开始投身区块链技术，已成功发布多个 Web3 DApp 产品。"
              }
            },
            {
              "@type": "Question",
              "name": "已发布哪些 Web3 项目？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "已服务2,000+客户，展示9个代表性Web3 DApp：GetCiteFlow（GEO优化平台）、AI Quant Robot（AI 量化交易）、Crypto Earn（加密理财）、Perpetual Trading（永续合约）、Nex Exchange（混合交易所）、Solaris RWA（RWA 代币化）、XPayLabs（自托管支付基础设施）、Prediction Market（预测市场）、Blackhole Protocol（Blackhole协议）。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan 的 Web3 开发服务包括哪些？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan 提供完整的 Web3 开发服务：智能合约开发（Solidity、Vyper）、前端开发（React、Next.js、Vue）、DeFi 协议开发、NFT 平台、Web3 技术咨询。已成功发布多个 DeFi 和 DApp 项目。"
              }
            },
            {
              "@type": "Question",
              "name": "如何联系 Neil Yan？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "可以通过 GitHub (github.com/yan253319066)、Telegram (@OS_Blockchain)、Email (yanning-1987@outlook.com) 联系 Neil Yan。Neil Yan 是 XPayLabs 与 GetCiteFlow 创始人，自 2018 年从事区块链技术。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan 能做什么项目？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan 专注 DeFi 项目创业与产品交付，包括量化交易、借贷平台、交易平台等，已有多个成功项目经验。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan 使用什么技术栈？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "智能合约：Solidity、Hardhat、Foundry、OpenZeppelin；前端：React、Next.js、Vue、TypeScript、Tailwind CSS；Web3：Ethers.js、viem、wagmi、Reown AppKit；后端：Node.js、Java、Python；数据库：MySQL、PostgreSQL、Redis、Supabase；AI：Google Gemini、OpenAI、Alibaba Cloud Qwen；部署：Vercel、Railway、Docker、Aliyun、Tencent Cloud、AWS。"
              }
            },
            {
              "@type": "Question",
              "name": "支持哪些区块链？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "支持 Ethereum、Polygon、BNB Chain、Solana、Avalanche、Arbitrum、Optimism、Base、Linea、Scroll、zkSync Era 等 15+ 主流公链。"
              }
            }
          ]
        })]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          { text: '项目', link: '/projects/' },
          { text: 'GEO 服务', link: '/geo-services' },
          { text: '博客', link: '/blog/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection', ariaLabel: 'GitHub' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain', ariaLabel: 'Telegram' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2018-2026 Neil Yan'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Neil Yan - Founder of XPayLabs & GetCiteFlow | Web3 Entrepreneur',
      description: 'Neil Yan - Founder of XPayLabs & GetCiteFlow. Smart contract development, DeFi protocols, AI trading, RWA tokenization, crypto payment gateway, NFT marketplace, Blackhole Protocol. 8+ years in Web3, 2,000+ platform users served.',
      head: [
        ['meta', { name: 'keywords', content: 'Web3 founder, blockchain entrepreneur, smart contract development, Solidity, DeFi development, DApp development, Ethereum, crypto payment gateway, NFT, hire Web3 founder, blockchain consulting' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does Neil Yan do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan is the founder of XPayLabs & GetCiteFlow, specializing in Web3, DeFi, and DApp development since 2018, with multiple successful Web3 DApp products launched."
              }
            },
            {
              "@type": "Question",
              "name": "What Web3 projects have been released?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9 Web3 DApps: GetCiteFlow (GEO platform), AI Quant Robot (AI quantitative trading), Crypto Earn (crypto wealth management), Perpetual Trading (perpetual contracts), Nex Exchange (hybrid exchange), Solaris RWA (RWA tokenization), XPayLabs (self-hosted payment infrastructure), Prediction Market, Blackhole Protocol."
              }
            },
            {
              "@type": "Question",
              "name": "What Web3 development services does Neil Yan offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan offers full Web3 development services: smart contract development (Solidity, Vyper), frontend development (React, Next.js, Vue), DeFi protocol development, NFT platforms, Web3 technical consulting."
              }
            },
            {
              "@type": "Question",
              "name": "How to contact Neil Yan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact via GitHub (github.com/yan253319066), Telegram (@OS_Blockchain), or Email (yanning-1987@outlook.com). Neil Yan is the founder of XPayLabs & GetCiteFlow, building in Web3 since 2018."
              }
            },
            {
              "@type": "Question",
              "name": "What tech stack does Neil Yan use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Smart Contracts: Solidity, Hardhat, Foundry, OpenZeppelin. Frontend: React, Next.js, Vue, TypeScript, Tailwind CSS. Web3: Ethers.js, viem, wagmi, Reown AppKit. Backend: Node.js, Java, Python. Database: MySQL, PostgreSQL, Redis, Supabase. AI: Google Gemini, OpenAI. Deployment: Vercel, Railway, Docker, AWS."
              }
            }
          ]
        })]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Projects', link: '/en/projects/' },
          { text: 'GEO Services', link: '/en/geo-services' },
          { text: 'Blog', link: '/en/blog/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection', ariaLabel: 'GitHub' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain', ariaLabel: 'Telegram' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2018-2026 Neil Yan'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      title: 'Neil Yan - XPayLabs と GetCiteFlow 創業者 | Web3創業者',
      description: 'Neil Yan - XPayLabs と GetCiteFlow 創業者。スマートコントラクト、DeFiプロトコル、AI取引システム、RWAトークン化、暗号資産決済ゲートウェイ、NFTプラットフォーム、Blackholeプロトコル。9つのWeb3製品をリリース。',
      head: [
        ['meta', { name: 'keywords', content: 'Web3, ブロックチェーン, スマートコントラクト, Solidity, DeFi, DApp, NFT, 暗号資産決済, Web3創業者' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Neil Yanは何をしている人ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil YanはXPayLabsとGetCiteFlowの創業者で、2018年からWeb3、DeFi、DApp開発に専念し、複数のWeb3 DApp製品を成功裏にリリースしています。"
              }
            },
            {
              "@type": "Question",
              "name": "リリースしたWeb3プロジェクトは？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9つのWeb3 DApp：GetCiteFlow（GEOプラットフォーム）、AI Quant Robot（AI取引）、Crypto Earn（暗号資産運用）、Perpetual Trading（永久先物）、Nex Exchange（ハイブリッド取引所）、Solaris RWA（RWAトークン化）、XPayLabs（自己ホスト型決済インフラ）、Prediction Market（予測市場）、Blackhole Protocol。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yanの開発サービス内容は？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "スマートコントラクト開発（Solidity、Vyper）、フロントエンド開発（React、Next.js、Vue）、DeFiプロトコル開発、NFTプラットフォーム、Web3技術コンサルティング。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yanに連絡するには？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GitHub (github.com/yan253319066)、Telegram (@OS_Blockchain)、Email (yanning-1987@outlook.com) から連絡可能です。"
              }
            }
          ]
        })]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'プロジェクト', link: '/ja/#projects' },
          { text: 'GEO サービス', link: '/ja/geo-services' },
          { text: 'ブログ', link: '/en/blog/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection', ariaLabel: 'GitHub' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain', ariaLabel: 'Telegram' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2018-2026 Neil Yan'
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      title: 'Neil Yan - XPayLabs와 GetCiteFlow 창업자 | Web3 창업자',
      description: 'Neil Yan - XPayLabs와 GetCiteFlow 창업자. 스마트 계약, DeFi 프로토콜, AI 트레이딩 시스템, RWA 토큰화, 암호화폐 결제 게이트웨이, NFT 마켓플레이스, Blackhole 프로토콜. 9개의 Web3 제품 출시 완료.',
      head: [
        ['meta', { name: 'keywords', content: 'Web3, 블록체인, 스마트 계약, Solidity, DeFi, DApp, NFT, 암호화폐 결제, Web3 창업자' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Neil Yan은 어떤 일을 하나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan은 XPayLabs와 GetCiteFlow의 창업자로, 2018년부터 Web3, DeFi, DApp 개발에 전념하여 여러 Web3 DApp 제품을 성공적으로 출시했습니다."
              }
            },
            {
              "@type": "Question",
              "name": "출시한 Web3 프로젝트는 무엇인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9개의 Web3 DApp: GetCiteFlow (GEO 플랫폼), AI Quant Robot (AI 트레이딩), Crypto Earn (암호화폐 금융), Perpetual Trading (무기한 선물), Nex Exchange (하이브리드 거래소), Solaris RWA (RWA 토큰화), XPayLabs (자체 호스팅 결제 인프라), Prediction Market (예측 시장), Blackhole Protocol."
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan의 Web3 개발 서비스는 무엇인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "스마트 계약 개발 (Solidity, Vyper), 프론트엔드 개발 (React, Next.js, Vue), DeFi 프로토콜 개발, NFT 플랫폼, Web3 기술 컨설팅을 제공합니다."
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan에게 연락하려면?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GitHub (github.com/yan253319066), Telegram (@OS_Blockchain), Email (yanning-1987@outlook.com)으로 연락 가능합니다."
              }
            }
          ]
        })]
      ],
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '프로젝트', link: '/ko/#projects' },
          { text: 'GEO 서비스', link: '/ko/geo-services' },
          { text: '블로그', link: '/en/blog/' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yan253319066/ProjectCollection', ariaLabel: 'GitHub' },
          { icon: 'telegram', link: 'https://t.me/OS_Blockchain', ariaLabel: 'Telegram' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2018-2026 Neil Yan'
        }
      }
    }
  }
})