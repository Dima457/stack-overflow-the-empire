// PortfolioCard.tsx
import './PortfolioCard.css';

interface PortfolioCardProps {
  // Стоимость портфеля
  totalValue: number;
  // Изменение за всё время ($)
  totalChange: number;
  // Изменение в процентах
  totalChangePercent: number;
  // Дивидендная доходность в час ($)
  hourlyDividend: number;
  // Опционально: заголовок карточки
  title?: string;
  // Опционально: callback при клике на стрелку
  onClick?: () => void;
}

export function PortfolioCard({
  totalValue,
  totalChange,
  totalChangePercent,
  hourlyDividend,
  title = 'Мой портфель',
  onClick,
}: PortfolioCardProps) {
  const isPositive = totalChange >= 0;
  const changeSign = isPositive ? '+' : '';
  const changeColor = isPositive ? 'positive' : 'negative';

const  formatMoney = (amount:number):string=>{
    return new Intl.NumberFormat('ru-RU',{
        style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
}

  return(
    <div className="portfolio-card">
      <div className="portfolio-card__header">
        <div className="portfolio-card__title-wrapper">
          <span className="portfolio-card__icon">💼</span>
          <h3 className="portfolio-card__title">{title}</h3>
        </div>
        <button className="portfolio-card__arrow" onClick={onClick}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M9 18l6-6-6-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="portfolio-card__content">
        <div className="portfolio-card__section">
          <span className="portfolio-card__label">Стоимость портфеля</span>
          <span className="portfolio-card__value portfolio-card__value--large">
            {formatMoney(totalValue)}
          </span>
          <span className={`portfolio-card__change portfolio-card__change--${changeColor}`}>
            {changeSign}{formatMoney(totalChange)} ({changeSign}{totalChangePercent.toFixed(2)}%) за все время
          </span>
        </div>

        <div className="portfolio-card__section">
          <span className="portfolio-card__label">Дивидендная доходность в час</span>
          <span className="portfolio-card__value portfolio-card__value--large">
            {formatMoney(hourlyDividend)}
          </span>
        </div>
      </div>
    </div>
  );
}