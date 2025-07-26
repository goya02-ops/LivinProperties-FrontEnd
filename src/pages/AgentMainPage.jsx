import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
export default function AgentMainPage() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Panel del Agente Inmobiliario</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/agente/visitas" className="block p-4 bg-blue-100 rounded hover:bg-blue-200">Gestión de visitas</a>
          <a href="/agente/ventas" className="block p-4 bg-green-100 rounded hover:bg-green-200">Gestión de ventas</a>
          <a href="/agente/propiedades" className="block p-4 bg-yellow-100 rounded hover:bg-yellow-200">Propiedades</a>
        </div>
      </div>
    );
  }
  