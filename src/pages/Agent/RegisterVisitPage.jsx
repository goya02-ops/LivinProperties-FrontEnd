// src/pages/AgendarVisitaForm.jsx
import React from 'react';

const AgendarVisitaForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <header className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {/* Icono de Casa con Flechas (placeholder) */}
          <span className="text-blue-600 text-2xl font-bold">🏠↑</span>
          <h1 className="text-2xl font-semibold text-gray-800">Livin' Properties</h1>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="w-full max-w-4xl text-sm text-gray-600 mb-6">
        <span>Home</span>
        <span className="mx-1">//</span>
        <span>Visitas</span>
        <span className="mx-1">//</span>
        <span className="font-semibold text-blue-600">Agendar una visita</span>
      </nav>

      {/* Formulario Principal */}
      <main className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Agendar una Visita</h2>

        <form className="space-y-6">
          {/* Campo: Código de la propiedad */}
          <div>
            <label htmlFor="codigoPropiedad" className="block text-sm font-medium text-gray-700 mb-1">
              Código de la propiedad
            </label>
            <input
              type="text"
              id="codigoPropiedad"
              name="codigoPropiedad"
              placeholder="abcd1234"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            />
          </div>

          {/* Campo: Identificador del cliente */}
          <div>
            <label htmlFor="identificadorCliente" className="block text-sm font-medium text-gray-700 mb-1">
              Identificador del cliente
            </label>
            <input
              type="text"
              id="identificadorCliente"
              name="identificadorCliente"
              placeholder="efgh5678"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            />
          </div>

          {/* Campos: Fecha y Horario (en fila para sm+ pantallas) */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
            {/* Campo: Fecha */}
            <div className="flex-1">
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha
              </label>
              <input
                type="text" // Usado para mantener el formato placeholder (dd/mm/aaaa)
                id="fecha"
                name="fecha"
                placeholder="dd/mm/aaaa"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              />
            </div>

            {/* Campo: Horario */}
            <div className="flex-1">
              <label htmlFor="horario" className="block text-sm font-medium text-gray-700 mb-1">
                Horario
              </label>
              <input
                type="text" // Usado para mantener el formato placeholder (hh:mm)
                id="horario"
                name="horario"
                placeholder="hh:mm"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
              />
            </div>
          </div>

          {/* Botones de Navegación */}
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Atrás
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Siguiente
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AgendarVisitaForm;