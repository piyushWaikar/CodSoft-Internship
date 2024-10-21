import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="absolute z-50 top-0 left-0 flex w-full md:px-12 lg:px-24 px-3  items-center gap-4 md:gap-8 lg:h-28 bg-transparent">
        <div className="flex justify-center  flex-col">
            <h1 className=" md:text-xl lg:text-3xl ">CodSoft</h1>
            <h3 className="text-amber-700 md:text-lg lg:text-2xl">Code.Create.Success</h3>
        </div>
        <div className="md:flex hidden md:gap-4  lg:gap-10 items-center md:text-lg lg:text-xl text-[#359381]">
            <Link className={location.pathname === '/' ? 'bg-[#359381] text-white rounded-lg px-2 py-1' : 'bg-transparent'} to='/'>Home</Link>
            <Link className={location.pathname === '/service' ? 'bg-[#359381] text-white rounded-lg px-2 py-1' : 'bg-transparent'} to='/service'>Service</Link>
            <Link className={location.pathname === '/products' ? 'bg-[#359381] text-white rounded-lg px-2 py-1' : 'bg-transparent'} to='/products'>Products</Link>
            {/* <Link className={location.pathname === '/internship' ? 'bg-[#359381] text-white' : 'bg-transparent'} to='/internship'>Internships</Link> */}
            {/* <Link className={location.pathname === '/jobs' ? 'bg-[#359381] text-white' : 'bg-transparent'} to='/jobs'>Jobs</Link> */}
            {/* <Link className={location.pathname === '/verfication' ? 'bg-[#359381] text-white' : 'bg-transparent'} to='/verfication'>Verfication</Link> */}
            <Link className={location.pathname === '/about' ? 'bg-[#359381] text-white rounded-lg px-2 py-1' : 'bg-transparent'} to='/about'>About Us</Link>
            <Link className={location.pathname === '/contact' ? 'bg-[#359381] text-white rounded-lg px-2 py-1' : 'bg-transparent'} to='/contact'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar