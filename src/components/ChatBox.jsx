// src/components/ChatBox.jsx
import { useState, useRef, useEffect } from 'react';

export default function ChatBox() {
  const [mensajes, setMensajes] = useState([
    { de: 'agente', texto: 'Hola, ¿en qué puedo ayudarte?' }
  ]);
  const [texto, setTexto] = useState('');
  const scrollRef = useRef();

  // Hacer scroll al último mensaje
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  const enviar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setMensajes((m) => [...m, { de: 'usuario', texto }]);
    setTexto('');
    setTimeout(() => {
      setMensajes((m) => [...m, { de: 'agente', texto: 'Gracias por tu mensaje. Te respondo pronto.' }]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        {mensajes.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.de === 'usuario' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg ${
                m.de === 'usuario'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {m.texto}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <form onSubmit={enviar} className="flex border-t">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí tu mensaje..."
          className="flex-grow px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
