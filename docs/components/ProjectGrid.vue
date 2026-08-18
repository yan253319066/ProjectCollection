<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { projects, type Project } from './projects'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const { lang } = useData()

const currentLocale = computed(() => {
  const value = lang.value || ''
  if (value.startsWith('en')) return 'en'
  if (value.startsWith('ja')) return 'ja'
  if (value.startsWith('ko')) return 'ko'
  return 'zh'
})

const selectedProject = ref<Project | null>(null)
const modalVisible = ref(false)

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