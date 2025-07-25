import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function SellsPage() {
  return (
    <div class="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main class="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <h1 class="text-4xl font-bold mb-6 text-center">Livin Properties - Agentes</h1>
        <p class="text-lg text-center max-w-xl mb-10">
            Aquí se verán las ventas
        </p>
      </main>

      <Footer />
    </div>
  );
}
