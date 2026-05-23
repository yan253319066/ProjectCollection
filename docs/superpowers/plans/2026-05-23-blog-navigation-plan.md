# Blog Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a bilingual blog section (Chinese + English) to the VitePress portfolio site, with blog list pages, Article JSON-LD, RSS feed, and internal links to projects.

**Architecture:** Blog post metadata lives in `blog-posts.ts` following the existing `projects.ts` pattern. A `BlogList.vue` component renders the listing. Each post is a standalone `.md` with frontmatter. An RSS feed is generated post-build like the existing sitemap.

**Tech Stack:** VitePress 1.6.x, Vue 3 (Composition API), Node.js (ESM scripts)

**Existing patterns to follow:**
- Data: `docs/components/projects.ts` — `export const projects: Project[]`
- Theme registration: `docs/.vitepress/theme/index.ts` — `app.component('ProjectGrid', ProjectGrid)`
- Post-build: `scripts/generate-sitemap.mjs` — walk `dist`, write files

---

### Task 1: Create blog post data layer

**Files:**
- Create: `docs/components/blog-posts.ts`

```typescript
export interface BlogPost {
  id: string
  titleZh: string
  titleEn: string
  date: string
  tagsZh: string[]
  tagsEn: string[]
  descriptionZh: string
  descriptionEn: string
  projectId?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'how-to-integrate-xpaylabs',
    titleZh: 'XPayLabs 自托管支付网关集成指南',
    titleEn: 'How to Integrate XPayLabs Self-Hosted Payment Gateway',
    date: '2026-05-20',
    tagsZh: ['XPayLabs', '支付', '集成', '加密货币'],
    tagsEn: ['XPayLabs', 'Payment', 'Integration', 'Cryptocurrency'],
    descriptionZh: '详细指南，教你如何将 XPayLabs 自托管加密支付网关集成到你的电商平台或 SaaS 应用中，支持 TRON、EVM 链和 SUI。',
    descriptionEn: 'Step-by-step guide to integrating the XPayLabs self-hosted crypto payment gateway into your e-commerce platform or SaaS application, supporting TRON, EVM chains, and SUI.',
    projectId: 'xpay-labs'
  },
  {
    id: 'smart-contract-security-tips',
    titleZh: '智能合约安全开发最佳实践',
    titleEn: 'Smart Contract Security Best Practices',
    date: '2026-05-10',
    tagsZh: ['Solidity', '安全', '智能合约', '开发'],
    tagsEn: ['Solidity', 'Security', 'Smart Contract', 'Development'],
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点，包括重入攻击防护、权限管理、预言机安全等关键实践。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience, covering reentrancy protection, access control, oracle security, and more.',
  }
]

export function getBlogPosts(locale: 'zh' | 'en') {
  return blogPosts
    .map(post => ({
      ...post,
      title: locale === 'zh' ? post.titleZh : post.titleEn,
      tags: locale === 'zh' ? post.tagsZh : post.tagsEn,
      description: locale === 'zh' ? post.descriptionZh : post.descriptionEn,
      link: locale === 'zh' ? `/blog/${post.id}.html` : `/en/blog/${post.id}.html`
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
```

- [ ] **Create file with above content**

---

### Task 2: Create BlogList component

**Files:**
- Create: `docs/components/BlogList.vue`

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { getBlogPosts } from './blog-posts'
import { projects } from './projects'

const props = defineProps<{ locale: 'zh' | 'en' }>()

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
    <article v-for="post in posts" :key="post.id" class="blog-card">
      <div class="blog-card-header">
        <h2 class="blog-title">
          <a :href="post.link">{{ post.title }}</a>
        </h2>
        <time class="blog-date" :datetime="post.date">{{ post.date }}</time>
      </div>
      <p class="blog-description">{{ post.description }}</p>
      <div class="blog-meta">
        <div class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </div>
        <a v-if="post.projectUrl" :href="post.projectUrl" class="blog-project-link" target="_blank" rel="noopener noreferrer">
          {{ post.projectName }} ↗
        </a>
      </div>
    </article>
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
</style>
```

- [ ] **Create file with above content**

---

### Task 3: Create blog index pages

**Files:**
- Create: `docs/blog/index.md`
- Create: `docs/en/blog/index.md`

**`docs/blog/index.md`:**
```markdown
---
title: 博客 | Neil Yan - Web3 区块链开发者
description: Neil Yan 的 Web3 技术博客，涵盖智能合约开发、DeFi 协议、加密货币支付、AI 量化交易等话题。
---

