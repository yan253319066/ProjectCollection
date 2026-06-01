<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { inject } from '@vercel/analytics'

const { Layout } = DefaultTheme

onMounted(() => {
  inject()
})
</script>

<template>
  <Layout />
</template>
