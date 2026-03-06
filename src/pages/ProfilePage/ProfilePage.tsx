// ProfilePage.jsx
import './ProfilePage.css';

export function ProfilePage() {
  const assets = [
    { name: 'Баланс', value: 0.00, color: '#4A90A4' },
    { name: 'Бизнесы', value: 0.00, color: '#E85D5D' },
    { name: 'Акции', value: 0.00, color: '#F5A623' },
    { name: 'Недвижимость', value: 0.00, color: '#9B7ED9' },
    { name: 'Транспорт', value: 0.00, color: '#6AB04C' },
    { name: 'Коллекции', value: 0.00, color: '#5D8BF4' },
    { name: 'Криптоактивы', value: 0.00, color: '#4ECDC4' },
    { name: 'Резиденция', value: 0.00, color: '#1E3A8A' },
  ];

  const stats = [
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

  const earnings = [
    { label: 'В кликере', value: '$ 0,00' },
    { label: 'В бизнесе', value: '$ 0,00' },
    { label: 'На аренде', value: '$ 0,00' },
    { label: 'На дивидендах', value: '$ 0,00' },
    { label: 'На трейдинге', value: '$ 0,00' },
    { label: 'На криптоторговле', value: '$ 0,00' },
    { label: 'На торговле драгоценностями', value: '$ 0,00' },
  ];

  const formatMoney = (amount: number) => {
    return `$ ${amount.toFixed(2).replace('.', ',')}`;
  };

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
        <div className="total-balance">{formatMoney(0)}</div>
        <div className="balance-label">Состояние</div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="assets-grid">
        {assets.map((asset, index) => (
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
              <span className="stat-value">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item active">
          <span className="nav-icon">📊</span>
          <span className="nav-label">Инвестиции</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🏢</span>
          <span className="nav-label">Бизнес</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">💰</span>
          <span className="nav-label">Заработок</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🎁</span>
          <span className="nav-label">Предметы</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Профиль</span>
        </button>
      </nav>
    </div>
  );
}