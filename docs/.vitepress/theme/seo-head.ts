import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { HeadConfig, PageData } from 'vitepress'

export const siteUrl = 'https://www.0xx402.com'

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')

type Locale = 'zh' | 'en' | 'ja' | 'ko'

const locales: Locale[] = ['zh', 'en', 'ja', 'ko']

const hreflang: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en-US',
  ja: 'ja-JP',
  ko: 'ko-KR',
}

const ogLocale: Record<Locale, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
}

const faqByLocale: Record<Locale, Array<{ q: string; a: string }>> = {
  zh: [
    {
      q: 'Neil Yan 是做什么的？',
      a: 'Neil Yan 是独立创始人，XPayLabs 与 GetCiteFlow 的构建者。17 年全栈开发经验，自 2018 年深耕 Web3 与 AI，自研产品 + 客户交付双轨模式，已发布 9 个产品，服务 2,000+ 平台用户。开放投资与合作。',
    },
    {
      q: '已发布哪些项目？',
      a: '9 个代表性产品（Web3 & AI）：GetCiteFlow、AI Quant Robot、Crypto Earn、Perpetual Trading、Nex Exchange、Solaris RWA、XPayLabs、Prediction Market、Blackhole Protocol。',
    },
    {
      q: '如何联系 Neil Yan？',
      a: 'GitHub github.com/yan253319066、Telegram @OS_Blockchain、Email yanning-1987@outlook.com。',
    },
  ],
  en: [
    {
      q: 'What does Neil Yan do?',
      a: 'Neil Yan is the independent founder behind GetCiteFlow and XPayLabs. 17+ years full-stack, building in Web3 and AI since 2018. Dual-track model: own products plus client delivery. 9 products shipped, 2,000+ platform users.',
    },
    {
      q: 'What products has Neil Yan shipped?',
      a: 'GetCiteFlow (GEO / AI brand visibility), XPayLabs (self-hosted crypto payments), plus Web3 products including AI Quant Robot, Crypto Earn, Perpetual Trading, Nex Exchange, Solaris RWA, Prediction Market, and Blackhole Protocol.',
    },
    {
      q: 'How can I contact Neil Yan?',
      a: 'GitHub github.com/yan253319066, Telegram @OS_Blockchain, or Email yanning-1987@outlook.com.',
    },
  ],
  ja: [
    {
      q: 'Neil Yanは何をしている人ですか？',
      a: 'Neil YanはXPayLabsとGetCiteFlowを構築する独立系ファウンダー。17年のフルスタック経験、2018年からWeb3とAI。9つの製品をリリース。',
    },
    {
      q: 'Neil Yanに連絡するには？',
      a: 'GitHub github.com/yan253319066、Telegram @OS_Blockchain、Email yanning-1987@outlook.com。',
    },
  ],
  ko: [
    {
      q: 'Neil Yan은 어떤 일을 하나요?',
      a: 'Neil Yan은 GetCiteFlow와 XPayLabs를 구축하는 독립 창업자입니다. 17년 풀스택, 2018년부터 Web3와 AI. 9개 제품 출시.',
    },
    {
      q: 'Neil Yan에게 연락하려면?',
      a: 'GitHub github.com/yan253319066, Telegram @OS_Blockchain, Email yanning-1987@outlook.com.',
    },
  ],
}

export function localeFromRelativePath(relativePath: string): Locale {
  const p = relativePath.replace(/\\/g, '/')
  if (p.startsWith('en/')) return 'en'
  if (p.startsWith('ja/')) return 'ja'
  if (p.startsWith('ko/')) return 'ko'
  return 'zh'
}

export function canonicalPath(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, '/')
  let p = normalized.replace(/\.md$/, '')
  if (p === 'index') return '/'
  if (p.endsWith('/index')) return `/${p.slice(0, -'index'.length)}`
  return `/${p}`
}

function restPath(relativePath: string): string {
  return relativePath.replace(/\\/g, '/').replace(/^(en|ja|ko)\//, '')
}

function relativeForLocale(locale: Locale, rest: string): string {
  return locale === 'zh' ? rest : `${locale}/${rest}`
}

function pageExists(relativePath: string): boolean {
  return existsSync(resolve(docsRoot, relativePath.replace(/\\/g, '/')))
}

function resolveTitle(pageData: PageData): string {
  const fm = pageData.frontmatter as Record<string, unknown>
  const raw = String(fm.title || pageData.title || 'Neil Yan')
  if (fm.titleTemplate === false) return raw
  const tpl = fm.titleTemplate ?? ':title | Neil Yan'
  if (typeof tpl === 'string') return tpl.replace(':title', raw)
  return `${raw} | Neil Yan`
}

function resolveDescription(pageData: PageData): string {
  const fm = pageData.frontmatter as Record<string, unknown>
  return String(fm.description || pageData.description || '')
}

function jsonLd(data: unknown): HeadConfig {
  return ['script', { type: 'application/ld+json' }, JSON.stringify(data)]
}

export function buildSeoHead(pageData: PageData): HeadConfig[] {
  const relativePath = pageData.relativePath.replace(/\\/g, '/')
  const locale = localeFromRelativePath(relativePath)
  const path = canonicalPath(relativePath)
  const canonical = siteUrl + path
  const title = resolveTitle(pageData)
  const description = resolveDescription(pageData)
  const rest = restPath(relativePath)
  const head: HeadConfig[] = []

  const alternates: Array<{ locale: Locale; href: string }> = []
  for (const loc of locales) {
    const candidate = relativeForLocale(loc, rest)
    if (!pageExists(candidate)) continue
    alternates.push({ locale: loc, href: siteUrl + canonicalPath(candidate) })
  }

  for (const alt of alternates) {
    head.push(['link', { rel: 'alternate', hreflang: hreflang[alt.locale], href: alt.href }])
  }
  const xDefault = alternates.find((a) => a.locale === 'zh') ?? alternates[0]
  if (xDefault) {
    head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: xDefault.href }])
  }

  head.push(['meta', { property: 'og:title', content: title }])
  if (description) head.push(['meta', { property: 'og:description', content: description }])
  head.push(['meta', { property: 'og:url', content: canonical }])
  head.push(['meta', { property: 'og:locale', content: ogLocale[locale] }])
  for (const loc of locales) {
    if (loc === locale) continue
    head.push(['meta', { property: 'og:locale:alternate', content: ogLocale[loc] }])
  }
  head.push(['meta', { name: 'twitter:title', content: title }])
  if (description) head.push(['meta', { name: 'twitter:description', content: description }])

  if (rest === 'seo.md') {
    const faqs = faqByLocale[locale]
    head.push(
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }),
    )
  }

  return head
}
