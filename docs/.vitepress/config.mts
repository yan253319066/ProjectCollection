import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web3 Developer Portfolio",
  description: "区块链开发者作品集",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Web3 Developer' }]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Web3 Developer Portfolio',
      description: '区块链开发者作品集',
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