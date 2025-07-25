export default function LoginPage() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 class="text-2xl font-bold mb-6">Ingresá a tu cuenta</h1>

      <form class="w-full max-w-sm space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Ingresar
        </button>
      </form>

      <p class="mt-6 text-sm text-gray-600">
        ¿No tenés cuenta? <a href="/registro" class="text-indigo-600 hover:underline">Registrate acá</a>
      </p>
    </div>
  );
}
