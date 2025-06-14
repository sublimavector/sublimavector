import { FiSearch, FiInstagram } from 'react-icons/fi'
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaWhatsapp, FaStar } from "react-icons/fa";
import { Container } from '../../components/container'
import ImgCard from '../../assets/img-card.png'

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

      <div className='flex justify-between items-center mt-1'>
        <div className='flex items-center justify-center gap-1'>
          <h2 className='text-primary-500 font-bold sm:text-xl text-[14px]'>Serviços personalizados: +55 (88)9.9966-6510</h2>
          <FaWhatsapp className='text-primary-500 size-7' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <FaYoutube className='text-primary-500 size-7' />
          <FiInstagram className='text-primary-500 size-7' />
          <AiFillTikTok className='text-primary-500 size-7' />
        </div>
      </div>

      <h1 className='font-bold text-center text-xl sm:text-2xl mt-6 mb-6'>ENCONTRE OS MELHORES  VETORES PARA SEUS PRODUTOS PERSONALIZADOS</h1>

      <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <section className='w-full bg-white rounded'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
        <section className='w-full bg-white rounded-lg'>
          <img className='w-full rounded-lg mb-2 m-h-72 transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-xl text-center  mt-1 mb-2'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700'>R$ 25,00</strong>
          <div className='flex flex-col items-center gap-2 bg-primary-500 p-2 rounded-b-lg'>
            <div className='flex gap-2'>
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6 text-amber-400' />
              <FaStar className='size-6' />
              <FaStar className='size-6' />
            </div>
            <button className='w-full bg-second-500 text-white px-2 py-2 text-base rounded-lg font-medium'>ADICIONAR AO CARRINHO</button>
          </div>
        </section>
      </main>

    </Container>

  )
}
