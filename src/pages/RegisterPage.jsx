export default function RegisterPage() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 class="text-2xl font-bold mb-6">Registro de usuario</h1>

      <form class="w-full max-w-sm space-y-4">
        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label for="apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            type="text"
            id="apellido"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
