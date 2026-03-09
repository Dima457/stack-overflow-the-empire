/// ProfilePage.tsx
import './ProfilePage.css';
import useMoneyStore from 'data/useMoneyStore';
import { assets,stats, earnings } from 'data/profileData';
import { useEffect } from 'react';

export function ProfilePage() {
  const { clickerMoney, loadFromStorage } = useMoneyStore();

  useEffect(() => {
    loadFromStorage();
  }, []);

  const formatMoney = (amount: number) => {
    return `$ ${amount.toFixed(2).replace('.', ',')}`;
  };

  // Обновляем значение баланса в assets
  const updatedAssets = assets.map(asset => 
    asset.name === 'Баланс' 
      ? { ...asset, value: clickerMoney }
      : asset
  );

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <h1>Профиль</h1>
        <button className="connect-btn">
          <span className="user-icon">👤</span>
          Подключить
        </button>
      </header>

      {/* Balance Section */}
      <section className="balance-section">
        <div className="total-balance">{formatMoney(clickerMoney)}</div>
        <div className="balance-label">Состояние</div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="assets-grid">
        {updatedAssets.map((asset, index) => (
          <div key={index} className="asset-card">
            <div className="asset-color-bar" style={{ backgroundColor: asset.color }}></div>
            <div className="asset-info">
              <span className="asset-name">{asset.name}</span>
              <span className="asset-value">{formatMoney(asset.value)}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Статистика</h2>
        <div className="stats-list">
          {stats.map((stat, index) => (
            <div key={index} className="stat-row">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        <h2 className="earnings-title">Заработано</h2>
        <div className="stats-list">
          {earnings.map((item, index) => (
            <div key={index} className="stat-row">
              <span className="stat-label">{item.label}</span>
              <span className="stat-value">
                {item.label === 'В кликере' 
                  ? formatMoney(clickerMoney)
                  : '$ 0,00'}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}