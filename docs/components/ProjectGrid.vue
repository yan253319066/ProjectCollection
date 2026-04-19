<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects, type Project } from './projects'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const selectedProject = ref<Project | null>(null)
const modalVisible = ref(false)
const currentLocale = ref('zh')

onMounted(() => {
  // Detect locale from URL path
  const path = window.location.pathname
  if (path.startsWith('/en/')) {
    currentLocale.value = 'en'
  } else if (path.startsWith('/ja/')) {
    currentLocale.value = 'ja'
  } else if (path.startsWith('/ko/')) {
    currentLocale.value = 'ko'
  } else {
    currentLocale.value = 'zh'
  }
})

function openModal(project: Project) {
  selectedProject.value = project
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
}
</script>

<template>
  <div class="project-grid">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.id" 
      :project="project"
      :locale="currentLocale"
      @click="openModal"
    />
    <ProjectModal 
      :project="selectedProject" 
      :visible="modalVisible"
      :locale="currentLocale"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 48px 0;
}
</style>