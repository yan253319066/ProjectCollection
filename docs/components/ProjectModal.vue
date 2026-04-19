<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from './projects'

const props = defineProps<{
  project: Project | null
  visible: boolean
  locale?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const modalLocale = computed(() => props.locale || 'zh')

const labels = computed(() => {
  const l = modalLocale.value
  const translations = {
    zh: { title: '项目介绍', visit: '访问项目 →' },
    en: { title: 'Project Overview', visit: 'Visit Project →' },
    ja: { title: 'プロジェクト紹介', visit: 'プロジェクトを訪問 →' },
    ko: { title: '프로젝트 소개', visit: '프로젝트 방문 →' }
  }
  return translations[l as keyof typeof translations] || translations.zh
})

const name = computed(() => {
  if (!props.project) return ''
  const l = modalLocale.value
  switch (l) {
    case 'en': return props.project.nameEn
    case 'ja': return props.project.nameJa
    case 'ko': return props.project.nameKo
    default: return props.project.nameZh
  }
})

const tagline = computed(() => {
  if (!props.project) return ''
  const l = modalLocale.value
  switch (l) {
    case 'en': return props.project.taglineEn
    case 'ja': return props.project.taglineJa
    case 'ko': return props.project.taglineKo
    default: return props.project.taglineZh
  }
})

const description = computed(() => {
  if (!props.project) return ''
  const l = modalLocale.value
  switch (l) {
    case 'en': return props.project.descriptionEn
    case 'ja': return props.project.descriptionJa
    case 'ko': return props.project.descriptionKo
    default: return props.project.descriptionZh
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="visible && project" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="$emit('close')">×</button>
        
        <div class="modal-header">
          <div class="modal-icon">{{ project.icon }}</div>
          <h2 class="modal-title">{{ name }}</h2>
          <p class="modal-tagline">{{ tagline }}</p>
        </div>
        
        <div class="modal-body">
          <div class="description-section">
            <h3>{{ labels.title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
        
        <a :href="project.url" target="_blank" class="project-link">
          {{ labels.visit }}
        </a>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}

.modal-content {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 32px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.modal-header {
  text-align: center;
  margin-bottom: 24px;
}

.modal-icon {
  font-size: 56px;
  margin-bottom: 12px;
}

.modal-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.modal-tagline {
  font-size: 16px;
  color: var(--vp-c-brand);
  margin: 0;
}

.modal-body {
  margin-bottom: 24px;
}

.description-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.description-section p {
  color: var(--vp-c-text-1);
  line-height: 1.8;
  margin: 0;
  font-size: 15px;
}

.project-link {
  display: block;
  background: var(--vp-c-brand);
  color: #fff;
  text-align: center;
  padding: 14px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
}

.project-link:hover {
  background: #2563eb;
  transform: translateY(-1px);
}
</style>