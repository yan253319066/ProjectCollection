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
  detailPath?: string
}

export const projects: Project[] = [
  {
    id: 'getciteflow',
    name: 'GetCiteFlow',
    nameZh: 'GetCiteFlow',
    nameEn: 'GetCiteFlow',
    nameJa: 'GetCiteFlow',
    nameKo: 'GetCiteFlow',
    tagline: '企业级 AI 品牌服务 — 免费检测您品牌的 AI 可见性',
    taglineZh: '企业级 AI 品牌服务 — 免费检测您品牌的 AI 可见性',
    taglineEn: 'Enterprise AI Brand Service — Free AI Visibility Scanner',
    taglineJa: 'エンタープライズAIブランドサービス — AI可視性を無料で診断',
    taglineKo: '엔터프라이즈 AI 브랜드 서비스 — AI 가시성을 무료로 진단',
    description: '',
    descriptionZh: 'GetCiteFlow 是一个企业级 AI 品牌服务平台，提供免费的 AI 可见性扫描器。输入任意 URL 即可获得 0-100 的综合评分，涵盖 AI 可见性、FAQ 覆盖、实体清晰度、权威性、内容结构、摘要优化六大维度。支持竞争对手横向对比、可分享的报告页面和动态 OG 图片。AI 引擎支持 Google Gemini、OpenAI 和 DeepSeek 自由切换。企业服务包括 Brand Visibility（$3,999 一次性）和 AI Visibility Growth（$4,999/月）托管服务。技术栈：Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + Upstash Redis + Vercel。',
    descriptionEn: 'GetCiteFlow is an Enterprise AI Brand Service platform with a free AI Visibility Scanner. Enter any URL to get a 0-100 score across 6 dimensions: AI Visibility, FAQ Coverage, Entity Clarity, Authority, Content Structure, and Summary Optimization. Features competitor comparison, shareable report pages with dynamic OG images, and multi-AI engine support (Google Gemini, OpenAI, DeepSeek). Enterprise services: Brand Visibility ($3,999 one-time) and AI Visibility Growth ($4,999/month). Built with Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + Upstash Redis + Vercel.',
    descriptionJa: 'GetCiteFlowは、エンタープライズAIブランドサービスプラットフォームで、無料のAI可視性スキャナーを提供します。任意のURLを入力すると、6つの次元（AI可視性、FAQカバレッジ、エンティティの明確さ、権威性、コンテンツ構造、サマリー最適化）で0-100のスコアを取得できます。競合比較、共有可能なレポート、動的OG画像に対応。AIエンジンはGoogle Gemini、OpenAI、DeepSeekをサポート。エンタープライズサービス：Brand Visibility（$3,999一括）、AI Visibility Growth（$4,999/月）。',
    descriptionKo: 'GetCiteFlow는 엔터프라이즈 AI 브랜드 서비스 플랫폼으로, 무료 AI 가시성 스캐너를 제공합니다. 모든 URL을 입력하면 6가지 차원(AI 가시성, FAQ 커버리지, 엔터티 명확성, 권위성, 콘텐츠 구조, 요약 최적화)에서 0-100 점수를 얻을 수 있습니다. 경쟁사 비교, 공유 가능한 리포트, 동적 OG 이미지를 지원합니다. AI 엔진은 Google Gemini, OpenAI, DeepSeek을 지원합니다. 엔터프라이즈 서비스: Brand Visibility($3,999 일회성), AI Visibility Growth($4,999/월).',
    url: 'https://www.getciteflow.ai',
    icon: '🔍',
    detailPath: '/projects/getciteflow'
  },
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
    taglineJa: 'マルチチェーン対応の高性能Web3 AIクオンツ取引DApp',
    taglineKo: '멀티체인을 지원하는 고성능 Web3 AI 퀀트 트레이딩 DApp',
    description: '',
    descriptionZh: '基于 AI 的量化交易平台，提供四种投资组合：智能猫（0.3%/天，3天锁定期，50 USDT 起）、量化猎人（0.8%/天，7天锁定期，200 USDT 起）、黄金矿商（1.2%/天，14天锁定期，1000 USDT 起）、机构级（1.5%/天，30天锁定期，5000 USDT 起）。支持 MetaMask、WalletConnect、Coinbase 钱包连接，实时分析每日收益、累计收益和质押奖励。提供 USDT 存取款功能，完整交易历史记录，推荐 program 可获得团队收益 5% 佣金。支持多语言切换，采用银行级钱包签名验证安全。',
    descriptionEn: 'AI-powered quantitative trading platform with four investment packages: Smart Kitty (0.3%/day), Quant Hunter (0.8%/day), AI Gold Digger (1.2%/day), Institutional Long (1.5%/day). Supports MetaMask, WalletConnect, Coinbase wallet connection, real-time profit analytics, and multi-language support.',
    descriptionJa: 'AI搭載のクオンツ取引プラットフォーム。4つの投資パッケージを提供：Smart Kitty（0.3%/日）、Quant Hunter（0.8%/日）、AI Gold Digger（1.2%/日）、Institutional Long（1.5%/日）。MetaMask、WalletConnect、Coinbase対応。リアルタイム収益分析、USDT入出金、紹介プログラム（チーム収益の5%コミッション）をサポート。多言語対応、銀行レベルのウォレット署名検証による高いセキュリティ。',
    descriptionKo: 'AI 기반의 퀀트 트레이딩 플랫폼. 4가지 투자 패키지 제공: Smart Kitty (0.3%/일), Quant Hunter (0.8%/일), AI Gold Digger (1.2%/일), Institutional Long (1.5%/일). MetaMask, WalletConnect, Coinbase 지갑 지원. 실시간 수익 분석, USDT 입출금, 추천 프로그램(팀 수익의 5% 커미션) 제공. 다국어 지원, 은행 수준의 지갑 서명 검증 보안.',
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
    taglineJa: '年利18.5%が可能な安全で効率的なUSDTスマート資産運用プラットフォーム',
    taglineKo: '연간 18.5% 가능한 안전하고 효율적인 USDT 스마트 재무 관리 플랫폼',
    description: '',
    descriptionZh: '通过智能合约赚取被动收益的理财平台，提供三种产品：锁定期（18.5% APY，最高收益需锁定）、稳定型（12.5% APY，低风险稳定收益）、灵活型（8.2% APY，随时存取高流动性）。支持 Ethereum、Arbitrum、Optimism、Base、Polygon、BNB Chain、Avalanche、Solana、zkSync Era、Linea、Scroll 等 15+ 主流链。收益每 24 小时自动结算，资金由智能合约管理，完全去中心化非托管。支持中、英、日等多语言切换。',
    descriptionEn: 'Smart contract-based passive income platform with three products: Locked (18.5% APY), Stable (12.5% APY), Flexible (8.2% APY). Supports 15+ chains including Ethereum, Arbitrum, Polygon, and more. Daily settlement, non-custodial.',
    descriptionJa: 'スマートコントラクトベースの受動的収入プラットフォーム。3つの商品を提供：Locked（年利18.5%）、Stable（年利12.5%）、Flexible（年利8.2%）。Ethereum、Arbitrum、Optimism、Base、Polygon、BNB Chain、Avalanche、Solanaなど15以上の主要チェーンに対応。収益は24時間ごとに自動決済、スマートコントラクトにより完全分散型・非カストディアル運営。',
    descriptionKo: '스마트 계약 기반의 수동적 수입 플랫폼. 3가지 상품 제공: Locked (연 18.5%), Stable (연 12.5%), Flexible (연 8.2%). Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche, Solana 등 15개 이상 주요 체인 지원. 수익은 24시간마다 자동 정산, 스마트 계약으로 완전 분산형 논커스터디얼 운영.',
    url: 'https://earn.0xx402.com',
    icon: '💰'
  },
  {
    id: 'perpetual-trading',
    name: 'Perpetual Trading',
    nameZh: '永续交易',
    nameEn: 'Perpetual Trading',
    nameJa: '永久先物取引',
    nameKo: '퍼페추얼 트레이딩',
    tagline: '现代永续期货交易界面',
    taglineZh: '现代永续期货交易界面，支持实时图表和多倍杠杆',
    taglineEn: 'Modern perpetual futures trading interface with real-time charts and leverage',
    taglineJa: 'リアルタイムチャートとレ버レッジをサポートする現代的な永久先物取引インターフェース',
    taglineKo: '실시간 차트와 레버리지를 지원하는 현대적인 무기한 선물 거래 인터페이스',
    description: '',
    descriptionZh: '支持 BTC、ETH、BNB、SOL等多交易对的永续合约交易。采用 Interactive Charts 提供专业K线图表，WalletConnect 钱包连接。交易功能包括：支持做多/做空仓位、杠杆选择 1-50倍可调、设置止盈止损、USDT 存取款。采用 Next.js 15 + Tailwind CSS + Reown AppKit 构建，Supabase 数据存储，可选 Google Gemini API 提供 AI 分析功能。',
    descriptionEn: 'Perpetual contract trading for BTC, ETH, BNB, SOL and more. Interactive K-line charts, WalletConnect wallet. Features: long/short positions, 1-50x leverage, take profit/stop loss.',
    descriptionJa: 'BTC、ETH、BNB、SOLなどの取引ペアに対応した永久先物取引プラットフォーム。インタラクティブKライン charts、WalletConnect対応。ロング/ショート両建て、1-50倍レバレッジ、ストップロス・テイクプロフィット設定可能。USDT入出金対応。Next.js 15 + Tailwind CSS + Reown AppKitで構築。',
    descriptionKo: 'BTC, ETH, BNB, SOL 등 거래 페어를 지원하는 무기한 선물 거래 플랫폼. 인터랙티브 K라인 차트, WalletConnect 지원. 롱/숏 포지션, 1-50배 레버리지, 손절매/이익실현 설정 가능. USDT 입출금 지원. Next.js 15 + Tailwind CSS + Reown AppKit으로 구축.',
    url: 'https://futures.0xx402.com/',
    icon: '📈'
  },
  {
    id: 'nex-exchange',
    name: 'Nex Exchange',
    nameZh: 'Nex 交易所',
    nameEn: 'Nex Exchange',
    nameJa: 'Nex エクスチェンジ',
    nameKo: 'Nex 거래소',
    tagline: '新一代混合交易所',
    taglineZh: '新一代混合交易所，结合 CEX 效率与 DEX 透明度',
    taglineEn: 'Next-generation hybrid exchange combining CEX efficiency with DEX transparency',
    taglineJa: 'CEXの効率性とDEXの透明性を組み合わせた次世代ハイブリッドエクスチェンジ',
    taglineKo: 'CEX 효율성과 DEX 투명성을 결합한 차세대 하이브리드 거래소',
    description: '',
    descriptionZh: '新一代混合交易所，结合中心化交易所的高效性能与去中心化交易的透明性。提供快速匹配引擎和透明的链上结算。支持多链钱包连接，实时交易数据，专业的 K 线图表和交易界面。采用 Next.js 15 + Tailwind CSS + Reown AppKit 构建，Supabase 数据存储。',
    descriptionEn: 'Next-generation hybrid exchange combining CEX efficiency with DEX transparency. Fast matching engine and transparent chain settlement. Multi-chain wallet support, real-time trading data.',
    descriptionJa: 'CEXの効率性とDEXの透明性を組み合わせた次世代ハイブリッドエクスチェンジ。高速マッチングエンジンと透明なチェーン上決済を提供。マルチチェーンウォレット接続対応、リアルタイム取引データ、プロフェッショナルなKライン表示。Next.js 15 + Tailwind CSS + Reown AppKit + Supabaseで構築。',
    descriptionKo: 'CEX의 효율성과 DEX의 투명성을 결합한 차세대 하이브리드 거래소. 고속 매칭 엔진과 투명한 온체인 결제 제공. 멀티체인 지갑 연결 지원, 실시간 거래 데이터, 전문가용 K라인 차트. Next.js 15 + Tailwind CSS + Reown AppKit + Supabase로 구축.',
    url: 'https://nex.0xx402.com',
    icon: '⚡'
  },
{
    id: 'solaris-rwa',
    name: 'Solaris RWA',
    nameZh: 'Solaris RWA',
    nameEn: 'Solaris RWA',
    nameJa: 'Solaris RWA',
    nameKo: 'Solaris RWA',
    tagline: '现实世界资产代币化平台',
    taglineZh: '去中心化现实世界资产代币化平台，专注于可再生能源项目',
    taglineEn: 'Decentralized platform for real-world asset tokenization focusing on renewable energy',
    taglineJa: '再生可能エネルギー分野に焦点を当てた分散型の実世界資産トークナイゼーションプラットフォーム',
    taglineKo: '재생 에너지 부문에 초점을 맞춘 분산형 실세계 자산 토큰화 플랫폼',
    description: '',
    descriptionZh: '去中心化现实世界资产（RWA）代币化平台，专注于可再生能源项目，建立可持续的经济循环。代币化太阳能、风能等可再生能源资产，支持投资者购买和交易 RWA 代币，获得可持续的投资回报。采用 Next.js 15 + Tailwind CSS + viem + Reown AppKit 构建，Supabase 数据存储。',
    descriptionEn: 'Decentralized RWA tokenization platform for real-world assets, focusing on renewable energy projects. Tokenize solar, wind and other renewable energy assets.',
    descriptionJa: '再生可能エネルギー資産に特化した現実資産（RWA）トークン化プラットフォーム。太陽光発電、風力発電などの再生可能エネルギー資産をトークン化し、投資家がRWAトークンの購入・取引を行い、持続可能な投資リターンを得ることが可能。Next.js 15 + Tailwind CSS + viem + Reown AppKit + Supabaseで構築。',
    descriptionKo: '재생 에너지 자산에 특화된 실물 자산(RWA) 토큰화 플랫폼. 태양광, 풍력 등 재생 에너지 자산을 토큰화하여 투자자가 RWA 토큰을 구매 및 거래하고 지속 가능한 투자 수익을 얻을 수 있습니다. Next.js 15 + Tailwind CSS + viem + Reown AppKit + Supabase로 구축.',
    url: 'https://rwa.0xx402.com',
    icon: '☀️'
  },
  {
    id: 'xpay-labs',
    name: 'XPayLabs',
    nameZh: 'XPayLabs',
    nameEn: 'XPayLabs',
    nameJa: 'XPayLabs',
    nameKo: 'XPayLabs',
    tagline: '自托管加密支付基础设施',
    taglineZh: '自托管加密支付基础设施，支持波场 TRON、EVM 链和 SUI',
    taglineEn: 'Self-hosted Crypto Payment Infrastructure supporting TRON, EVM chains, and SUI',
    taglineJa: '自己ホスト型暗号通貨決済インフラ。TRON、EVMチェーン、SUI対応',
    taglineKo: '자체 호스팅 암호화폐 결제 인프라. TRON, EVM 체인, SUI 지원',
    description: '',
    descriptionZh: '自托管加密支付网关基础设施。支持 TRON（TRC20）、所有 EVM 链和 SUI 网络。完全非托管，私钥由您自己掌控，零网关手续费，仅付链上 Gas。提供完整的 REST API、Webhook 通知、实时监控仪表盘。支持 Docker Compose 一键部署。适合追求支付主权的电商、SaaS 平台和开发者。',
    descriptionEn: 'Self-hosted crypto payment gateway infrastructure. Supports TRON (TRC20), all EVM chains, and SUI. Fully non-custodial — private keys stay on your servers. Zero gateway fees, pay only on-chain gas. REST API, webhooks, real-time monitoring dashboard. One-click Docker Compose deployment.',
    descriptionJa: '自己ホスト型暗号通貨決済ゲートウェイインフラ。TRON（TRC20）、全EVMチェーン、SUIに対応。完全非カストディアルで秘密鍵はお客様のサーバーで管理。ゲートウェイ手数料無料、チェーン上のガス代のみ。REST API、Webhook、リアルタイム監視ダッシュボードを提供。Docker Composeでワンクリックデプロイ。',
    descriptionKo: '자체 호스팅 암호화폐 결제 게이트웨이 인프라. TRON(TRC20), 모든 EVM 체인, SUI 지원. 완전 논커스터디얼 — 개인키는 귀하의 서버에서 보관. 게이트웨이 수수료 무료, 온체인 가스비만 지불. REST API, Webhook, 실시간 모니터링 대시보드 제공. Docker Compose 원클릭 배포.',
    url: 'https://www.xpaylabs.com',
    icon: '💳'
  },
  {
    id: 'blackhole-protocol',
    name: 'Blackhole Protocol',
    nameZh: 'Blackhole 协议',
    nameEn: 'Blackhole Protocol',
    nameJa: 'Blackhole プロトコル',
    nameKo: 'Blackhole 프로토콜',
    tagline: '用行为价值取代资本门槛，与 AI 共存',
    taglineZh: '用行为价值取代资本门槛，与 AI 共存的去中心化节点网络协议',
    taglineEn: 'Replace capital thresholds with behavioral value, coexist with AI',
    taglineJa: '資本しきい値を行動的価値に置き換え、AIと共存する',
    taglineKo: '자본 장벽을 행동 가치로 대체하고 AI와 공존하다',
    description: '',
    descriptionZh: '创新的去中心化节点网络协议，采用三层节点系统（Observer、Navigator、Singularity）、3x3 矩阵病毒机制和独特 FOMO 倒计时系统。HBP（Blackhole Power）代币总量 1 亿枚，通过购买锁仓、卖出销毁和黑洞分红机制实现持续通缩。核心哲学：行为本身就是能量，平台不应无偿收割。智能合约采用 Solidity 0.8.28 + Hardhat 构建，前端采用 Next.js 15 + React 19 + Tailwind CSS + Wagmi。',
    descriptionEn: 'Innovative decentralized node network protocol with three-tier node system, 3x3 matrix viral mechanism, and FOMO countdown system. HBP token with 100M fixed supply achieves continuous deflation through purchase locking, sell burning, and black hole dividend. Smart contracts built with Solidity 0.8.28 + Hardhat, frontend with Next.js 15 + React 19 + Tailwind CSS + Wagmi.',
    descriptionJa: '3層ノードシステム、3x3マトリックスウイルス機構、FOMOカウントダウンシステムを特徴とする革新的な分散型ノードネットワークプロトコル。HBPトークンは1億枚の固定供給量で、購入ロック、売却バーン、黒字配当メカニズムを通じて継続的なデフレを実現。スマートコントラクトはSolidity 0.8.28 + Hardhat、フロントエンドはNext.js 15 + React 19 + Tailwind CSS + Wagmiで構築。',
    descriptionKo: '3단계 노드 시스템, 3x3 매트릭스 바이럴 메커니즘, FOMO 카운트다운 시스템을 특징으로 하는 혁신적인 탈중앙화 노드 네트워크 프로토콜. HBP 토큰은 1억 개의 고정 공급량으로 구매 잠금, 판매 버닝, 블랙홀 배당 메커니즘을 통해 지속적인 디플레이션을 달성합니다. 스마트 계약은 Solidity 0.8.28 + Hardhat, 프론트엔드는 Next.js 15 + React 19 + Tailwind CSS + Wagmi로 구축.',
    url: 'https://blackhole.0xx402.com',
    icon: '🕳️'
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
    descriptionJa: 'ユーザーがカスタム予測イベントを作成し、複数のオプションと期限を設定できる分散型予測マーケットプレイス。他のユーザーは全予測マーケットを閲覧、カテゴリフィルターや検索に対応。各オプションのオッズと参加状況をリアルタイム表示。MetaMask、WalletConnect対応。ブロックチェーン技術により完全分散型で、結果の改ざんが不可能。Next.js 15 + wagmi + viem + Reown AppKit + Supabase + Motionアニメーションで構築。',
    descriptionKo: '사용자가 맞춤 예측 이벤트를 생성하고 여러 옵션과 마감일을 설정할 수 있는 분산형 예측 마켓플레이스. 다른 사용자는 모든 예측 시장을 탐색하고 카테고리 필터 및 검색을 사용할 수 있습니다. 각 옵션의 배당률과 참여 현황을 실시간으로 확인 가능. MetaMask, WalletConnect 지원. 블록체인 기반으로 완전 분산형, 결과 조작 불가능. Next.js 15 + wagmi + viem + Reown AppKit + Supabase + Motion 애니메이션으로 구축.',
    url: 'https://prediction.0xx402.com/',
    icon: '🎯'
  }
]