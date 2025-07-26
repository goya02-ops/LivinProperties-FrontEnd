// src/pages/NewSalePage.jsx
import React from 'react';

const NewSalePage = () => {

  const handleBuyerDataClick = () => {
    console.log('Botón "Datos del comprador" presionado');
    // Aquí iría la lógica para navegar a un formulario de datos del comprador
  };

  const handleAgentDataClick = () => {
    console.log('Botón "Datos del agente" presionado');
    // Aquí iría la lógica para navegar a un formulario de datos del agente
  };

  const handlePropertyDataClick = () => {
    console.log('Botón "Datos del inmueble" presionado');
    // Aquí iría la lógica para navegar a un formulario de datos del inmueble
  };

  const handleBack = () => {
    console.log('Botón "Atrás" presionado');
    // Aquí iría la lógica para volver a la página anterior
  };

  const handleStartSale = () => {
    console.log('Botón "Iniciar venta" presionado');
    // Aquí iría la lógica para iniciar el proceso de venta o navegar al siguiente paso
  };

  return (
    // El contenedor principal de la página, sin header ni nav locales
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">

      {/* --- ¡NINGÚN HEADER LOCAL NI BREADCRUMBS EN ESTE COMPONENTE! --- */}
      {/* Solo se renderizará el contenido principal y los botones. */}
      {/* ------------------------------------------------------------- */}

      {/* Contenedor Principal del Formulario/Opciones */}
      <main className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center justify-center min-h-[400px]"> {/* min-h para que no se vea demasiado pequeño si no hay contenido */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Nueva Venta</h2>

        {/* Botones de Datos */}
        <div className="w-full space-y-4 mb-8">
          <button
            type="button"
            onClick={handleBuyerDataClick}
            className="w-full p-4 rounded-md shadow-sm border border-gray-300 text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Datos del comprador
          </button>
          <button
            type="button"
            onClick={handleAgentDataClick}
            className="w-full p-4 rounded-md shadow-sm border border-gray-300 text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Datos del agente
          </button>
          <button
            type="button"
            onClick={handlePropertyDataClick}
            className="w-full p-4 rounded-md shadow-sm border border-gray-300 text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Datos del inmueble
          </button>
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
            onClick={handleStartSale}
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Iniciar venta
          </button>
        </div>
      </main>
    </div>
  );
};

export default NewSalePage;