import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PropertyListPage from './pages/PropertyListPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import MainPage from './pages/Agent/MainPage.jsx';
import SellsPage from './pages/Agent/SellsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/buscar" element={<PropertyListPage />} />
        <Route path="/inmueble" element={<PropertyDetailPage />} />
        <Route path="/agente" element={<MainPage />} />
        <Route path="/ventas" element={<SellsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