# 博客

<BlogList locale="zh" />
```

**`docs/en/blog/index.md`:**
```markdown
---
title: Blog | Neil Yan - Web3 Blockchain Developer
description: Neil Yan's Web3 technical blog covering smart contract development, DeFi protocols, crypto payments, AI trading, and more.
---

# Blog

<BlogList locale="en" />
```

- [ ] **Create `docs/blog/index.md`**
- [ ] **Create `docs/en/blog/index.md`**

---

### Task 4: Create sample blog posts

**Files:**
- Create: `docs/blog/how-to-integrate-xpaylabs.md`
- Create: `docs/en/blog/how-to-integrate-xpaylabs.md`
- Create: `docs/blog/smart-contract-security-tips.md`
- Create: `docs/en/blog/smart-contract-security-tips.md`

**`docs/blog/how-to-integrate-xpaylabs.md`:**
```markdown
---
title: XPayLabs 自托管支付网关集成指南
date: 2026-05-20
author: Neil Yan
tags: ['XPayLabs', '支付', '集成', '加密货币']
description: 详细指南，教你如何将 XPayLabs 自托管加密支付网关集成到你的电商平台或 SaaS 应用中。
head:
  - - script
    - type: application/ld+json
    - |-
      {"@context":"https://schema.org","@type":"Article","headline":"XPayLabs 自托管支付网关集成指南","description":"详细指南，教你如何将 XPayLabs 自托管加密支付网关集成到你的电商平台或 SaaS 应用中。","author":{"@type":"Person","name":"Neil Yan"},"datePublished":"2026-05-20","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.0xx402.com/blog/how-to-integrate-xpaylabs.html"}}
---

## 为什么选择自托管支付网关？

在加密货币支付领域，自托管意味着你完全掌控资金安全。XPayLabs 是一个开源的自托管加密支付基础设施，支持 TRON（TRC20）、所有 EVM 链和 SUI 网络。

主要优势：
- **完全非托管** — 私钥保留在你的服务器上
- **零网关手续费** — 只需支付链上 Gas 费用
- **REST API** — 轻松集成到现有系统
- **Docker Compose 部署** — 一行命令即可启动

## 快速集成步骤

### 1. 部署 XPayLabs

```bash
git clone https://github.com/yan253319066/xpaylabs.git
cd xpaylabs
docker-compose up -d
```

### 2. 配置 API 密钥

在管理面板中生成 API 密钥，设置 Webhook 回调地址。

### 3. 创建支付订单

通过 REST API 创建支付订单：

```bash
curl -X POST https://your-xpaylabs.com/api/invoices \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "100",
    "currency": "USDT",
    "chain": "TRON",
    "callback_url": "https://your-app.com/webhook/xpaylabs"
  }'
```

### 4. 处理支付通知

XPayLabs 会在链上确认后发送 Webhook 通知，你可以实时处理订单状态。

## XPayLabs 适用场景

- **电商平台** — 接受加密货币支付，降低跨境支付成本
- **SaaS 应用** — 为你的用户提供加密货币订阅支付选项
- **DeFi 产品** — 集成支付功能到你的 DApp 中
- **游戏平台** — 实现游戏内加密货币充值

已经开始接受加密货币支付的企业已经看到了显著的竞争优势。现在就部署 XPayLabs，让你的平台支持加密货币支付。

> 了解更多：访问 [XPayLabs 官网](https://www.xpaylabs.com) 或查看 [GitHub 仓库](https://github.com/yan253319066)
```

**`docs/en/blog/how-to-integrate-xpaylabs.md`:**
```markdown
---
title: How to Integrate XPayLabs Self-Hosted Payment Gateway
date: 2026-05-20
author: Neil Yan
tags: ['XPayLabs', 'Payment', 'Integration', 'Cryptocurrency']
description: Step-by-step guide to integrating the XPayLabs self-hosted crypto payment gateway into your e-commerce platform or SaaS application.
head:
  - - script
    - type: application/ld+json
    - |-
      {"@context":"https://schema.org","@type":"Article","headline":"How to Integrate XPayLabs Self-Hosted Payment Gateway","description":"Step-by-step guide to integrating the XPayLabs self-hosted crypto payment gateway into your e-commerce platform or SaaS application.","author":{"@type":"Person","name":"Neil Yan"},"datePublished":"2026-05-20","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.0xx402.com/en/blog/how-to-integrate-xpaylabs.html"}}
