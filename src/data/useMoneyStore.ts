// store/useMoneyStore.ts
import { create } from 'zustand';

interface MoneyStore {
  clickerMoney: number;
  addMoney: (amount: number) => void;
  setMoney: (amount: number) => void;
  loadFromStorage: () => void;
}

const useMoneyStore = create<MoneyStore>((set) => ({
  // Состояние
  clickerMoney: 0,
  
  // Действия
  addMoney: (amount: number) => 
    set((state) => {
      const newMoney = state.clickerMoney + amount;
      // Сразу сохраняем в localStorage
      localStorage.setItem('UnityMoney', JSON.stringify({ moneyClicker: newMoney }));
      return { clickerMoney: newMoney };
    }),
  
  setMoney: (amount: number) => {
    localStorage.setItem('UnityMoney', JSON.stringify({ moneyClicker: amount }));
    set({ clickerMoney: amount });
  },
  
  // Загрузка из localStorage
  loadFromStorage: () => {
    const saved = localStorage.getItem('UnityMoney');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as { moneyClicker: number };
        set({ clickerMoney: parsed.moneyClicker });
      } catch (error) {
        console.error('Ошибка загрузки из localStorage:', error);
      }
    }
  }
}));

export default useMoneyStore;