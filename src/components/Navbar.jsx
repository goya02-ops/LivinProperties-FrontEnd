import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Livin' Properties</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-primary">Inicio</Link>
        <Link to="/propiedades" className="text-gray-600 hover:text-primary">Propiedades</Link>
        <Link to="/contacto" className="text-gray-600 hover:text-primary">Contacto</Link>
      </nav>
    </header>
  )
}
