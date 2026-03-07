import './LifePage.css';
import { ThingsForLifePage } from '../../component/ThingsForLifePage/ThingsForLifePage';
import { collectionData } from '../../component/ThingsForLifePage/ThingsForLifePage';
export function LifePage() {
  return (
    <div className="life-page">
      <div className="container">
        {/* Предметы Section */}
        <h2 className="section-title">Предметы</h2>
        



        {/* Property Cards */}
        <div className="property-grid">
          <div className="property-card">
            <img 
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=200&h=200&fit=crop" 
              alt="Гараж" 
              className="property-card__image"
            />
            <span className="property-card__label">Гараж</span>
          </div>
          <div className="property-card">
            <img 
              src="https://images.unsplash.com/photo-1542296332-2e44a0e1a2b5?w=200&h=200&fit=crop" 
              alt="Ангар" 
              className="property-card__image"
            />
            <span className="property-card__label">Ангар</span>
          </div>
          <div className="property-card">
            <img 
              src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=200&h=200&fit=crop" 
              alt="Причал" 
              className="property-card__image"
            />
            <span className="property-card__label">Причал</span>
          </div>
        </div>





        {/* Category Tabs */}
        <div className="category-tabs">
          <button className="category-tab">
            <span className="category-tab__icon">🏪</span>
            <span className="category-tab__label">Автосалон</span>
          </button>
          <button className="category-tab category-tab--active">
            <span className="category-tab__icon">🛩️</span>
            <span className="category-tab__label">Авиамагазин</span>
          </button>
          <button className="category-tab">
            <span className="category-tab__icon">🛥️</span>
            <span className="category-tab__label">Яхт-шоп</span>
          </button>
        </div>





        {/* Divider */}
        <div className="divider"></div>

        {/* Коллекции Section */}
        <h2 className="section-title">Коллекции</h2>

        {/* Collections Grid */}
        <div className="collections-grid">
          {/* Regular collection cards - 2 per row */}
          
            <ThingsForLifePage items={collectionData}/>
          

          

          {/* Full width image card */}
          <div className="collection-card collection-card--image">
            <img 
              src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=150&fit=crop" 
              alt="Острова" 
              className="collection-card__bg-image"
            />
            <div className="collection-card__overlay">
              <span className="collection-card__image-title">Острова</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}