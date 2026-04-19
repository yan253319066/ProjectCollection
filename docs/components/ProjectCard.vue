<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from './projects'

const props = defineProps<{
  project: Project
  locale?: string
}>()

defineEmits<{
  (e: 'click', project: Project): void
}>()

const currentLocale = computed(() => props.locale || 'zh')

const name = computed(() => {
  const l = currentLocale.value
  switch (l) {
    case 'en': return props.project.nameEn
    case 'ja': return props.project.nameJa
    case 'ko': return props.project.nameKo
    default: return props.project.nameZh
  }
})

const tagline = computed(() => {
  const l = currentLocale.value
  switch (l) {
    case 'en': return props.project.taglineEn
    case 'ja': return props.project.taglineJa
    case 'ko': return props.project.taglineKo
    default: return props.project.taglineZh
  }
})
</script>

<template>
  <div 
    class="project-card" 
    @click="$emit('click', project)"
  >
    <div class="project-icon">{{ project.icon }}</div>
    <h3 class="project-name">{{ name }}</h3>
    <p class="project-tagline">{{ tagline }}</p>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.project-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.project-name {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
}

.project-tagline {
  color: var(--vp-c-text-2);
  margin: 0;
  font-size: 14px;
}
</style>