import { Link } from 'react-router-dom';
import logoLPtrans from '../assets/logoLPtrans.png';
export default function Header() {
  return (
    <header class="bg-gray-100 py-4 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="max-w-[150px]">    
            <Link to="/" className = "flex items-center">
              <img src = { logoLPtrans } 
              alt = "Logo LivinProperties" 
              classname = "h-[30px] w-auto mr-2 hover:opacity-80 transition"/>
            </Link>
        </div>
        <nav class="space-x-6">
          <a href="/login" class="text-gray-700 hover:text-indigo-600">Ingresar</a>
          <a href="/registro" class="text-gray-700 hover:text-indigo-600">Registrarse</a>
        </nav>
      </div>
    </header>
  );
}
