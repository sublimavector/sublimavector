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
      <div className='hidden sm:flex w-full justify-center items-center bg-primary-500 rounded-md mt-4'>
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
          <strong className='text-primary-500 font-medium flex items-center justify-center sm:text-xl text-[14px]'>Serviços personalizados:</strong>
          <strong className='text-primary-500 font-medium flex items-center justify-center sm:text-xl text-[14px]'>+55 (88)9.9966-6510</strong>
          <FaWhatsapp className='text-primary-500 size-6' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <FaYoutube className='text-primary-500 size-7' />
          <FiInstagram className='text-primary-500 size-7' />
          <AiFillTikTok className='text-primary-500 size-7' />
        </div>
      </div>
      {/* FIM REDES SOCIAIS */}

      {/* TITULO PRINCIPAL */}
      <h1 className='font-bold text-slate-700 text-center text-xl sm:text-3xl mt-8 mb-6'>ENCONTRE OS MELHORES  VETORES PARA SEUS PRODUTOS PERSONALIZADOS</h1>
      {/* FIM DO TITULO PRINCIPAL */}

      {/* INICIO DO SLIDER */}
      <div className="flex flex-col w-full mx-auto pb-2 rounded bg-primary-500 gap-2">

        {/* INICIO DO BANNER */}
        <div className="relative overflow-hidden rounded-t" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

          <div
            className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {images.map((img, key) => (
              <img
                key={key}
                src={img}
                alt={`Slide ${key + 1}`}
                className="min-w-full h-80 object-cover"
              />
            ))}
          </div>

        </div>
        {/* FIM DO BANNER */}


        {/* INICIO DAS MINIATURAS */}
        <div className="flex w-full justify-center gap-2">
          {images.map((img, key) => (

            <button
              key={key}
              onClick={() => setCurrent(key)}
              className={`w-24 h-12 rounded-md overflow-hidden border-2 transition-all 
                              ${key === current ? "border-blue-500" : "border-transparent"}`}
            >
              <img
                src={img}
                alt={`Miniatura ${key + 1}`}
                className="w-full h-full object-cover"
              />
            </button>

          ))}
        </div>
        {/* FIM DAS MINIATURAS */}

      </div>
      {/* FIM DO SLIDER */}

      {/* TITULO SECUNDARIO */}
      <div className='w-full my-6 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-slate-700 text-2xl'>
          CONFIRA NOSSO CATALOGOS
        </h2>
        <h3 className='font-bold text-slate-700 text-4xl'>
          COM ARTES EXCLUSIVAS!
        </h3>
      </div>
      {/* FIM DO TITULO SECUNDARIO */}

      {/* CODIGO TEMPORARIO: grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 */}

      {/* CARDS POR CATEGORIA */}
      <main className='flex flex-col my-4'>

        {/* CARDS INTECLASSE */}
        <div className='w-full flex flex-col bg-amber-300 py-2 px-4 my-2 '>
          <p className='text-xl font-medium'>INTERCLASSE</p>
          <div className='w-full h-1/2 flex gap-4 '>

            {/* CARD 1 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>
              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 1 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

          </div>
        </div>
        {/* FIM CARDS INTECLASSE */}

        {/* CARDS TERCEIRÃO */}
        <div className='w-full flex flex-col bg-amber-300 py-2 px-4 my-2 '>
          <p className='text-xl font-medium'>TERCEIRÃO</p>
          <div className='w-full h-1/2 flex gap-4 '>

            {/* CARD 1 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>
              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 1 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

            {/* CARD 2 */}
            <section className='flex max-w-2xs gap-1 bg-white my-2 flex-col items-center justify-between rounded-md p-2 cursor-pointer'>

              <img className='flex rounded-md transition-all hover:scale-105 duration-300 object-cover' src={ImgCard} alt="Camisa  01" />
              <p className='font-medium text-slate-900'>CAMISA INTERCLASE DRAGON 2025</p>
              <strong className='font-bold text-xl text-slate-900' >R$ 25,00</strong>

              <div className='flex gap-2'>
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-amber-400' />
                <FaStar className='size-6 text-slate-500' />
                <FaStar className='size-6 text-slate-500' />
              </div>
              <button className='px-2 py-1 my-2 font-medium rounded-md text-white bg-primary-500 cursor-pointer'>ADICIONAR AO CARRINHO</button>
            </section>
            {/* FIM CARD 2 */}

          </div>
        </div>
        {/* FIM CARDS TERCEIRÃO */}


      </main>
      {/* FIM CARDS POR CATEGORIA */}



    </Container >

  )
}
