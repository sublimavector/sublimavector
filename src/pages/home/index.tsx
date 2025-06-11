import img from '../../assets/img.jpg'

export function Home() {

  return (
    <div className='flex flex-col items-center justify-center '>
      <h1>William</h1>
      <img className='shadow-xl hover:scale-110 duration-300 rounded-2xl' src={img} alt="" />
    </div>
  )
}
