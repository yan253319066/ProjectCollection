<script setup lang="ts">
import { useData } from 'vitepress'

const { page, localeIndex } = useData()

/**
 * 判断当前页面是否应该显示作者简介。
 * 规则：博客文章（非列表页）+ geo-services 页面
 */
function shouldShow(): boolean {
  const fp = page.value.filePath
  if (!fp) return false

  // 中文博客文章（排除列表页 blog/index.md）
  if (fp.startsWith('blog/') && fp !== 'blog/index.md') return true
  // 英文博客文章
  if (fp.startsWith('en/blog/') && fp !== 'en/blog/index.md') return true
  // 日文博客文章
  if (fp.startsWith('ja/blog/') && fp !== 'ja/blog/index.md') return true
  // 韩文博客文章
  if (fp.startsWith('ko/blog/') && fp !== 'ko/blog/index.md') return true
  // geo-services 页面（四语言）
  if (fp === 'geo-services.md') return true
  if (fp === 'en/geo-services.md' || fp === 'ja/geo-services.md' || fp === 'ko/geo-services.md') return true

  return false
}

/** 作者简介文案，按 VitePress localeIndex 区分 */
const BIOS: Record<string, string> = {
  root:  '<strong>作者：Neil Yan</strong> — 独立创始人，XPayLabs 与 GetCiteFlow 构建者。<br>8 年 Web3 与区块链开发经验。',
  en:    '<strong>Author: Neil Yan</strong> — Independent founder behind XPayLabs & GetCiteFlow.<br>8+ years of Web3 and blockchain experience.',
  ja:    '<strong>著者：Neil Yan</strong> — インディペンデント・ファウンダー、XPayLabs と GetCiteFlow の構築者。<br>8 年の Web3 とブロックチェーン開発経験。',
  ko:    '<strong>저자: Neil Yan</strong> — 독립 창업자, XPayLabs와 GetCiteFlow 빌더.<br>8년의 Web3 및 블록체인 개발 경험.',
}
</script>

<template>
  <div v-if="shouldShow()" class="author-bio">
    <hr />
    <p v-html="BIOS[localeIndex] || BIOS.root" />
  </div>
</template>
