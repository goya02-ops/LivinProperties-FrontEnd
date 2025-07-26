export default function VisitsPage() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Visitas agendadas</h1>
        <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Nueva visita</button>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Inmueble</th>
              <th className="p-2">Cliente</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Hora</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>Depto en Palermo</td>
              <td>Juan Pérez</td>
              <td>27/07/2025</td>
              <td>14:00</td>
              <td>Pactada</td>
              <td>
                <button className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600">Confirmar</button>
                <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }