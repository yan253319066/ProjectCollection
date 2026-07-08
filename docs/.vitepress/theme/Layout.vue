<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { inject } from '@vercel/analytics'
import AuthorBio from './components/AuthorBio.vue'

const { Layout } = DefaultTheme

onMounted(() => {
  inject()
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <AuthorBio />
    </template>
  </Layout>
</template>