---

## Why Self-Hosted Payment Gateway?

In crypto payments, self-hosting means you maintain full control over your funds. XPayLabs is an open-source self-hosted crypto payment infrastructure supporting TRON (TRC20), all EVM chains, and SUI.

Key benefits:
- **Fully non-custodial** — private keys stay on your servers
- **Zero gateway fees** — pay only on-chain gas
- **REST API** — easy integration with existing systems
- **Docker Compose deployment** — one command to get started

## Quick Integration

### 1. Deploy XPayLabs

```bash
git clone https://github.com/yan253319066/xpaylabs.git
cd xpaylabs
docker-compose up -d
```

### 2. Configure API Keys

Generate API keys in the admin dashboard and set up Webhook callbacks.

### 3. Create a Payment Invoice

Via REST API:

```bash
curl -X POST https://your-xpaylabs.com/api/invoices \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "100",
    "currency": "USDT",
    "chain": "TRON",
    "callback_url": "https://your-app.com/webhook/xpaylabs"
  }'
```

### 4. Handle Payment Notifications

XPayLabs sends Webhook notifications after on-chain confirmation.

## Use Cases

- **E-commerce** — Accept crypto payments globally
- **SaaS** — Offer crypto subscription payments
- **DeFi** — Integrate payments into your DApp
- **Gaming** — Enable crypto in-game purchases

> Learn more: Visit [XPayLabs website](https://www.xpaylabs.com) or check the [GitHub repository](https://github.com/yan253319066)
```

**`docs/blog/smart-contract-security-tips.md`:**
```markdown
---
title: 智能合约安全开发最佳实践
date: 2026-05-10
author: Neil Yan
tags: ['Solidity', '安全', '智能合约', '开发']
description: 从 8 年 Web3 开发经验中总结的智能合约安全要点，包括重入攻击防护、权限管理、预言机安全等关键实践。
head:
  - - script
    - type: application/ld+json
    - |-
      {"@context":"https://schema.org","@type":"Article","headline":"智能合约安全开发最佳实践","description":"从 8 年 Web3 开发经验中总结的智能合约安全要点。","author":{"@type":"Person","name":"Neil Yan"},"datePublished":"2026-05-10","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.0xx402.com/blog/smart-contract-security-tips.html"}}
---

智能合约安全是 Web3 开发中最重要的一环。一个漏洞可能导致数百万美元的资金损失。以下是我在 8 年开发中总结的关键安全实践。

## 1. 重入攻击防护

始终遵循 Checks-Effects-Interactions 模式：

```solidity
function withdraw() external {
    uint256 balance = balances[msg.sender];  // Checks
    require(balance > 0);
    balances[msg.sender] = 0;                // Effects
    (bool ok, ) = msg.sender.call{value: balance}("");  // Interactions
    require(ok);
}
```

## 2. 使用 OpenZeppelin

不要自己编写标准合约。使用经过审计的 OpenZeppelin 库：

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
```

## 3. 权限管理

使用 OpenZeppelin 的 `AccessControl` 而非简单的 `onlyOwner`：

- 分配不同角色给不同功能
- 使用 timelock 延迟敏感操作
- 定期审计权限分配

## 4. 预言机安全

使用 Chainlink 等去中心化预言机，并实施：
- 价格校验（多源对比）
- 偏差阈值检查
- 使用 TWAP 避免价格操纵

## 5. 定期审计与测试

- 编写完整的 Foundry/Hardhat 测试套件
- 使用 Slither、Mythril 等静态分析工具
- 聘请第三方审计公司进行专业审计

安全开发是一个持续的过程。保持学习，关注最新的漏洞报告和安全最佳实践。
```

