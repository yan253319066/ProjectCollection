import { defineConfig } from 'vitepress'
import llms from 'vitepress-plugin-llms'
import { buildBreadcrumbJsonLd } from './theme/breadcrumb'
import { buildSeoHead } from './theme/seo-head'

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
    const head: any[] = buildSeoHead(pageData)

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
  title: "Neil Yan｜GetCiteFlow 与 XPayLabs 独立创始人",
  titleTemplate: ':title | Neil Yan',
  description: "Neil Yan，GetCiteFlow 与 XPayLabs 独立创始人。Web3 与 AI 全栈，9 个产品已上线。开放合作。",
  outDir: './.vitepress/dist',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['superpowers/**'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Neil Yan - Independent Founder & Full-Stack Developer (Web3 & AI)' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (中文)', href: siteUrl + '/blog/rss.xml' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (English)', href: siteUrl + '/en/blog/rss.xml' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Neil Yan' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
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
      "description": "Independent founder of GetCiteFlow and XPayLabs. 17+ years full-stack, building in Web3 and AI since 2018. 9 products shipped.",
      "knowsAbout": ["Web3", "Blockchain", "AI", "Full-Stack Development", "GEO", "DeFi", "DApp", "Solidity", "Ethereum", "Smart Contracts", "React", "Next.js", "Vue", "Ethers.js", "wagmi", "viem", "Hardhat", "Foundry", "OpenZeppelin", "AI Trading", "RWA Tokenization", "Crypto Payment Gateway", "NFT Marketplace", "Perpetual Trading", "Blackhole Protocol"],
      "sameAs": [
        "https://github.com/yan253319066",
        "https://t.me/OS_Blockchain",
        "https://www.getciteflow.ai",
        "https://www.xpaylabs.com"
      ],
      "contactPoint": { "@type": "ContactPoint", "email": "yanning-1987@outlook.com", "contactType": "Founder" }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Neil Yan",
      "url": siteUrl,
      "publisher": { "@type": "Person", "name": "Neil Yan" }
    })]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Neil Yan｜GetCiteFlow 与 XPayLabs 独立创始人',
      description: 'Neil Yan，GetCiteFlow 与 XPayLabs 独立创始人。Web3 与 AI 全栈，9 个产品已上线。开放合作。',
      head: [],
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
      title: 'Neil Yan | Founder of GetCiteFlow & XPayLabs',
      description: 'Neil Yan — independent founder of GetCiteFlow and XPayLabs. Web3 and AI products, open to partnerships.',
      head: [
        ['meta', { name: 'keywords', content: 'Neil Yan, GetCiteFlow, XPayLabs, Web3 founder, GEO, AI brand visibility, hire web3 developer, self-hosted crypto payment' }],
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
      title: 'Neil Yan | GetCiteFlow と XPayLabs の独立系ファウンダー',
      description: 'Neil Yanは GetCiteFlow と XPayLabs の独立系ファウンダー。Web3 と AI のフルスタック。協業を歓迎。',
      head: [
        ['meta', { name: 'keywords', content: 'Neil Yan, GetCiteFlow, XPayLabs, Web3, GEO, AI' }],
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
      title: 'Neil Yan | GetCiteFlow와 XPayLabs의 독립 창업자',
      description: 'Neil Yan은 GetCiteFlow와 XPayLabs의 독립 창업자입니다. Web3와 AI 풀스택. 협업을 환영합니다.',
      head: [
        ['meta', { name: 'keywords', content: 'Neil Yan, GetCiteFlow, XPayLabs, Web3, GEO, AI' }],
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