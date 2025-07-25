import { useState } from 'react';

export default function ChatPage() {
  const [mensajes, setMensajes] = useState([
    { de: 'agente', texto: 'Hola, ¿en qué puedo ayudarte?' },
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (nuevoMensaje.trim()) {
      setMensajes([...mensajes, { de: 'usuario', texto: nuevoMensaje }]);
      setNuevoMensaje('');
      // Simulación de respuesta
      setTimeout(() => {
        setMensajes((prev) => [...prev, { de: 'agente', texto: 'Gracias por tu mensaje. Te responderé pronto.' }]);
      }, 1000);
    }
  };

  return (
    <div class="max-w-xl mx-auto px-4 py-8">
      <h1 class="text-xl font-bold mb-4 text-indigo-600">Chat con el agente</h1>
      <div class="border rounded-md p-4 h-96 overflow-y-auto bg-gray-50">
        {mensajes.map((msg, idx) => (
          <div
            key={idx}
            class={`mb-2 ${msg.de === 'usuario' ? 'text-right' : 'text-left'}`}
          >
            <span
              class={`inline-block px-3 py-2 rounded-lg ${
                msg.de === 'usuario'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border'
              }`}
            >
              {msg.texto}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={enviarMensaje} class="mt-4 flex">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          class="flex-grow px-3 py-2 border rounded-l-md"
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          class="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
