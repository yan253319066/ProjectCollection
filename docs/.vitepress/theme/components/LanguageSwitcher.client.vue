<script setup>
import { ref, onMounted } from 'vue'
import { useData, withBase } from 'vitepress'

const { router } = useData()
const currentLocale = ref('zh')

const languages = [
  { code: 'zh', name: '中文', link: '/' },
  { code: 'en', name: 'English', link: '/en/' },
  { code: 'ja', name: '日本語', link: '/ja/' },
  { code: 'ko', name: '한국어', link: '/ko/' }
]

onMounted(() => {
  const path = router?.route?.path || window.location.pathname
  if (path.startsWith('/en/')) {
    currentLocale.value = 'en'
  } else if (path.startsWith('/ja/')) {
    currentLocale.value = 'ja'
  } else if (path.startsWith('/ko/')) {
    currentLocale.value = 'ko'
  } else {
    currentLocale.value = 'zh'
  }
  
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('locale')
    if (saved && ['zh', 'en', 'ja', 'ko'].includes(saved)) {
      currentLocale.value = saved
    }
  }
})

function switchLocale(lang) {
  currentLocale.value = lang.code
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', lang.code)
  }
  
  // Navigate to the correct locale path
  const targetPath = lang.link || '/'
  router?.go(targetPath)
}

// Provide current locale
if (typeof window !== 'undefined') {
  window.__currentLocale = currentLocale
}
</script>

<template>
  <div class="lang-nav">
    <button 
      v-for="lang in languages" 
      :key="lang.code"
      :class="{ active: currentLocale === lang.code }"
      @click="switchLocale(lang)"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<style scoped>
.lang-nav {
  display: flex;
  gap: 4px;
}

.lang-nav button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  border-radius: 4px;
  transition: all 0.2s;
}

.lang-nav button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.lang-nav button.active {
  background: var(--vp-c-brand);
  color: white;
}
</style>