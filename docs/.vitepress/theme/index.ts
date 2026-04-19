import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ProjectGrid from '../../components/ProjectGrid.vue'
import ProjectCard from '../../components/ProjectCard.vue'
import ProjectModal from '../../components/ProjectModal.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
    app.component('ProjectCard', ProjectCard)
    app.component('ProjectModal', ProjectModal)
  }
}