import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sublimavector.svg';
import { FiLogIn, FiUser, FiShoppingCart, FiSearch } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";

export function Header() {
  const signed = true;
  const loadingAuth = false;
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  return (
    <div>

      {/* INICIO MENU MOBILE */}
      <div className={`
        absolute z-50 w-full 
        flex-col items-center px-3 py-2 bg-white shadow-xl
        transform transition-all duration-300 origin-top
        ${menuAberto ? 'scale-y-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'} 
        `}
      >
        <button
          onClick={() => setMenuAberto(false)}
          className='text-3xl font-bold mt-4' >X</button>
        <nav className='flex flex-col mt-8 gap-5 w-full'>
          <a
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            href="#"
          >Aluguel</a
          >
          <a
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            href="#"
          >Compras</a
          >
          <a
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            href="#"
          >Serviços</a
          >
          <a
            className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            href="#"
          >Contato</a
          >
        </nav>
      </div >

      {/* FIM MENU MOBILE */}


      < div className='w-full flex items-center justify-center h-16 bg-primary-500 drop-shadow mb-4' >
        <header className='flex flex-row w-full max-w-7xl items-center justify-between px-4 mx-auto'>
          <Link to="/">
            <img className='size-80 sm:size-48 md:size-48 lg:size-48  ' src={logo} alt="Logo sublimavector" />
          </Link>

          <div className='flex w-full max-w-xs lg:max-w-[50%] bg-white rounded px-3 py-2 mx-3'>
            <FiSearch size={24} color="#00747C" />
            <input className='w-full bg-slate-50 px-2 border-0 outline-none ' type='text' placeholder='Buscar...' />
          </div>

          <div className='flex items-center gap-5'>
            {!loadingAuth && signed && (
              <Link to="/dashboard">
                <div className='border-2 border-white rounded-full p-1'>
                  <FiUser size={22} color="#fff" />
                </div>
              </Link>
            )}

            {!loadingAuth && !signed && (
              <Link to="/login">
                <div className='border-2 border-white rounded-full p-1'>
                  <FiLogIn size={22} color="#fff" />
                </div>
              </Link>
            )}

            <Link to="/dashboard">
              <FiShoppingCart size={26} color="#fff" />
            </Link>

            <FaBars
              onClick={() => setMenuAberto(true)}
              className='sm:hidden' size={24} color='#fff' />
          </div>
        </header>
      </div >
    </div >
  )
}