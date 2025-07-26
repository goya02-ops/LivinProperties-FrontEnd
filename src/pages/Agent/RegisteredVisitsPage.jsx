// src/pages/Agent/RegisteredVisitsPage.jsx
import React, { useState } from 'react';
import VisitsStatusModal from '../../components/VisitsStatusModal.jsx'; // Importa el modal

const RegisteredVisitsPage = () => {
  const [visits, setVisits] = useState([
    { id: '12345', status: 'Pendiente' },
    { id: '67890', status: 'Confirmada' },
    { id: 'abcde', status: 'Finalizada' },

    // Agregué más visitas de ejemplo para probar el scroll interno
  ]);

  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedVisitForStatus, setSelectedVisitForStatus] = useState(null);

  const handleOpenStatusModal = (visit) => {
    setSelectedVisitForStatus(visit);
    setIsStatusModalOpen(true);
  };

  const handleCloseStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedVisitForStatus(null);
  };

  const handleSaveStatus = (visitId, newStatus) => {
    setVisits(prevVisits =>
      prevVisits.map(visit =>
        visit.id === visitId ? { ...visit, status: newStatus } : visit
      )
    );
    console.log(`Estado de visita ${visitId} actualizado a: ${newStatus}`);
    handleCloseStatusModal();
  };

  const handleBack = () => {
    console.log('Botón Atrás de la lista presionado');
    // Aquí iría la lógica para volver a la página anterior (ej. Home o Dashboard)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4 pb-4 sm:pt-6 sm:pb-6 lg:pt-8 lg:pb-8">

      {/* --- ELIMINADO: Header / Barra Superior y Breadcrumbs / Ruta de Navegación --- */}
      {/* Estos elementos se eliminaron para evitar duplicación si tienes un Header global. */}

      {/* Contenedor Principal de la Lista */}
      <main className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-xl flex flex-col flex-grow overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Visitas Registradas</h2>

        {/* Encabezados de la lista */}
        <div className="w-full grid grid-cols-2 gap-4 p-3 mb-2 rounded-md bg-blue-600 text-white font-semibold flex-shrink-0">
          <span className="text-center">nroVisita</span>
          <span className="text-center">EstadoVisita</span>
        </div>

        {/* Lista de visitas - CON SCROLL INTERNO Y ALTURA MÁXIMA */}
        <div className="w-full space-y-3 overflow-y-auto flex-grow pr-1 custom-scrollbar">
          {visits.map((visit) => (
            <button
              key={visit.id}
              onClick={() => handleOpenStatusModal(visit)} // Abre el modal de estado
              className="w-full grid grid-cols-2 gap-4 items-center p-4 rounded-md shadow-sm bg-gray-50 border border-gray-200
                         hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-shrink-0"
            >
              <span className="text-gray-800 text-center font-medium">{visit.id}</span>
              <span className="text-gray-600 text-center text-sm">{visit.status}</span>
            </button>
          ))}
        </div>

        {/* Botones de Navegación de la LISTA */}
        <div className="flex justify-center w-full mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Atrás
          </button>
          {/* El botón "Seleccionar" de la lista ha sido eliminado, ya que la acción se hace al hacer clic en la fila. */}
        </div>
      </main>

      {/* --- EL MODAL DE SELECCIÓN DE ESTADO (RENDERIZADO CONDICIONALMENTE) --- */}
      {selectedVisitForStatus && (
        <VisitsStatusModal
          isOpen={isStatusModalOpen}
          onClose={handleCloseStatusModal}
          currentVisitId={selectedVisitForStatus.id}
          currentStatus={selectedVisitForStatus.status}
          onSave={handleSaveStatus}
        />
      )}
      {/* ------------------------------------------------------------------- */}
    </div>
  );
};

export default RegisteredVisitsPage;