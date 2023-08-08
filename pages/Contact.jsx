import { Link } from '../Link'

export default function ContactPage() {
  const navbarColor = 'bg-[#ffffff] rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'
  const navBar2 = 'rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'

  return (
    <>
      <div className='w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg leading-loose'>
        <div className='gap-10 flex rounded-3xl leading-10 p-1 fixed top-5 bg-[#e8e5e480]'>
          <Link className={navBar2} to='/'>Home</Link>
          <Link className={navBar2} to='/Profile'>Profile</Link>
          <Link className={navbarColor} to='/Contact'>Contact</Link>
        </div>
      </div>

      <br />
      <section className='bg-[#ffffff] flex-auto'>
        <h1 className="text-[#000000] bg-[#ffffff] flex flex-col items-center justify-center h-[60vh] text-6xl text-center font-bold max-lg:text-xl">
          <span className="text-black">Let&apos;s work together.</span>
          <span className="text-[#7f7f7f]">Get in touch.</span>
        </h1>
      </section>


      <br />
      <div className="w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg text-[#000000] h-[40vh]">
        <div className="flex-1 text-xs">
          <h1>© Oli Harris 2023</h1>
        </div>
        <div className="">
          <div className="gap-10 flex rounded-2xl leading-10 text-xs">
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
            <a href="">Mail</a>
          </div>
        </div>
      </div>

    </>
  )
}