import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PropertyListPage from './pages/PropertyListPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import SellsPage from './pages/Agent/SellsPage.jsx';
import AgentDashboardPage from './pages/Agent/DashboardPage.jsx';
import PropertyDocumentsPage from './pages/PropertyDocumentsPage.jsx';
import RegisterVisitPage from './pages/Agent/RegisterVisitPage.jsx';
import RegisteredPage from './pages/Agent/RegisteredVisitsPage.jsx';
import NewSalePage from './pages/Agent/NewSalePage.jsx';  
import RegSalesPages from './pages/Agent/RegSalesPage.jsx'; // Import the new RegSalesPage component
import SaleDetailPage from './pages/Agent/SaleDetailPage.jsx'; // Import the SaleDetailPage component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/buscar" element={<PropertyListPage />} />
        <Route path="/inmueble" element={<PropertyDetailPage />} />
        <Route path="/agente" element={<AgentDashboardPage />} />
        <Route path="/documentos" element={<PropertyDocumentsPage />} />
        <Route path="/ventas" element={<SellsPage />} />
        <Route path="/agent/RegisterVisitPage" element={<RegisterVisitPage />} />
        <Route path="/agent/RegisteredVisitsPage" element={<RegisteredPage />} />
        <Route path="/agent/NewSalePage" element={<NewSalePage />} />
        <Route path="/agent/RegSalesPage" element={<RegSalesPages />} /> {/* New route for RegSalesPage */}
        <Route path="/agent/SaleDetailPage" element={<SaleDetailPage />} /> {/* New route for SaleDetailPage */}
        {/* Otras rutas pueden ser añadidas aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
