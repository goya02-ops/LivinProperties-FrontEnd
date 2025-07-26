export default function SalesPage() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Ventas</h1>
        <button className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Nueva venta</button>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Inmueble</th>
              <th className="p-2">Cliente</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>PH en Caballito</td>
              <td>María López</td>
              <td>Reservado</td>
              <td>
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600">Finalizar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }