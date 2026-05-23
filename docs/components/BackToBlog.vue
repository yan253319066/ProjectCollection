<template>
  <div class="back-to-blog">
    <a :href="link">← {{ text }}</a>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'

const route = useRoute()
const isEn = route.path.startsWith('/en/')
const link = isEn ? '/en/blog/' : '/blog/'
const text = isEn ? 'Back to Blog' : '返回博客'
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
