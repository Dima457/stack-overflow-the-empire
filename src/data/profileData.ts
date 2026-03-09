// profileData.ts
export interface Asset {
  name: string;
  value: number;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Earning {
  label: string;
  value: number; // или string, если нужно с символом $
}

export const assets: Asset[] = [
  { name: 'Баланс', value: 0.00, color: '#4A90A4' },
  { name: 'Бизнесы', value: 0.00, color: '#E85D5D' },
  { name: 'Акции', value: 0.00, color: '#F5A623' },
  { name: 'Недвижимость', value: 0.00, color: '#9B7ED9' },
  { name: 'Транспорт', value: 0.00, color: '#6AB04C' },
  { name: 'Коллекции', value: 0.00, color: '#5D8BF4' },
  { name: 'Криптоактивы', value: 0.00, color: '#4ECDC4' },
  { name: 'Резиденция', value: 0.00, color: '#1E3A8A' },
];

export const stats: Stat[] = [
  { label: 'Кол-во бизнесов', value: '0' },
  { label: 'Недвижимость', value: '0 из 138' },
  { label: 'Выкуплено компаний', value: '0 из 50' },
  { label: 'Автомобилей', value: '0' },
  { label: 'Летательных средств', value: '0' },
  { label: 'Яхты', value: '0' },
  { label: 'Коллекционных предметов', value: '0' },
  { label: 'Островов', value: '0' },
  { label: 'NFT', value: '0' },
];

// Здесь value - число, потому что будем форматировать на месте
export const earnings: Omit<Earning, 'value'>[] = [
  { label: 'В кликере' },
  { label: 'В бизнесе' },
  { label: 'На аренде' },
  { label: 'На дивидендах' },
  { label: 'На трейдинге' },
  { label: 'На криптоторговле' },
  { label: 'на работе' },
];