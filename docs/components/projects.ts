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
    taglineJa: '年利18.5%可能な安全高效的なUSDTスマート 理財プラットフォーム',
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
    id: 'x-pay',
    name: 'X-Pay',
    nameZh: 'X-Pay 支付网关',
    nameEn: 'X-Pay',
    nameJa: 'X-Pay',
    nameKo: 'X-Pay',
    tagline: 'Web2 友好加密货币支付网关',
    taglineZh: 'Web2 友好的加密货币支付网关，零手续费、无需 KYC',
    taglineEn: 'Web2-Friendly Crypto Payment Gateway with zero fees and no KYC',
    taglineJa: 'ゼロ手数料・KYC不要のWeb2友好的暗号資産決済ゲートウェイ',
    taglineKo: '제로 수수료, KYC 불필요한 Web2 친화적 암호 화폐 결제 게이트웨이',
    description: '',
    descriptionZh: 'Web2 友好的加密货币支付网关。支持创建支付订单、支付二维码、回调验证等功能。支持 USDT 等多种加密货币和 TRON 等多条链。零手续费（仅收网络费）、无需 KYC、不可逆交易、安全可靠。提供 React SDK 和 Java SDK，方便开发者集成。适合电商、 Donation、API 付费等场景。',
    descriptionEn: 'Web2-friendly crypto payment gateway. Supports USDT, multiple chains, zero fees, no KYC. Create payment orders, QR codes, webhooks. React and Java SDK available.',
    descriptionJa: 'Web2向け暗号資産決済ゲートウェイ。支払い注文作成、QRコード決済、コールバック検証に対応。USDTなど複数の暗号資産とTRONなど複数のチェーンをサポート。手数料無料（ネットワーク手数のみ）、KYC不要、取消不可の安全な取引。React SDK・Java SDK提供。ECサイト、Donation、API決済などに最適。',
    descriptionKo: 'Web2 친화적 암호화폐 결제 게이트웨이. 결제 주문 생성, QR코드 결제, 콜백 검증 지원. USDT 등 여러 암호화폐와 TRON 등 여러 체인 지원. 수수료 무료(네트워크 수수료만), KYC 불필요, 취소 불가능한 안전한 거래. React SDK 및 Java SDK 제공. 전자상거래, 기부, API 결제 등에 적합.',
    url: 'https://www.x-pay.fun/',
    icon: '💳'
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