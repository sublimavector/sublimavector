import { FiSearch } from 'react-icons/fi'
import { Container } from '../../components/container'

export function Home() {

  const menuItems: string[] = [
    'INTERCLASSE', 'TERCEIRÃO', 'FUTEBOL', '9º ANO',
    'RELIGIÃO', 'ANIMES', 'GRADUAÇÃO', 'FORMANDOS', 'PROFESSOR',
    'CANECAS', 'AGRO', 'FESTAS'
  ];

  return (
    <Container>
      <section className=' bg-white p-3 rounded-lg w-full max-w-3xl mx-auto sm:hidden flex justify-center items-center gap-2'>
        <input className='w-full bg-white px-2 border-0 outline-none ' type='text' placeholder='Buscar...' />
        <FiSearch size={24} color="#00747C" />
      </section>

      <div className='hidden sm:flex w-full justify-center items-center bg-primary-500 rounded-xl mt-4'>
        <nav className="flex w-full items-center justify-center p-3">
          <ul className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block rounded border-b-gray-100 hover:bg-gray-200
                              hover:text-primary-500 text-center py-1 shadow text-white font-medium transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </Container>

  )
}
