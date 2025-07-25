import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function LandingPage() {
  return (
    <div class="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main class="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <h1 class="text-4xl font-bold mb-6 text-center">Bienvenido a Livin Properties</h1>
        <p class="text-lg text-center max-w-xl mb-10">
          Encontrá el inmueble ideal para tu próximo paso. Navegá por propiedades, contactá agentes y descubrí opciones en tu ciudad.
        </p>
       <div className="flex flex-col space-y-4"> 
          <a href="/buscar" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition min-w-[200px] text-center" >
            Buscar
          </a>
          <a href="/agente" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition min-w-[200px] text-center">
            Soy agente
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
