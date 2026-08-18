---
title: GetCiteFlow - 企业级 AI 品牌服务
description: GetCiteFlow 是一个企业级 AI 品牌服务平台，提供免费的 AI 可见性扫描器，帮助品牌被 ChatGPT、Claude、Perplexity、Gemini 等 AI 系统引用和推荐。
---

# GetCiteFlow

> 企业级 AI 品牌服务 — 免费检测您品牌的 AI 可见性。

GetCiteFlow 是一个企业级 AI 品牌服务平台，帮助品牌被 AI 系统（ChatGPT、Claude、Perplexity、Gemini、DeepSeek、Doubao、Qwen、Google AI Overviews）引用和推荐。核心产品是免费的 **AI 可见性扫描器**，输入任意 URL 即可获得 0-100 的综合评分。

## 核心功能

- **AI 可见性评分** — 输入任意 URL，获得 0-100 的六维综合评分（AI 可见性、FAQ 覆盖、实体清晰度、权威性、内容结构、摘要优化）
- **竞品对比分析** — 并排对比不同网站的 AI 可见性表现
- **缺失组件检测** — 检测 FAQ Schema、llms.txt、结构化数据、robots.txt 等关键信号，按影响程度排序
- **可分享报告** — SSR 渲染的报告页面，带动态 OG 图片，一键分享到社交媒体
- **多 AI 引擎** — 支持 Google Gemini、OpenAI 和 DeepSeek 自由切换
- **企业品牌服务** — Brand Visibility（$3,999 一次性）和 AI Visibility Growth（$4,999/月）托管服务

## 子项目：GetCiteFlow Agent Commerce

[GetCiteFlow Agent Commerce](https://app.getciteflow.ai) 是一个 AI 驱动的应用，将任何电商网站转化为 **AI Agent 可交互商店**。

- **AI Agent 配置生成器** — 输入电商 URL，Gemini AI 自动生成 `agent_commerce.json`、`products.json`、`x402.json` 三个标准化清单
- **就绪状态检查器** — 验证清单文件的合规性和安全性
- **AI Agent 终端沙盒** — 模拟 AI 代理购物流程，支持自然语言下单
- **x402 支付网关** — 基于 Base 区块链的非托管 USDT/USDC 结算，遵循 ERC-402 协议标准
- **零后端改造** — 将生成的 JSON 部署到服务器公开目录即可，无需修改现有电商系统

Agent Commerce 目前免费使用，遵循 x402 代理协议。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 15, React 19, TypeScript 5 |
| UI | Tailwind CSS 4, shadcn/ui, Motion |
| AI | Google Gemini, OpenAI, DeepSeek |
| 区块链 | Base (Coinbase L2), x402 协议, ERC-402 |
| 限流 | Upstash Redis（滑动窗口限流） |
| 部署 | Vercel（Standalone Output） |
| 工具 | ESLint 9, PostCSS, React Hook Form, Zod |

## 了解更多

- 访问 [getciteflow.ai](https://www.getciteflow.ai) 免费检测您品牌的 AI 可见性
- 需要落地实施？查看 [GEO 服务](/geo-services)
