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
        <a
          href="/buscar"
          class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Comenzar búsqueda
        </a>
      </main>

      <Footer />
    </div>
  );
}
