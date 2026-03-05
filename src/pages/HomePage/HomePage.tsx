import './HomePage.css';

export function HomePage() {
  return (
    <>
      {/* Секция с банковской картой */}
      <section className="section">
        <div className="bank-card">
          <div className="bank-card__chip"></div>
          <div className="bank-card__balance">
            <div className="bank-card__balance-label">Баланс</div>
            <div className="bank-card__balance-value">
              <span className="coin-icon">$</span>
              <span>0</span>
            </div>
          </div>
          <div className="bank-card__tap-hint">Тапай для заработка</div>
        </div>
      </section>

      {/* Пассивный доход */}
      <section className="section">
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '4px' }}>
                Доход
              </div>
              <div className="coin-display" style={{ fontSize: '1.25rem' }}>
                <span className="coin-icon">$</span>
                <span>0 / сек</span>
              </div>
            </div>
            <div className="badge badge--success">+0%</div>
          </div>
        </div>
      </section>
    </>
  );
}