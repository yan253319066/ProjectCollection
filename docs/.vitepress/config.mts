import { defineConfig } from 'vitepress'
import llms from 'vitepress-plugin-llms'
import { buildBreadcrumbJsonLd } from './theme/breadcrumb'

const siteUrl = 'https://www.0xx402.com'

export default defineConfig({
  vite: {
    plugins: [
      llms({
        ignoreFiles: ['**/ja/**', '**/ko/**'],
        generateLLMsFullTxt: true,
        generateLLMFriendlyDocsForEachPage: false
      })
    ]
  },
  transformHead: async ({ pageData }) => {
    const fm = pageData.frontmatter as Record<string, unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const head: any[] = []

    // 面包屑 JSON-LD（SSR 安全，替代客户端 BreadcrumbJsonLd.vue）
    const breadcrumb = buildBreadcrumbJsonLd(pageData.filePath)
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumb)])

    if (fm.date) {
      const date = new Date(fm.date as string).toISOString()
      const updated = fm.updated ? new Date(fm.updated as string).toISOString() : date
      head.push(
        ['meta', { property: 'article:published_time', content: date }],
        ['meta', { property: 'article:modified_time', content: updated }],
        ['meta', { property: 'article:author', content: 'Neil Yan' }]
      )
    }
    return head
  },
  title: "Neil Yan - 独立创始人 | XPayLabs & GetCiteFlow | Web3 & AI 全栈开发",
  titleTemplate: ':title | Neil Yan',
  description: "Neil Yan — 独立创始人，XPayLabs 与 GetCiteFlow 构建者。自研产品 + 客户交付双轨模式。17 年全栈开发经验，8 年 Web3/区块链深耕，兼 AI 产品开发。9 个产品已上线，100,000+ 笔链上交易。开放投资与合作。",
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
    ['meta', { name: 'author', content: 'Neil Yan - Independent Founder & Full-Stack Developer (Web3 & AI)' }],
    ['meta', { name: 'keywords', content: 'Web3, Blockchain, AI, 全栈开发, Full-Stack, GEO, DeFi, DApp, Solidity, Ethereum, 智能合约, 独立创始人, Independent Founder, Web3 Founder, Crypto, Web3 Entrepreneur, AI应用, 区块链项目创始人, 加密货币支付, NFT, EVM, Blackhole Protocol, Indie Founder, 融资, Investment, Web3外包, 区块链开发外包, 找Web3开发者, 雇佣全栈开发者, 远程开发者, 加密货币支付网关, USDT支付, 自托管支付, GEO优化, AI品牌可见性, 生成式引擎优化, ChatGPT引用, AI量化交易, 加密理财, 永续合约交易所, 去中心化预测市场, RWA代币化, 可再生能源代币化, 混合交易所, 多链开发, EVM开发, 独立开发者, DeFi借贷, 节点网络协议, DApp开发' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (中文)', href: siteUrl + '/blog/rss.xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (English)', href: siteUrl + '/en/blog/rss.xml' }],
    ['meta', { property: 'og:title', content: 'Neil Yan - 独立创始人 | XPayLabs & GetCiteFlow | Web3 & AI 全栈开发' }],
    ['meta', { property: 'og:description', content: '独立创始人，自研产品 + 客户交付双轨模式。17 年全栈开发，8 年 Web3/区块链深耕，兼 AI 产品开发。9 个产品已上线，100,000+ 笔链上交易。开放投资与合作。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Neil Yan - Independent Founder Portfolio' }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: 'ja_JP' }],
    ['meta', { property: 'og:locale:alternate', content: 'ko_KR' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Neil Yan - 独立创始人 | XPayLabs & GetCiteFlow | Web3 & AI 全栈开发' }],
    ['meta', { name: 'twitter:description', content: '独立创始人，自研产品 + 客户交付双轨模式。17 年全栈开发，8 年 Web3/区块链深耕，兼 AI 产品开发。9 个产品已上线。开放投资与合作。' }],
    ['meta', { property: 'og:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'twitter:image', content: siteUrl + '/og-image.png' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Neil Yan",
      "url": siteUrl,
      "jobTitle": "Independent Founder & Full-Stack Developer (Web3 & AI)",
      "description": "独立创始人，XPayLabs 与 GetCiteFlow 构建者。自研产品 + 客户交付双轨模式。17 年全栈开发经验，8 年深耕 Web3 与区块链，同时具备 AI 应用开发能力。精通 Solidity、React、Next.js、Vue 技术栈，已成功发布多个产品（涵盖 Web3 与 AI 领域），智能合约累计处理 100,000+ 笔交易。开放投资与合作。",
      "knowsAbout": ["Web3", "Blockchain", "AI", "Full-Stack Development", "GEO", "DeFi", "DApp", "Solidity", "Ethereum", "Smart Contracts", "React", "Next.js", "Vue", "Ethers.js", "wagmi", "viem", "Hardhat", "Foundry", "OpenZeppelin", "AI Trading", "RWA Tokenization", "Crypto Payment Gateway", "NFT Marketplace", "Perpetual Trading", "Blackhole Protocol"],
      "sameAs": ["https://github.com/yan253319066", "https://t.me/OS_Blockchain"],
      "contactPoint": { "@type": "ContactPoint", "email": "yanning-1987@outlook.com", "contactType": "Founder" }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Independent Founder Portfolio",
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
      title: 'Neil Yan - 独立创始人 | XPayLabs & GetCiteFlow | Web3 & AI 全栈开发',
      description: 'Neil Yan — 独立创始人，XPayLabs 与 GetCiteFlow 构建者。自研产品 + 客户交付双轨模式：产品收入养迭代，接单收入养产品。17 年全栈开发经验，8 年 Web3/区块链深耕，兼 AI 产品开发。9 个产品已上线，100,000+ 笔链上交易。开放投资与合作。',
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
                "text": "Neil Yan 是独立创始人，XPayLabs 与 GetCiteFlow 的构建者。17 年全栈开发经验，自 2018 年深耕 Web3 区块链与 AI 领域，自研产品 + 客户交付双轨模式，已成功发布 9 个产品（涵盖 Web3 与 AI），服务 2,000+ 平台用户。开放投资与合作。"
              }
            },
            {
              "@type": "Question",
              "name": "已发布哪些项目？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "已服务2,000+客户，展示9个代表性产品（Web3 & AI）：GetCiteFlow（GEO优化平台）、AI Quant Robot（AI 量化交易）、Crypto Earn（加密理财）、Perpetual Trading（永续合约）、Nex Exchange（混合交易所）、Solaris RWA（RWA 代币化）、XPayLabs（自托管支付基础设施）、Prediction Market（预测市场）、Blackhole Protocol（Blackhole协议）。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan 的开发服务包括哪些？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan 提供全栈开发服务（Web3 & AI）：智能合约开发（Solidity、Vyper）、前端开发（React、Next.js、Vue）、DeFi 协议开发、NFT 平台、AI 应用开发、Web3 技术咨询。已成功发布多个 DeFi、DApp 和 AI 产品。"
              }
            },
            {
              "@type": "Question",
              "name": "如何联系 Neil Yan？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "可以通过 GitHub (github.com/yan253319066)、Telegram (@OS_Blockchain)、Email (yanning-1987@outlook.com) 联系 Neil Yan。Neil Yan 是独立创始人（XPayLabs 与 GetCiteFlow 构建者），17 年全栈开发经验，自 2018 年深耕 Web3 与 AI 技术。"
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan 能做什么项目？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan 专注产品创业与技术交付（Web3 & AI），包括量化交易、DeFi 平台、AI 应用、GEO 优化等，已有多个成功项目经验。"
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
        logo: { src: '/logo.png', alt: 'Neil Yan' },
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
      title: 'Neil Yan - Independent Founder | XPayLabs & GetCiteFlow | Web3 & AI Full-Stack',
      description: 'Neil Yan — Independent founder behind XPayLabs & GetCiteFlow. Dual-track model: building my own products + delivering for clients. 17+ years full-stack, 8 years deep in Web3 & blockchain, plus AI product development. 9 products shipped, 100,000+ transactions. Open to investment and partnerships.',
      head: [
        ['meta', { name: 'keywords', content: 'Web3 founder, AI developer, full-stack developer, independent founder, indie founder, blockchain entrepreneur, smart contract development, Solidity, DeFi development, DApp development, Ethereum, crypto payment gateway, NFT, hire Web3 founder, blockchain consulting, GEO, AI brand visibility, Web3 investment, hire web3 developer, blockchain freelancer, remote blockchain developer, hire full-stack developer, USDT payment API, self-hosted crypto payment, generative engine optimization, AI search visibility, ChatGPT SEO, Perplexity SEO, LLM optimization, AI quant trading, crypto wealth management, perpetual futures trading, RWA tokenization, prediction market platform, hybrid exchange, multi-chain developer, EVM developer, DeFi lending protocol, node network protocol, crypto entrepreneur for hire' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does Neil Yan do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan is an independent founder behind XPayLabs & GetCiteFlow. 17+ years full-stack, deep in Web3, blockchain & AI since 2018. Dual-track model: product revenue funds iteration, client work funds the products. 9 products (Web3 & AI) launched, serving 2,000+ platform users. Open to investment and partnerships."
              }
            },
            {
              "@type": "Question",
              "name": "What projects have been released?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9 products (Web3 & AI): GetCiteFlow (GEO platform), AI Quant Robot (AI quantitative trading), Crypto Earn (crypto wealth management), Perpetual Trading (perpetual contracts), Nex Exchange (hybrid exchange), Solaris RWA (RWA tokenization), XPayLabs (self-hosted payment infrastructure), Prediction Market, Blackhole Protocol."
              }
            },
            {
              "@type": "Question",
              "name": "What development services does Neil Yan offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan offers full-stack development (Web3 & AI): smart contract development (Solidity, Vyper), frontend development (React, Next.js, Vue), DeFi protocol development, NFT platforms, AI application development, Web3 technical consulting."
              }
            },
            {
              "@type": "Question",
              "name": "How to contact Neil Yan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact via GitHub (github.com/yan253319066), Telegram (@OS_Blockchain), or Email (yanning-1987@outlook.com). Neil Yan is an independent founder behind XPayLabs & GetCiteFlow, 17+ years full-stack, building in Web3 & AI since 2018."
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
        logo: { src: '/logo.png', alt: 'Neil Yan' },
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
      title: 'Neil Yan - 独立系ファウンダー | XPayLabs & GetCiteFlow | Web3 & AI フルスタック',
      description: 'Neil Yan — XPayLabs と GetCiteFlow を構築する独立系ファウンダー。自社製品開発 + クライアント案件の二軸モデル。17年のフルスタック開発経験、うち8年はWeb3・ブロックチェーンに特化、AIプロダクト開発にも対応。9製品リリース、100,000+取引。投資・提携募集中。',
      head: [
        ['meta', { name: 'keywords', content: 'Web3, AI, ブロックチェーン, スマートコントラクト, Solidity, DeFi, DApp, NFT, 暗号資産決済, AIブランド可視性, GEO, Web3創業者, フルスタック開発, Web3開発者募集, ブロックチェーン開発委託, フリーランス開発者, 暗号資産決済ゲートウェイ, USDT決済, セルフホスト決済, AIブランド最適化, ジェネレーティブエンジン最適化, ChatGPT引用, AIクオンツ取引, 暗号資産運用, 永久先物取引, RWAトークン化, 予測市場プラットフォーム, ハイブリッド取引所, マルチチェーン開発, EVM開発, DeFiレンディング, ノードネットワーク' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Neil Yanは何をしている人ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil YanはXPayLabsとGetCiteFlowを構築する独立系ファウンダー。17年のフルスタック開発経験を持ち、2018年からWeb3・ブロックチェーン・AIプロダクト開発とクライアント案件の二軸モデルで活動。9つの製品（Web3 & AI）をリリース、2,000人以上のユーザーにサービス提供。投資・提携を募集中。"
              }
            },
            {
              "@type": "Question",
              "name": "リリースしたプロジェクトは？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9つの製品（Web3 & AI）：GetCiteFlow（GEOプラットフォーム）、AI Quant Robot（AI取引）、Crypto Earn（暗号資産運用）、Perpetual Trading（永久先物）、Nex Exchange（ハイブリッド取引所）、Solaris RWA（RWAトークン化）、XPayLabs（自己ホスト型決済インフラ）、Prediction Market（予測市場）、Blackhole Protocol。"
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
        logo: { src: '/logo.png', alt: 'Neil Yan' },
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'プロジェクト', link: '/ja/projects/' },
          { text: 'GEO サービス', link: '/ja/geo-services' },
          { text: 'ブログ', link: '/ja/blog/' }
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
      title: 'Neil Yan - 독립 창업자 | XPayLabs & GetCiteFlow | Web3 & AI 풀스택',
      description: 'Neil Yan — XPayLabs와 GetCiteFlow를 구축하는 독립 창업자. 자체 제품 개발 + 클라이언트 딜리버리 듀얼 트랙 모델. 17년 풀스택 개발, 8년간 Web3 & 블록체인 전문, AI 제품 개발 병행. 9개 제품 출시, 100,000+ 트랜잭션. 투자 및 파트너십 제안 환영.',
      head: [
        ['meta', { name: 'keywords', content: 'Web3, AI, 블록체인, 스마트 계약, Solidity, DeFi, DApp, NFT, 암호화폐 결제, AI 브랜드 가시성, GEO, Web3 창업자, 풀스택 개발, Web3 개발자 고용, 블록체인 개발 아웃소싱, 프리랜서 개발자, 암호화폐 결제 게이트웨이, USDT 결제, 셀프 호스트 결제, AI 브랜드 최적화, 생성형 엔진 최적화, ChatGPT 인용, AI 퀀트 트레이딩, 암호화폐 자산 관리, 영구 선물 거래, RWA 토큰화, 예측 시장 플랫폼, 하이브리드 거래소, 멀티체인 개발, EVM 개발, DeFi 대출, 노드 네트워크' }],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Neil Yan은 어떤 일을 하나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Neil Yan은 XPayLabs와 GetCiteFlow를 구축하는 독립 창업자입니다. 17년 풀스택 개발 경험을 바탕으로 2018년부터 Web3, 블록체인 & AI 제품 개발과 클라이언트 딜리버리를 병행하는 듀얼 트랙 모델로 활동 중입니다. 9개의 제품(Web3 & AI)을 출시했으며, 2,000명 이상의 플랫폼 사용자에게 서비스를 제공했습니다. 투자 및 파트너십 제안을 환영합니다."
              }
            },
            {
              "@type": "Question",
              "name": "출시한 프로젝트는 무엇인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "9개의 제품 (Web3 & AI): GetCiteFlow (GEO 플랫폼), AI Quant Robot (AI 트레이딩), Crypto Earn (암호화폐 금융), Perpetual Trading (무기한 선물), Nex Exchange (하이브리드 거래소), Solaris RWA (RWA 토큰화), XPayLabs (자체 호스팅 결제 인프라), Prediction Market (예측 시장), Blackhole Protocol."
              }
            },
            {
              "@type": "Question",
              "name": "Neil Yan의 개발 서비스는 무엇인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "풀스택 개발(Web3 & AI)을 제공합니다: 스마트 계약 개발(Solidity, Vyper), 프론트엔드 개발(React, Next.js, Vue), DeFi 프로토콜 개발, NFT 플랫폼, AI 애플리케이션 개발, Web3 기술 컨설팅."
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
        logo: { src: '/logo.png', alt: 'Neil Yan' },
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '프로젝트', link: '/ko/projects/' },
          { text: 'GEO 서비스', link: '/ko/geo-services' },
          { text: '블로그', link: '/ko/blog/' }
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