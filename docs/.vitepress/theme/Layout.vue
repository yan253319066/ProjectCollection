<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { inject } from '@vercel/analytics'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd.vue'

const { Layout } = DefaultTheme

onMounted(() => {
  inject()
})
</script>

<template>
  <BreadcrumbJsonLd />
  <Layout />
</template>
