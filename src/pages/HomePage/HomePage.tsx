// HomePage.tsx
import { useEffect } from 'react';
import './HomePage.css';
import useMoneyStore from 'data/useMoneyStore';

export function HomePage() {
  const { clickerMoney, addMoney, loadFromStorage } = useMoneyStore();

  // Загружаем при монтировании
  useEffect(() => {
    loadFromStorage();
  }, []);

  const handleClick = () => {
    addMoney(1);
  };

  return (
    <>
      <section className="section">
        <div className="bank-card" onClick={handleClick}> 
          <div className="bank-card__chip"></div>
          <div className="bank-card__balance">
            <div className="bank-card__balance-label">Баланс</div>
            <div className="bank-card__balance-value">
              <span className="coin-icon">$</span>
              <span>{clickerMoney}</span>
            </div>
          </div>
          <div className="bank-card__tap-hint">Тапай для заработка</div>
        </div>
      </section>
    </>
  );
}