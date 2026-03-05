import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const tabs = [
  { id: 'investments', path: '/investments', label: 'Инвестиции', icon: '...' },
  { id: 'career', path: '/career', label: 'Карьера', icon: '...' },
  { id: 'home', path: '/', label: 'Главная', icon: '...' },
  { id: 'life', path: '/life', label: 'Жизнь', icon: '...' },
  { id: 'profile', path: '/profile', label: 'Профиль', icon: '...' },
];

export function Sidebar() {
  return (
    <nav className="sidebar">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) => 
            `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
          }
        >
          <span className="sidebar__icon">{tab.icon}</span>
          <span className="sidebar__label">{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}