import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white backdrop-blur">
            <div className="container mx-auto max-w-screen-xl px-4">
                {/* Barra principal */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-16 md:min-h-20">

                    {/* IZQUIERDA */}
                    <div className="flex items-center gap-4 justify-self-start">
                    </div>

                    {/* CENTRO */}
                    <a
                        href="/"
                        className="justify-self-center text-xl md:text-2xl tracking-wider font-['Playfair_Display'] text-neutral-900"
                    >
                        Livin' Properties
                    </a>

                    {/* DERECHA: auth (solo en desktop) */}
                    <div className="hidden md:block justify-self-end">
                        {!isLoggedIn ? (
                        <Link
                            to="/login"
                            className="text-sm tracking-wide text-neutral-900 hover:opacity-80"
                        >
                            Iniciar Sesión
                        </Link>
                        ) : (
                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="text-sm tracking-wide text-neutral-900 hover:opacity-80"
                        >
                            Cerrar Sesión
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}