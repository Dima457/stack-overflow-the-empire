// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../component/Sidebar/Sidebar';
//import './MainLayout.css';
import '../../App.css'


export function MainLayout() {
  return (
     <div className="app">
      {/* Хедер */}
      <header className="app-header">
        <div className="app-header__content">
          <h1 className="app-header__title">IT Tycoon</h1>
          <div className="app-header__stats">
          </div>
        </div>
      </header>

      {/* Контент страницы */}
      <main className="app-main">
        <Outlet />  
      </main>

      {/* Сайдбар общий для всех */}
      <Sidebar />
    </div>
  );
}