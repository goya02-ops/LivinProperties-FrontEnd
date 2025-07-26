// src/pages/RegisteredSalesSearchPage.jsx
import React, { useState } from 'react';

const RegisteredSalesSearchPage = () => {
  const [idInmueble, setIdInmueble] = useState('');

  const handleInputChange = (event) => {
    setIdInmueble(event.target.value);
  };

  const handleBack = () => {
    console.log('Botón "Atrás" presionado');
    // Aquí iría la lógica para volver a la página anterior
  };

  const handleSearch = () => {
    console.log(`Botón "Buscar" presionado. Buscando ID Inmueble: ${idInmueble}`);
    // Aquí iría la lógica para realizar la búsqueda de ventas
  };

  return (
    // El contenedor principal de la página, sin header ni nav locales
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">

      {/* --- ¡NINGÚN HEADER LOCAL NI BREADCRUMBS EN ESTE COMPONENTE! --- */}
      {/* Solo se renderizará el contenido principal y los botones. */}
      {/* ------------------------------------------------------------- */}

      {/* Contenedor Principal de Búsqueda */}
      <main className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center justify-center min-h-[300px]">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Buscar Venta Registrada</h2>

        {/* Campo de búsqueda */}
        <div className="w-full mb-8">
          <label htmlFor="idInmueble" className="block text-sm font-medium text-gray-700 mb-1">
            ID Inmueble
          </label>
          <input
            type="text"
            id="idInmueble"
            name="idInmueble"
            placeholder="idInmueble"
            value={idInmueble}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
          />
        </div>

        {/* Botones de Navegación */}
        <div className="flex justify-between w-full mt-8 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={handleSearch}
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Buscar
          </button>
        </div>
      </main>
    </div>
  );
};

export default RegisteredSalesSearchPage;