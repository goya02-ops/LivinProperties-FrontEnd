export default function Header() {
  return (
    <header class="bg-gray-100 py-4 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-indigo-600">Livin Properties</h2>
        <nav class="space-x-6">
          <a href="/" class="text-gray-700 hover:text-indigo-600">Inicio</a>
          <a href="/login" class="text-gray-700 hover:text-indigo-600">Ingresar</a>
          <a href="/registro" class="text-gray-700 hover:text-indigo-600">Registrarse</a>
        </nav>
      </div>
    </header>
  );
}