**`docs/en/blog/smart-contract-security-tips.md`:**
```markdown
---
title: Smart Contract Security Best Practices
date: 2026-05-10
author: Neil Yan
tags: ['Solidity', 'Security', 'Smart Contract', 'Development']
description: Smart contract security essentials from 8+ years of Web3 development experience, covering reentrancy protection, access control, oracle security, and more.
head:
  - - script
    - type: application/ld+json
    - |-
      {"@context":"https://schema.org","@type":"Article","headline":"Smart Contract Security Best Practices","description":"Smart contract security essentials from 8+ years of Web3 development experience.","author":{"@type":"Person","name":"Neil Yan"},"datePublished":"2026-05-10","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.0xx402.com/en/blog/smart-contract-security-tips.html"}}
---

Smart contract security is the most critical aspect of Web3 development. A single vulnerability can lead to millions in losses. Here are key practices from 8+ years of development experience.

## 1. Reentrancy Protection

Always follow the Checks-Effects-Interactions pattern:

```solidity
function withdraw() external {
    uint256 balance = balances[msg.sender];  // Checks
    require(balance > 0);
    balances[msg.sender] = 0;                // Effects
    (bool ok, ) = msg.sender.call{value: balance}("");  // Interactions
    require(ok);
}
```

## 2. Use OpenZeppelin

Don't write standard contracts from scratch. Use audited OpenZeppelin libraries:

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
```

## 3. Access Control

Use OpenZeppelin's `AccessControl` instead of simple `onlyOwner`:

- Assign different roles for different functions
- Use timelocks for sensitive operations
- Regularly audit role assignments

## 4. Oracle Security

Use decentralized oracles like Chainlink and implement:
- Price validation (multi-source comparison)
- Deviation threshold checks
- TWAP to prevent price manipulation

## 5. Regular Audits & Testing

- Write comprehensive Foundry/Hardhat test suites
- Use static analysis tools (Slither, Mythril)
- Hire third-party auditors for professional review

Security is an ongoing process. Stay updated with the latest vulnerability reports and best practices.
```

- [ ] **Create `docs/blog/how-to-integrate-xpaylabs.md`**
- [ ] **Create `docs/en/blog/how-to-integrate-xpaylabs.md`**
- [ ] **Create `docs/blog/smart-contract-security-tips.md`**
- [ ] **Create `docs/en/blog/smart-contract-security-tips.md`**

---

### Task 5: Register BlogList component in theme

**File:**
- Modify: `docs/.vitepress/theme/index.ts`

Change from:
```typescript
import ProjectModal from '../../components/ProjectModal.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
    app.component('ProjectCard', ProjectCard)
    app.component('ProjectModal', ProjectModal)
  }
}
```

To:
```typescript
import ProjectModal from '../../components/ProjectModal.vue'
import BlogList from '../../components/BlogList.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
    app.component('ProjectCard', ProjectCard)
    app.component('ProjectModal', ProjectModal)
    app.component('BlogList', BlogList)
  }
}
```

- [ ] **Edit `docs/.vitepress/theme/index.ts`** — add BlogList import + registration

---

### Task 6: Update config with nav + JSON-LD for blog index pages

**File:**
- Modify: `docs/.vitepress/config.mts`

**Changes:**

1. Add `siteUrl` reference before `defineConfig` (already exists at line 4)

2. Add RSS feed link to global `head`:
```typescript
['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (中文)', href: siteUrl + '/blog/rss.xml' }],
['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Neil Yan Blog (English)', href: siteUrl + '/en/blog/rss.xml' }],
```

3. Add nav items for each locale:

**root (zh-CN)** — add after Projects:
```typescript
{ text: '博客', link: '/blog/' },
```

**en** — add after Projects:
```typescript
{ text: 'Blog', link: '/en/blog/' },
```

**ja** — add after プロジェクト:
```typescript
{ text: 'ブログ', link: '/en/blog/' },
```

**ko** — add after 홈:
```typescript
{ text: '블로그', link: '/en/blog/' },
```

4. Add `BlogCollection` JSON-LD to the global `head` for blog listing pages:
```typescript
// After the WebSite JSON-LD in global head:
['script', { type: 'application/ld+json' }, JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Neil Yan's Web3 Blog",
  "description": "Web3 技术博客，涵盖智能合约开发、DeFi 协议、加密货币支付等话题。",
  "url": siteUrl + "/blog/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": []
  }
})],
```

- [ ] **Edit `docs/.vitepress/config.mts`** — add nav items + RSS link + CollectionPage JSON-LD

---

### Task 7: Create RSS feed generator

**Files:**
- Create: `scripts/generate-rss.mjs`

```javascript
import { writeFileSync, readdirSync, existsSync } from 'fs'
import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://www.0xx402.com'
const outDir = resolve(__dirname, '..', 'docs', '.vitepress', 'dist')

