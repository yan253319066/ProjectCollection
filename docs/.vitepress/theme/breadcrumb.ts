/**
 * 面包屑 JSON-LD 生成逻辑
 * 从 BreadcrumbJsonLd.vue 抽取，供 config.mts 的 transformHead 使用（SSR 安全）
 */

const siteUrl = 'https://www.0xx402.com'

const localeLabels: Record<string, Record<string, string>> = {
  zh: { projects: '项目', 'geo-services': 'GEO 服务', blog: '博客', seo: 'SEO' },
  en: { projects: 'Projects', 'geo-services': 'GEO Services', blog: 'Blog', seo: 'SEO' },
  ja: { projects: 'プロジェクト', 'geo-services': 'GEO サービス', blog: 'ブログ', seo: 'SEO' },
  ko: { projects: '프로젝트', 'geo-services': 'GEO 서비스', blog: '블로그', seo: 'SEO' },
}

const homeLabels: Record<string, string> = {
  zh: '首页', en: 'Home', ja: 'ホーム', ko: '홈',
}

export function buildBreadcrumbJsonLd(filePath: string): Record<string, unknown> {
  const path = filePath.replace(/\.md$/, '').replace(/\/$/, '') || '/'
  const parts = path.split('/').filter(Boolean)
  const locale = parts[0] === 'en' || parts[0] === 'ja' || parts[0] === 'ko' ? parts[0] : 'zh'
  const localePath = locale === 'zh' ? '' : `/${locale}`

  const items: Array<{ position: number; name: string; item: string }> = [
    { position: 1, name: homeLabels[locale], item: siteUrl + localePath + '/' },
  ]

  const segments = locale === 'zh' ? parts : parts.slice(1)
  let accumulated = localePath

  segments.forEach((segment, i) => {
    accumulated += '/' + segment
    const label = localeLabels[locale]?.[segment] || segment
    items.push({
      position: i + 2,
      name: label,
      item: siteUrl + accumulated + '/',
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}
