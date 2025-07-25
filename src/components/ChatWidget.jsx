// src/components/ChatWidget.jsx
import { useState } from 'react'
import { FiMessageCircle, FiX } from 'react-icons/fi'
import ChatBox from './ChatBox.jsx'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón flotante tipo “pill” con ícono + texto */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 
          bg-indigo-600 text-white 
          px-4 py-3 
          rounded-full
          shadow-lg 
          flex items-center 
          space-x-2
          hover:bg-indigo-700 
          transition 
          z-50
        "
      >
        <FiMessageCircle className="h-6 w-6" />
        <span className="font-medium">Chat con el agente</span>
      </button>

      {/* Drawer del chat */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-2 rounded-t-lg">
            <h3 className="font-semibold">Chat con agente</h3>
            <button onClick={() => setOpen(false)}>
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Contenido */}
          <div className="flex-1">
            <ChatBox />
          </div>
        </div>
      )}
    </>
  )
}
