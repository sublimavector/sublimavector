import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sublimavector.svg'
import { FiLogIn, FiUser } from 'react-icons/fi';

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className='w-full flex items-center justify-center h-16 bg-primary-500 drop-shadow mb-4'>
      <header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
        <Link to="/">
          <img className='size-48' src={logo} alt="Logo sublimavector" />
        </Link>

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
      </header>
    </div>
  )
}
