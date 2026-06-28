<template>
  <div class="back-to-blog">
    <a :href="link">← {{ text }}</a>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'

const route = useRoute()
const path = route.path
const isEn = path.startsWith('/en/')
const isJa = path.startsWith('/ja/')
const isKo = path.startsWith('/ko/')
const link = isEn ? '/en/blog/'
  : isJa ? '/ja/blog/'
  : isKo ? '/ko/blog/'
  : '/blog/'
const text = isEn ? 'Back to Blog'
  : isJa ? 'ブログに戻る'
  : isKo ? '블로그로 돌아가기'
  : '返回博客'
</script>

<style scoped>
.back-to-blog {
  margin-bottom: 2rem;
}
.back-to-blog a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
}
.back-to-blog a:hover {
  text-decoration: underline;
}
</style>
