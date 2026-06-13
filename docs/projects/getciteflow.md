---
title: GetCiteFlow - GEO 平台 | Neil Yan 作品
description: GetCiteFlow 是一个 GEO 平台，帮助网站被 ChatGPT、Claude、Perplexity、Gemini 等 AI 搜索引擎引用。Scan → Diagnose → Fix → Export。
---

# GetCiteFlow

> GEO 平台 — 让您的网站被 AI 搜索引擎引用。

GetCiteFlow 是一个 Generative Engine Optimization (GEO) 平台，帮助网站被 AI 搜索引擎（ChatGPT、Claude、Perplexity、Gemini、Google AI Overviews）引用和推荐。

## 核心功能

- **AI 可见性评分** — 输入任意 URL，获得 0-100 的综合评分
- **缺失组件扫描** — 检测 8 个 GEO 维度，按影响程度排序
- **多格式导出** — JSON-LD、Markdown、HTML、React JSX、Next.js、Vue、WordPress 等
- **竞争对手对比** — 对比不同网站的 AI 可见性表现
- **企业级服务** — Technical GEO 从 $999 起，AI Visibility Growth 从 $2,999/月起

## 子项目：GetCiteFlow Agent Commerce

[GetCiteFlow Agent Commerce](https://app.getciteflow.ai) 是一个 AI 驱动的应用，能将任意电商网站转换为 **AI Agent 就绪商店**。

- **AI 代理配置生成** — 输入电商 URL，Gemini AI 自动生成 `agent_commerce.json`、`products.json`、`x402.json` 三份标准化清单
- **就绪状态检查器** — 验证清单文件的合规性与安全审计
- **AI 代理终端沙箱** — 模拟 AI 代理的购物体验，支持自然语言下单
- **x402 支付网关** — 基于 Base 区块链的非托管 USDT/USDC 结算，遵循 ERC-402 协议标准
- **零后端改造** — 将生成的 JSON 部署到服务器公共目录即可，无需修改现有电商系统

Agent Commerce 目前完全免费使用，遵循 x402 代理协议。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 15, React 19, TypeScript 5 |
| UI | Tailwind CSS 4, shadcn/ui, Motion |
| AI | Google Gemini API |
| 区块链 | Base (Coinbase L2), x402 协议, ERC-402 |
| 部署 | Vercel, Standalone Output |
| 工具 | ESLint 9, PostCSS, React Hook Form, Zod |

## 了解更多

- **GetCiteFlow** — 访问 [getciteflow.ai](https://www.getciteflow.ai) 提升 AI 可见性
- **Agent Commerce** — 访问 [app.getciteflow.ai](https://app.getciteflow.ai) 体验 AI Agent 电商
