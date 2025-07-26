import { FiCalendar, FiClock, FiTag, FiFileText, FiHome } from 'react-icons/fi'
import OptionCard from '../../components/OptionCard.jsx'

export default function AgentDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
        Panel de Agente Inmobiliario
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <OptionCard
          to="/agent/RegisterVisitPage"
          icon={FiCalendar}
          title="Agendar Visita"
        />
        <OptionCard
          to="/agent/RegisteredVisitsPage"
          icon={FiClock}
          title="Visitas Registradas"
        />
        <OptionCard
          to="/agent/NewSalePage"
          icon={FiTag}
          title="Registrar Venta"
        />
        <OptionCard
          to="/agent/RegSalesPage"
          icon={FiFileText}
          title="Ventas Registradas"
        />
        <OptionCard
          to="/agent/propiedades"
          icon={FiHome}
          title="Propiedades"
        />
      </div>
    </div>
  )
}
