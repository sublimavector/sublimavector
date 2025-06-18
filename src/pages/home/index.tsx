import { FiSearch, FiInstagram } from 'react-icons/fi'
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaWhatsapp, FaStar } from "react-icons/fa";
import { Container } from '../../components/container'
import ImgCard from '../../assets/img-card.png'
import { useEffect, useRef, useState } from 'react';

const images = [
  "https://static.wixstatic.com/media/91b47e_c1159892dfb447e3b9efe00a32a0d2e8~mv2.png/v1/fill/w_1265,h_340,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/91b47e_c1159892dfb447e3b9efe00a32a0d2e8~mv2.png",
  "https://images.tcdn.com.br/img/img_prod/1021857/camisas_personalizadas_mes_dos_namorados_somente_frente_655_1_59c8b7d66527fef08d7252774ec73144.jpg",
  "https://www.esthampar.com.br/wp-content/uploads/2025/02/Banner-Catalogo.webp",
  "https://4uniformes.com.br/wp-content/uploads/2024/03/banner-personalizacao.jpg",
  "https://centraldacamiseta.com.br/wp-content/uploads/2025/01/BANNER-CAMISAS.png",
];

export function Home() {

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextSlide, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

    };
  }, [current, paused]);


  const menuItems: string[] = [
    'INTERCLASSE', 'TERCEIRÃO', 'FUTEBOL', '9º ANO',
    'RELIGIÃO', 'ANIMES', 'GRADUAÇÃO', 'FORMANDOS', 'PROFESSOR',
    'CANECAS', 'AGRO', 'FESTAS'
  ];

  return (
    <Container>

      {/* CAMPO DE BUSCA */}
      <section className=' bg-white p-3 rounded-lg w-full max-w-3xl mx-auto sm:hidden flex justify-center items-center gap-2'>
        <input className='w-full bg-white px-2 border-0 outline-none ' type='text' placeholder='Buscar...' />
        <FiSearch size={24} color="#00747C" />
      </section>
      {/* FIM CAMPO DE BUSCA */}

      {/* MENU */}
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
      {/* FIM MENU */}

      {/* REDES SOCIAIS */}
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
      {/* FIM REDES SOCIAIS */}

      {/* TITULO */}
      <h1 className='font-bold text-slate-700 text-center text-xl sm:text-2xl mt-6 mb-6'>ENCONTRE OS MELHORES  VETORES PARA SEUS PRODUTOS PERSONALIZADOS</h1>
      {/* FIM TITULO */}

      <div className="w-full max-w-4xl mx-auto">
        {/* SLIDE WRAPPER */}
        <div
          className="relative overflow-hidden rounded-xl h-64"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className="min-w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>

        {/* MINIATURAS */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${idx === current ? "border-blue-500" : "border-transparent"
                }`}
            >
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* LISTA DE CARDS */}
      <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <section className='w-full bg-white rounded flex-col items-center justify-center'>

          <img className='w-full rounded-lg m-h-72 transition-all hover:scale-105 duration-300 object-cover p-4' src={ImgCard} alt="Camisa  01" />
          <p className='font-bold text-slate-700 text-md text-center  my-1'>CAMISA INTERCLASE DRAGON 2025</p>
          <strong className='font-bold text-2xl text-slate-700 flex justify-center items-center my-2'>R$ 25,00</strong>

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
      </main>
      {/* FIM LISTA DE CARDS */}



    </Container>

  )
}
