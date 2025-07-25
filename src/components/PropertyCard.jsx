export default function PropertyCard({ inmueble }) {
  return (
    <div class="bg-white border rounded-md shadow-sm overflow-hidden">
      <img
        src={inmueble.imagen}
        alt={inmueble.denominacion}
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-bold text-indigo-600">{inmueble.denominacion}</h3>
        <p class="text-sm text-gray-700">{inmueble.descripcion}</p>
        <p class="text-sm text-gray-500 mt-2">
          Barrio: <span class="font-medium">{inmueble.barrio}</span>
        </p>
        <p class="text-sm text-gray-800 font-bold mt-1">${inmueble.precio}</p>
        <a
          href="/inmueble"
          class="block mt-4 text-indigo-600 hover:underline text-sm"
        >
          Ver más detalles
        </a>
      </div>
    </div>
  );
}
