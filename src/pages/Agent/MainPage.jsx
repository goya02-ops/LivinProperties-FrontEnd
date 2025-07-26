import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

export default function AgentMainPage() {
  return (
    <div class="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Livin Properties - Agentes</h1>
          <p className="text-lg text-center max-w-xl mb-10">
            Página principal para agentes inmobiliarios pertenecientes a Livin Properties
          </p>
        <div className="flex flex-col space-y-4"> 
          <a href="/buscar" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition min-w-[200px] text-center" >
            Visitas
          </a>
          <a href="/agente" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition min-w-[200px] text-center">
            Propiedades
          </a>
          <a href="/ventas" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition min-w-[200px] text-center" >
            Ventas
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
