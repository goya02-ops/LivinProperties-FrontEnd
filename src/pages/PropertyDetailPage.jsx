//import { useParams } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header";

const inmueble = {
  imagen: 'https://via.placeholder.com/800x500',
  denominacion: 'Casa Familiar en Echesortu',
  descripcion: 'Propiedad amplia y moderna con patio, cochera y cocina equipada. Excelente ubicación cerca de colegios y comercios.',
  barrio: 'Echesortu',
  precio: 120000,
  habitaciones: 3,
  baños: 2,
  superficie: 180,
  agente: {
    nombre: 'Laura García',
    contacto: 'laura@livin.com'
  }
};

export default function PropertyDetailPage() {
  //const { id } = useParams(); // futuro uso con ID dinámico

  return (
    <div>
      <Header/>
      <div class="max-w-4xl mx-auto px-4 py-8">
        <img src={inmueble.imagen} alt={inmueble.denominacion} class="w-full h-64 object-cover rounded-md mb-6" />
        <h1 class="text-2xl font-bold text-indigo-700">{inmueble.denominacion}</h1>
        <p class="text-gray-700 mt-2">{inmueble.descripcion}</p>

        <div class="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
          <p><strong>Barrio:</strong> {inmueble.barrio}</p>
          <p><strong>Precio:</strong> ${inmueble.precio}</p>
          <p><strong>Habitaciones:</strong> {inmueble.habitaciones}</p>
          <p><strong>Baños:</strong> {inmueble.baños}</p>
          <p><strong>Superficie:</strong> {inmueble.superficie} m²</p>
        </div>

        <div class="mt-8 bg-gray-50 p-4 rounded-md">
          <h2 class="text-lg font-semibold text-indigo-600">Contacto con el agente</h2>
          <p class="text-sm mt-1">Agente: {inmueble.agente.nombre}</p>
          <a
            href={`/chat`}
            class="inline-block mt-3 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Iniciar Chat
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
