<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
import { getBlogPosts } from './blog-posts'
import { projects } from './projects'

const router = useRouter()

function navigate(path: string) {
  router.go(path)
}

const props = defineProps<{ locale: 'zh' | 'en' | 'ja' | 'ko' }>()

const posts = computed(() => {
  return getBlogPosts(props.locale).map(post => {
    const project = post.projectId
      ? projects.find(p => p.id === post.projectId)
      : null
    const projectName = project
      ? (props.locale === 'zh' ? project.nameZh : project.nameEn)
      : null
    const projectUrl = project ? project.url : null
    return { ...post, projectName, projectUrl }
  })
})
</script>

<template>
  <div class="blog-list">
    <article v-for="post in posts" :key="post.id" class="blog-card" @click="navigate(post.link)">
      <div class="blog-card-header">
        <h2 class="blog-title">
          <a :href="post.link" class="blog-title-link" @click.prevent="navigate(post.link)">{{ post.title }}</a>
        </h2>
        <time class="blog-date" :datetime="post.date">{{ post.date }}</time>
      </div>
      <p class="blog-description">{{ post.description }}</p>
      <div class="blog-meta">
        <div class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </div>
        <a v-if="post.projectUrl" :href="post.projectUrl" class="blog-project-link" target="_blank" rel="noopener noreferrer" @click.stop>
          {{ post.projectName }} ↗
        </a>
      </div>
    </article>
    <p v-if="posts.length === 0" class="blog-empty">{{ props.locale === 'zh' ? '暂无博客文章' : 'No blog posts yet' }}</p>
  </div>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
}
.blog-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.2s;
  background: var(--vp-c-bg-soft);
}
.blog-card {
  cursor: pointer;
}
.blog-card:hover {
  border-color: var(--vp-c-brand-1);
}
.blog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}
.blog-title {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;
}
.blog-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 600;
}
.blog-title a:hover {
  color: var(--vp-c-brand-1);
}
.blog-date {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  white-space: nowrap;
}
.blog-description {
  color: var(--vp-c-text-2);
  margin: 0.75rem 0 0 0;
  line-height: 1.6;
}
.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.blog-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.blog-tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.blog-project-link {
  font-size: 0.875rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}
.blog-project-link:hover {
  text-decoration: underline;
}
.blog-empty {
  color: var(--vp-c-text-2);
  text-align: center;
  padding: 2rem 0;
}
</style>
