export default function PropertyDocumentsPage() {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Documentación del Inmueble</h1>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Escritura.pdf <button className="ml-2 text-blue-500 hover:underline">Descargar</button></li>
          <li>Planos.pdf <button className="ml-2 text-blue-500 hover:underline">Descargar</button></li>
          <li>Impuestos al día.pdf <button className="ml-2 text-blue-500 hover:underline">Descargar</button></li>
        </ul>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Subir nuevo documento</button>
      </div>
    );
  }