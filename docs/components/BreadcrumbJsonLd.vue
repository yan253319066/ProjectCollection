<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()

const siteUrl = 'https://www.0xx402.com'

const localeLabels: Record<string, Record<string, string>> = {
  zh: { 'projects': '项目', 'geo-services': 'GEO 服务', 'blog': '博客', 'seo': 'SEO' },
  en: { 'projects': 'Projects', 'geo-services': 'GEO Services', 'blog': 'Blog', 'seo': 'SEO' },
  ja: { 'projects': 'プロジェクト', 'geo-services': 'GEO サービス', 'blog': 'ブログ', 'seo': 'SEO' },
  ko: { 'projects': '프로젝트', 'geo-services': 'GEO 서비스', 'blog': '블로그', 'seo': 'SEO' }
}

const homeLabels: Record<string, string> = {
  zh: '首页', en: 'Home', ja: 'ホーム', ko: '홈'
}

const breadcrumbJsonLd = computed(() => {
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/'
  const parts = path.split('/').filter(Boolean)
  const locale = parts[0] === 'en' || parts[0] === 'ja' || parts[0] === 'ko' ? parts[0] : 'zh'
  const offset = locale === 'zh' ? 0 : 1
  const localePath = locale === 'zh' ? '' : `/${locale}`

  const items = [
    { position: 1, name: homeLabels[locale], item: siteUrl + localePath + '/' }
  ]

  const segments = locale === 'zh' ? parts : parts.slice(1)
  let accumulated = localePath

  segments.forEach((segment, i) => {
    accumulated += '/' + segment
    const label = localeLabels[locale]?.[segment] || segment
    items.push({
      position: i + 2,
      name: label,
      item: siteUrl + accumulated + '/'
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
})
</script>

<template>
  <script :id="'breadcrumb-jsonld'" :type="'application/ld+json'" v-html="JSON.stringify(breadcrumbJsonLd)"></script>
</template>
