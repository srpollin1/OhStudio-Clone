import { Link } from '../Link'

export default function ProfilePage() {
  const navbarColor = 'bg-[#ffffff] rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'
  const navBar2 = 'rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'

  return (
    <>
      <div className='w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg leading-loose'>
        <div className='gap-10 flex rounded-3xl leading-10 p-1 fixed top-5 bg-[#e8e5e480] z-40'>
          <Link className={navBar2} to='/'>Home</Link>
          <Link className={navbarColor} to='/Profile'>Profile</Link>
          <Link className={navBar2} to='/Contact'>Contact</Link>
        </div>
      </div>
      <section className='bg-[#ffffff]'>
        <h1 className="text-[#000000] bg-[#ffffff] flex items-center justify-center h-[60vh] text-3xl text-center font-bold">
          Hey 👋🏼 I&apos;m Oli
        </h1>
      </section>
      <div className='flex items-center justify-center gap-10'>
        <img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/17810517/pexels-photo-17810517/free-photo-of-blanco-y-negro-moda-gente-mujer.jpeg?auto=compress&cs=tinysrgb"></img>
        <img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/17810517/pexels-photo-17810517/free-photo-of-blanco-y-negro-moda-gente-mujer.jpeg?auto=compress&cs=tinysrgb"></img>
      </div>

      <br />
      <div className='h-[10vh]'></div>
      <div className="text-[#000000] flex justify-center gap-5 ">
        <h1 className="text-[#000000] bg-[#e8e5e480] text-center text-xs leading-normal p-2 w-35 rounded-3xl whitespace-nowrap">
          About</h1>
      </div>


      <h1 className=
        "text-[#000000] bg-[#ffffff] flex items-center justify-center text-3xl text-center font-bold max-lg:text-xl ">
        A freelance designer based in the UK. <br /> I combine my experience in product and <br /> brand to solve problems, tell stories, and <br /> create compelling experiences.
      </h1>

      <br />
      <div className='h-[10vh]'></div>

      <div className="text-[#000000] flex justify-center gap-5 ">
        <h1 className="text-[#000000] bg-[#e8e5e480] text-center text-xs leading-normal p-2 w-35 rounded-3xl whitespace-nowrap">
          Experience</h1>
      </div>

      <h1 className=
        "text-[#000000] bg-[#ffffff] flex items-center justify-center text-3xl text-center font-bold max-lg:text-xl">
        Where I&apos;ve worked
      </h1>


      <br />
      <section className='bg-[#ffffff] flex-auto'>
        <h1 className="text-[#000000] bg-[#ffffff] flex flex-col items-center justify-center h-[60vh] text-6xl text-center font-bold max-lg:text-xl">
          <span className="text-black">Let&apos;s work together.</span>
          <span className="text-[#7f7f7f]">Get in touch.</span>
        </h1>
      </section>





      <div className="w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg text-[#000000]">
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