export interface InvestmentAsset {
  id: string;
  name: string;
  icon: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  riskLevel: 'low' | 'medium' | 'high';
  returnRate: number; // годовых в процентах
  unlockRequirement?: {
    level?: number;
    skill?: string;
    skillLevel?: number;
  };
}

export interface InvestmentMode {
  id: string;
  label: string;
  icon: string;
  description: string;
  assets: InvestmentAsset[];
}

export const investmentModes: InvestmentMode[] = [
  {
    id: 'crypto',
    label: 'Крипта',
    icon: '₿',
    description: 'Высокорисковые инвестиции в криптовалюты',
    assets: [
      {
        id: 'btc',
        name: 'Bitcoin',
        icon: '₿',
        description: 'Классика. Стабильно растет... иногда.',
        minAmount: 100,
        maxAmount: 50000,
        riskLevel: 'high',
        returnRate: 15,
      },
      {
        id: 'meme',
        name: 'Meme Coin',
        icon: '🐕',
        description: 'То ли до луны, то ли в ноль. 50/50',
        minAmount: 10,
        maxAmount: 5000,
        riskLevel: 'high',
        returnRate: 100,
      },
      {
        id: 'defi',
        name: 'DeFi Protocol',
        icon: '🔷',
        description: 'Фарминг, стейкинг, сложные слова',
        minAmount: 500,
        maxAmount: 20000,
        riskLevel: 'medium',
        returnRate: 25,
        unlockRequirement: { skill: 'blockchain', skillLevel: 3 },
      },
    ],
  },
  {
    id: 'stocks',
    label: 'Акции',
    icon: '📈',
    description: 'Традиционный фондовый рынок',
    assets: [
      {
        id: 'bluechip',
        name: 'Blue Chips',
        icon: '🏢',
        description: 'Надежные гиганты типа Apple, Google',
        minAmount: 1000,
        maxAmount: 100000,
        riskLevel: 'low',
        returnRate: 8,
      },
      {
        id: 'startup',
        name: 'Tech Startups',
        icon: '🚀',
        description: 'Молодые компании с потенциалом x10',
        minAmount: 500,
        maxAmount: 30000,
        riskLevel: 'medium',
        returnRate: 20,
        unlockRequirement: { level: 5 },
      },
      {
        id: 'options',
        name: 'Опционы',
        icon: '🎲',
        description: 'Для тех, кто любит адреналин',
        minAmount: 2000,
        maxAmount: 50000,
        riskLevel: 'high',
        returnRate: 50,
        unlockRequirement: { skill: 'trading', skillLevel: 5 },
      },
    ],
  },
  {
    id: 'realty',
    label: 'Недвижка',
    icon: '🏠',
    description: 'Инвестиции в недвижимость',
    assets: [
      {
        id: 'rent',
        name: 'Квартира под аренду',
        icon: '🔑',
        description: 'Пассивный доход каждый месяц',
        minAmount: 50000,
        maxAmount: 500000,
        riskLevel: 'low',
        returnRate: 6,
        unlockRequirement: { level: 10 },
      },
      {
        id: 'flip',
        name: 'Перепродажа',
        icon: '🔨',
        description: 'Купить, отремонтировать, продать',
        minAmount: 30000,
        maxAmount: 300000,
        riskLevel: 'medium',
        returnRate: 15,
        unlockRequirement: { level: 8 },
      },
      {
        id: 'commercial',
        name: 'Коммерческая',
        icon: '🏪',
        description: 'Офисы и магазины - серьезный бизнес',
        minAmount: 100000,
        maxAmount: 1000000,
        riskLevel: 'medium',
        returnRate: 10,
        unlockRequirement: { level: 15 },
      },
    ],
  },
  {
    id: 'business',
    label: 'Бизнес',
    icon: '💼',
    description: 'Инвестиции в стартапы и бизнесы',
    assets: [
      {
        id: 'freelance',
        name: 'Аутсорс команда',
        icon: '👥',
        description: 'Нанять фрилансеров, брать проекты',
        minAmount: 5000,
        maxAmount: 50000,
        riskLevel: 'medium',
        returnRate: 30,
        unlockRequirement: { skill: 'management', skillLevel: 2 },
      },
      {
        id: 'saas',
        name: 'SaaS Стартап',
        icon: '☁️',
        description: 'Свой сервис с подпиской',
        minAmount: 20000,
        maxAmount: 200000,
        riskLevel: 'high',
        returnRate: 40,
        unlockRequirement: { skill: 'product', skillLevel: 4 },
      },
      {
        id: 'ai',
        name: 'AI Продукт',
        icon: '🤖',
        description: 'Нейросети - тренд 2024',
        minAmount: 50000,
        maxAmount: 500000,
        riskLevel: 'high',
        returnRate: 60,
        unlockRequirement: { skill: 'ai', skillLevel: 5 },
      },
    ],
  },
];

//* Хелпер для получения активов по ID режима
export const getAssetsByMode = (modeId:string):InvestmentAsset[] =>{
  const mode = investmentModes.find((m)=>{m.id=== modeId});
  return(mode?.assets||[])
}




//* Хелпер для получения инфы о режиме
export const getModeInfo = (modalId:string):InvestmentMode|undefined=>{
    return investmentModes.find((m)=>m.id === modalId)
    
}