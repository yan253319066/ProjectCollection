export interface Project {
  id: string
  name: string
  nameZh: string
  nameEn: string
  nameJa: string
  nameKo: string
  tagline: string
  taglineZh: string
  taglineEn: string
  taglineJa: string
  taglineKo: string
  description: string
  descriptionZh: string
  descriptionEn: string
  descriptionJa: string
  descriptionKo: string
  url: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'ai-quant-robot',
    name: 'AI Quant Robot',
    nameZh: 'AI 量化机器人',
    nameEn: 'AI Quant Robot',
    nameJa: 'AIクオントロボット',
    nameKo: 'AI 퀀트 로봇',
    tagline: '高性能 Web3 AI 量化交易 DApp',
    taglineZh: '高性能 Web3 AI 量化交易 DApp，支持多链和自动化奖励',
    taglineEn: 'High-performance Web3 AI quantitative trading DApp with multi-chain support',
    taglineJa: 'マルチチェーンをサポートする高性能Web3 AI量化取引DApp',
    taglineKo: '다중 체인을 지원하는高性能 Web3 AI量化 트레이딩 DApp',
    description: '',
    descriptionZh: '基于 AI 的量化交易平台，提供四种投资组合：智能猫（0.3%/天，3天锁定期，50 USDT 起）、量化猎人（0.8%/天，7天锁定期，200 USDT 起）、黄金矿商（1.2%/天，14天锁定期，1000 USDT 起）、机构级（1.5%/天，30天锁定期，5000 USDT 起）。支持 MetaMask、WalletConnect、Coinbase 钱包连接，实时分析每日收益、累计收益和质押奖励。提供 USDT 存取款功能，完整交易历史记录，推荐 program 可获得团队收益 5% 佣金。支持多语言切换，采用银行级钱包签名验证安全。',
    descriptionEn: 'AI-powered quantitative trading platform with four investment packages: Smart Kitty (0.3%/day), Quant Hunter (0.8%/day), AI Gold Digger (1.2%/day), Institutional Long (1.5%/day). Supports MetaMask, WalletConnect, Coinbase wallet connection, real-time profit analytics, and multi-language support.',
    descriptionJa: 'AI搭載の量化取引プラットフォーム。4つの投資パックを提供：Smart Kitty（0.3%/日）、Quant Hunter（0.8%/日）、AI Gold Digger（1.2%/日）、Institutional Long（1.5%/日）。MetaMask、WalletConnect、 Coinbase対応。',
    descriptionKo: 'AI 기반의 定量的 거래 플랫폼, 4가지 투자 패키지 제공',
    url: 'https://quant.0xx402.com',
    icon: '🤖'
  },
  {
    id: 'crypto-earn',
    name: 'Crypto Earn',
    nameZh: '加密理财',
    nameEn: 'Crypto Earn',
    nameJa: '暗号資産Earn',
    nameKo: "크립토 Earn",
    tagline: '安全高效的 USDT 智能理财平台',
    taglineZh: '安全高效的 USDT 智能理财平台，年化高达 18.5%',
    taglineEn: 'Secure and efficient USDT smart wealth management platform with up to 18.5% APY',
    taglineJa: '年利18.5%可能な安全高效的なUSDTスマート 理財プラットフォーム',
    taglineKo: '연간 18.5% 가능한 안전하고 효율적인 USDT 스마트 재무 관리 플랫폼',
    description: '',
    descriptionZh: '通过智能合约赚取被动收益的理财平台，提供三种产品：锁定期（18.5% APY，最高收益需锁定）、稳定型（12.5% APY，低风险稳定收益）、灵活型（8.2% APY，随时存取高流动性）。支持 Ethereum、Arbitrum、Optimism、Base、Polygon、BNB Chain、Avalanche、Solana、zkSync Era、Linea、Scroll 等 15+ 主流链。收益每 24 小时自动结算，资金由智能合约管理，完全去中心化非托管。支持中、英、日等多语言切换。',
    descriptionEn: 'Smart contract-based passive income platform with three products: Locked (18.5% APY), Stable (12.5% APY), Flexible (8.2% APY). Supports 15+ chains including Ethereum, Arbitrum, Polygon, and more. Daily settlement, non-custodial.',
    descriptionJa: 'スマートコントラクト 기반の受動的収入プラットフォーム',
    descriptionKo: '스마트 계약 기반의 수동적 수입 플랫폼',
    url: 'https://earn.0xx402.com',
    icon: '💰'
  },
  {
    id: 'perpetual-trading',
    name: 'Perpetual Trading',
    nameZh: '永续交易',
    nameEn: 'Perpetual Trading',
    nameJa: '永久先物取引',
    nameKo: '퍼pétual 트레이딩',
    tagline: '现代永续期货交易界面',
    taglineZh: '现代永续期货交易界面，支持实时图表和多倍杠杆',
    taglineEn: 'Modern perpetual futures trading interface with real-time charts and leverage',
    taglineJa: 'リアルタイムチャートとレ버レッジをサポートする現代的な永久先物取引インターフェース',
    taglineKo: '实时图表和多倍杠杆支持的现代永久期货交易界面',
    description: '',
    descriptionZh: '支持 BTC、ETH、BNB、SOL等多交易对的永续合约交易。采用 Interactive Charts 提供专业K线图表，WalletConnect 钱包连接。交易功能包括：支持做多/做空仓位、杠杆选择 1-50倍可调、设置止盈止损、USDT 存取款。采用 Next.js 15 + Tailwind CSS + Reown AppKit 构建，Supabase 数据存储，可选 Google Gemini API 提供 AI 分析功能。',
    descriptionEn: 'Perpetual contract trading for BTC, ETH, BNB, SOL and more. Interactive K-line charts, WalletConnect wallet. Features: long/short positions, 1-50x leverage, take profit/stop loss.',
    descriptionJa: 'BTC、ETH、BNB、SOLなどの取引ペアに対応',
    descriptionKo: 'BTC, ETH, BNB, SOL 등의 거래 페어 지원',
    url: 'https://futures.0xx402.com/',
    icon: '📈'
  },
  {
    id: 'prediction-market',
    name: 'Prediction Market',
    nameZh: '预测市场',
    nameEn: 'Prediction Market',
    nameJa: '予測マーケット',
    nameKo: '예측 마켓',
    tagline: '去中心化预测市场平台',
    taglineZh: '去中心化预测市场平台',
    taglineEn: 'Decentralized prediction market platform',
    taglineJa: '分散型予測マーケットプレイス',
    taglineKo: '분산형 예측 마켓플레이스',
    description: '',
    descriptionZh: '用户可以创建自定义预测事件并设置多个选项和截止日期。其他用户可以浏览所有预测市场，支持分类筛选和搜索。实时查看各选项的赔率和参与情况。支持多种以太坊钱包连接方式（MetaMask、WalletConnect等）。基于区块链技术，完全去中心化，公平透明，结果无法篡改。采用 Next.js 15 + wagmi + viem + Reown AppKit，Supabase 数据存储，Motion 动画。',
    descriptionEn: 'Create and participate in blockchain-based prediction markets. Browse, search, and filter markets. Real-time odds, decentralized and transparent.',
    descriptionJa: 'ユーザーが予測イベントを作成し、他のユーザーが参加できるブロック체인上の予測マーケットプレイス',
    descriptionKo: '사용자가 예측 이벤트를 생성하고 다른 사용자가 참여할 수 있는 블록체인 기반 예측 마켓플레이스',
    url: 'https://prediction.0xx402.com/',
    icon: '🎯'
  }
]