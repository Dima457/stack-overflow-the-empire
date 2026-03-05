import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage'; // ← твой текущий контент
import { CareerPage } from './pages/CareerPage/CareerPage';
import { InvestmentsPage } from './pages/InvestmentsPage/InvestmentsPage';
import { LifePage } from './pages/LifePage/LifePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
//import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/life" element={<LifePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;