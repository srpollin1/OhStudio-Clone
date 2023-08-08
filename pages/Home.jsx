import { Link } from '../Link'

export default function HomePage() {
  const navbarColor = 'bg-[#ffffff] rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'
  const navBar2 = 'rounded-3xl leading-normal py-2 w-20 flex items-center justify-center'

  return (
    <>
      <div className='w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg leading-loose z-40'>
        <div className='gap-10 flex rounded-3xl leading-10 p-1 fixed top-5 bg-[#e8e5e480] z-40'>
          <Link className={navbarColor} to='/'>Home</Link>
          <Link className={navBar2} to='/Profile'>Profile</Link>
          <Link className={navBar2} to='/Contact'>Contact</Link>
        </div>
      </div>
      <div>
        <h1 className=
          "text-[#000000] bg-[#ffffff] flex items-center justify-center h-[60vh] text-6xl text-center font-bold max-lg:text-xl">
          A brand and product <br /> designer working with <br /> clients globally
        </h1>

        <section className='bg-[#ffffff] h-[90vh] '>
       
        <div className="text-[#000000] flex justify-center gap-5">
          <h1 className="">Expertise</h1>
          <h1 className="text-[#000000] bg-[#e8e5e480] text-center text-xs leading-normal p-2 w-16 rounded-2xl">
            Branding</h1>
          <h1 className="text-[#000000] bg-[#e8e5e480] text-center text-xs leading-normal p-2 w-16 rounded-2xl">
            Product</h1>
          <h1 className="text-[#000000] bg-[#e8e5e480] text-center text-xs leading-normal p-2 w-35 rounded-3xl whitespace-nowrap">
            Design Systems</h1>
        </div>
        <br />
        <div className="text-[#ffffff]  flex flex-wrap justify-center gap-5">
          <button className="rounded-3xl h-64 w-64" ><img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/16878811/pexels-photo-16878811/free-photo-of-calle-grafiti-los-angeles-autobus.jpeg?auto=compress&cs=tinysrgb&w/640x416"></img></button>
          <button className="rounded-3xl h-64 w-64" ><img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/16234507/pexels-photo-16234507.jpeg?auto=compress&cs=tinysrgb&w/640x416"></img></button>
          <button className="rounded-3xl h-64 w-64" ><img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/17398460/pexels-photo-17398460/free-photo-of-ciudad-vintage-arbol-transporte-publico.jpeg?auto=compress&cs=tinysrgb&w/640x416"></img></button>
          <button className="rounded-3xl h-64 w-64" ><img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/17504550/pexels-photo-17504550/free-photo-of-hombre-brazo-tejanos-en-pie.jpeg?auto=compress&cs=tinysrgb/640x416"></img></button>
          <button className="rounded-3xl h-64 w-64" ><img className="rounded-3xl h-64 w-64" src="https://images.pexels.com/photos/17810517/pexels-photo-17810517/free-photo-of-blanco-y-negro-moda-gente-mujer.jpeg?auto=compress&cs=tinysrgb/640x416"></img></button>
        </div>
        <br />
        <h1 className="text-[#000000] bg-[#ffffff] flex items-center justify-center h-[60vh] text-3xl text-center font-bold bottom-5">
          Lets work together. <br /> Get in touch
        </h1>
        
        <div className="w-full p-4 flex-1 flex items-center justify-center gap-10 rounded-lg text-[#000000]">
                <div className="flex-1 text-xs">
                    <h1>© Oli Harris 2023</h1>
                </div>
                <div className="text-[#ffffff] bg-[#000000] text-center text-xs leading-normal py-2 w-16 fixed bottom-5 rounded-2xl">
                    <a>Shop</a>
                </div>
                <div className="">
                    <div className="gap-10 flex rounded-2xl leading-10 text-xs max-lg:text-xs max-lg:gap-2">
                        <a href="">Instagram</a>
                        <a href="">Linkedin</a>
                        <a href="">Mail</a>
                    </div>
                </div>
            </div>
      </section>
      </div>
    </>
  )
}