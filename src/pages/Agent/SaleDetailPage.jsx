// src/pages/PropertySaleDetailPage.jsx
import React from 'react';

const PropertySaleDetailPage = () => {

  const handleDocumentationClick = () => {
    console.log('Botón "Documentación" presionado');
    // Aquí iría la lógica para acceder a la documentación del inmueble
  };

  const handleFinalizeSale = () => {
    console.log('Botón "Finalizar venta" presionado');
    // Aquí iría la lógica para finalizar el proceso de venta
  };

  return (
    // El contenedor principal de la página, sin header ni nav locales
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">

      {/* --- ¡NINGÚN HEADER LOCAL NI BREADCRUMBS EN ESTE COMPONENTE! --- */}
      {/* Solo se renderizará el contenido principal y los botones. */}
      {/* ------------------------------------------------------------- */}

      {/* Título de la página / ID del Inmueble */}
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">idCasa</h2>
      </div>

      {/* Contenedor Principal de Detalles del Inmueble */}
      <main className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center justify-center">

        {/* Sección de Bloques de Contenido */}
        <div className="w-full grid grid-cols-3 gap-4 mb-8">
          {/* Bloque principal izquierdo (ej. Imagen grande) */}
          <div className="col-span-2 h-48 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center text-gray-400">
            Imagen/Detalles Principales
          </div>
          {/* Bloque grande derecho (ej. Descripción) */}
          <div className="col-span-1 h-48 border border-gray-300 rounded-md bg-gray-50 p-2 flex flex-col justify-around text-gray-400 text-sm">
            <span>Línea de texto 1</span>
            <span>Línea de texto 2</span>
            <span>Línea de texto 3</span>
            <span>Línea de texto 4</span>
          </div>

          {/* Bloques pequeños debajo del principal izquierdo */}
          <div className="col-span-1 h-20 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            Bloque Pequeño 1
          </div>
          <div className="col-span-1 h-20 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            Bloque Pequeño 2
          </div>
          {/* Bloques pequeños en la columna central */}
          <div className="col-span-1 h-20 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
            Bloque Pequeño 3
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex justify-between w-full mt-8 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleDocumentationClick}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Documentación
          </button>
          <button
            type="button"
            onClick={handleFinalizeSale}
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Finalizar venta
          </button>
        </div>
      </main>
    </div>
  );
};

export default PropertySaleDetailPage;