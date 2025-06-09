import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sublimavector.svg'
import { FiUser } from 'react-icons/fi';

export function Header() {

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo sublimavector" />
        </Link>

        <Link to="/dashboard">
          <FiUser size={24} color="#000" />
        </Link>
      </header>
    </div>
  )
}
