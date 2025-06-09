import img from '../../assets/img.jpg'

export function Home() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>William</h1>
      <img src={img} alt="" />
    </div>
  )
}