if (!existsSync(outDir)) {
  console.error('❌ dist directory not found')
  process.exit(1)
}

const posts = [
  {
    id: 'how-to-integrate-xpaylabs',
    titleZh: 'XPayLabs 自托管支付网关集成指南',
    titleEn: 'How to Integrate XPayLabs Self-Hosted Payment Gateway',
    date: '2026-05-20',
    descriptionZh: '详细指南，教你如何将 XPayLabs 自托管加密支付网关集成到你的电商平台或 SaaS 应用中。',
    descriptionEn: 'Step-by-step guide to integrating the XPayLabs self-hosted crypto payment gateway.',
  },
  {
    id: 'smart-contract-security-tips',
    titleZh: '智能合约安全开发最佳实践',
    titleEn: 'Smart Contract Security Best Practices',
    date: '2026-05-10',
    descriptionZh: '从 8 年 Web3 开发经验中总结的智能合约安全要点。',
    descriptionEn: 'Smart contract security essentials from 8+ years of Web3 development experience.',
  }
]

function rssXml(locale) {
  const lang = locale === 'zh' ? 'zh-CN' : 'en-US'
  const prefix = locale === 'zh' ? '' : '/en'
  const title = locale === 'zh' ? 'Neil Yan Web3 技术博客' : 'Neil Yan Web3 Tech Blog'
  const desc = locale === 'zh' ? 'Web3 技术博客，涵盖智能合约开发、DeFi 协议、加密货币支付等话题。' : 'Web3 technical blog covering smart contracts, DeFi, crypto payments, and more.'
  const link = siteUrl + prefix + '/blog/'

  const items = posts.map(p => {
    const itemLink = siteUrl + prefix + '/blog/' + p.id + '.html'
    const itemTitle = locale === 'zh' ? p.titleZh : p.titleEn
    const itemDesc = locale === 'zh' ? p.descriptionZh : p.descriptionEn
    return `    <item>
      <title><![CDATA[${itemTitle}]]></title>
      <link>${itemLink}</link>
      <description><![CDATA[${itemDesc}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid>${itemLink}</guid>
    </item>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${link}</link>
    <description>${desc}</description>
    <language>${lang}</language>
    <atom:link href="${link}rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`
}

writeFileSync(join(outDir, 'blog', 'rss.xml'), rssXml('zh'), 'utf-8')
console.log('✅ /blog/rss.xml generated')

writeFileSync(join(outDir, 'en', 'blog', 'rss.xml'), rssXml('en'), 'utf-8')
console.log('✅ /en/blog/rss.xml generated')
```

- [ ] **Create file with above content**

---

### Task 8: Update build script in package.json

**File:**
- Modify: `package.json`

Change:
```json
"docs:build": "vitepress build docs && node scripts/generate-sitemap.mjs",
```

To:
```json
"docs:build": "vitepress build docs && node scripts/generate-sitemap.mjs && node scripts/generate-rss.mjs",
```

- [ ] **Edit `package.json`** — add RSS generation to build chain

---

### Task 9: Verify with build

- [ ] **Run build and verify output**

```bash
npm run docs:build
```

Expected:
- Build succeeds
- No errors in blog-related Vue components
- `sitemap.xml` includes `/blog/`, `/en/blog/`, and all blog post URLs
- `blog/rss.xml` and `en/blog/rss.xml` are generated in dist/
- `llms.txt` and `llms-full.txt` include blog pages for zh and en

```bash
# Quick verification
Test-Path -LiteralPath "docs/.vitepress/dist/blog/index.html"
Test-Path -LiteralPath "docs/.vitepress/dist/en/blog/index.html"
Test-Path -LiteralPath "docs/.vitepress/dist/blog/rss.xml"
Test-Path -LiteralPath "docs/.vitepress/dist/en/blog/rss.xml"
```

Expected: All 4 files exist.
