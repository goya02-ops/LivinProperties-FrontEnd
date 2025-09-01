import SearchBar from '../components/SearchBar.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const propiedades = [
  {
    imagen: 'https://via.placeholder.com/400x300',
    denominacion: 'Departamento 2 Ambientes',
    descripcion: 'Luminoso, bien ubicado, ideal para parejas jóvenes.',
    barrio: 'Centro',
    precio: 75000
  },
  {
    imagen: 'https://via.placeholder.com/400x300',
    denominacion: 'Casa Familiar',
    descripcion: 'Amplia y moderna con patio y cochera.',
    barrio: 'Echesortu',
    precio: 120000
  },
  {
    imagen: 'https://via.placeholder.com/400x300',
    denominacion: 'Monoambiente amoblado',
    descripcion: 'Listo para mudarse. Cerca de universidades.',
    barrio: 'Alberdi',
    precio: 48000
  }
];

export default function PropertyListPage() {
  return (
    <div>
      <Header/>
      <div class="min-h-screen bg-white px-4 py-8">
        <h1 class="text-2xl font-bold mb-6 text-center">Resultados de búsqueda</h1>
        <SearchBar />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {propiedades.map((inmueble, idx) => (
            <PropertyCard key={idx} inmueble={inmueble} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
