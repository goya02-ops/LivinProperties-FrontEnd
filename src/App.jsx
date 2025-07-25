import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PropertyListPage from './pages/PropertyListPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/buscar" element={<PropertyListPage />} />
        <Route path="/inmueble" element={<PropertyDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
