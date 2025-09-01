export default function SearchBar() {
  return (
    <div class="bg-gray-100 p-4 rounded-md w-full max-w-4xl mx-auto mb-6">
      <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Ciudad o Barrio"
          class="px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Precio Máximo"
          class="px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
