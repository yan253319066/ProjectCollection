import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import ProjectGrid from '../../components/ProjectGrid.vue'
import ProjectCard from '../../components/ProjectCard.vue'
import ProjectModal from '../../components/ProjectModal.vue'
import BlogList from '../../components/BlogList.vue'
import BackToBlog from '../../components/BackToBlog.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
    app.component('ProjectCard', ProjectCard)
    app.component('ProjectModal', ProjectModal)
    app.component('BlogList', BlogList)
    app.component('BackToBlog', BackToBlog)
  }
}