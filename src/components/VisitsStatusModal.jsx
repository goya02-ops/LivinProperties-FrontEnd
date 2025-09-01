// src/components/VisitsStatusModal.jsx
import React, { useState, useEffect } from 'react';

// Asegúrate de que el nombre del componente aquí sea 'VisitsStatusModal'
const VisitsStatusModal = ({ isOpen, onClose, currentVisitId, currentStatus, onSave }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  // Sincroniza el estado interno del modal si el currentStatus externo cambia
  useEffect(() => {
    setSelectedStatus(currentStatus);
  }, [currentStatus]);

  // Opciones de estado disponibles
  const statusOptions = ['Cancelada', 'Pactada', 'Realizada'];

  if (!isOpen) return null; // Si el modal no está abierto, no renderizar nada

  return (
    // Overlay oscuro de fondo del modal
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      {/* Contenido del modal */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-sm flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Estado (Visita: {currentVisitId})</h2>

        {/* Opciones de estado */}
        <div className="w-full space-y-3 mb-8">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`w-full p-4 rounded-md shadow-sm border
                          ${selectedStatus === status
                            ? 'bg-blue-600 border-blue-700 text-white'
                            : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-300'
                          }
                          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span className="font-medium">{status}</span>
            </button>
          ))}
        </div>

        {/* Botones de acción del modal */}
        <div className="flex justify-between w-full pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose} // Cierra el modal sin guardar
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={() => onSave(currentVisitId, selectedStatus)} // Guarda y cierra
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitsStatusModal; // <--- ¡Asegúrate de que esta exportación sea 'VisitsStatusModal' (plural)!