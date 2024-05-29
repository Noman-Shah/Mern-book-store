import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//React Icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen ] = useState(false);
    const [isSticky, setIsSticky ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    }, [])

    useEffect(() => {
      const handleScroll = () => {

        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }

    }
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

    }, [])
    
    
    // navitems here
    const navItems = [
        {link: "Home", path: '/'},
        {link: "About", path: '/about'},
        {link: "Shop", path: '/shop'},
        {link: "Sell Your Book", path: '/admin/dashboard'},
        {link: "Blog", path: '/blog'},
    ]
    
  return (

    // <header className='w-full bg-transparent fixed top-0 inset-0 transition-all ease-in duration-300'>
    //     <nav className={`py-4 px-4 lg:px-24 ${isSticky? "sticky top-0 inset-0 bg-blue-700" : ""}`}>
    //         <div className='flex justify-between items-center text-base gap-8'>
    //             {/* logo */}
    //             <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' > <FaBlog className='inline-block '/>Books</Link>

    //             {/* nav item for large devices */}
                // <ul className='md:flex space-x-12 hidden'>
                //   {
                //    navItems.map((navItem) => (
                //       <li key={navItem.path}>
                //         <Link className=' block text-base text-black uppercase cursor-pointer hover:text-blue-700' to={navItem.path}>
                //           {navItem.link}
                //         </Link>
                //       </li>
                //     ))
                //   }
                // </ul>

    //             {/* btn for lg devices */}
    //             <div className='space-x-12 hidden lg:flex items-center'>
    //               <button><FaBarsStaggered className='w-5 text-black hover:text-blue-700' /></button>
    //             </div>


    //             {/* menu button for the mobile devices */}
    //             <div className=' md:hidden'>
    //               <button onClick={toggleMenu}>
    //                 {
    //                   isMenuOpen? <FaXmark className='size-5 text-black'/> : <FaBarsStaggered className='size-5 text-black'/>
    //                 }
    //               </button>
    //             </div>

    //         </div>
    //             {/* navitems for sm devices */}
    //             <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-600 ${isMenuOpen ? "block fixed top-0 inset-0" : "hidden"}`}>
    //             {
    //                navItems.map((navItem) => (
                      
    //                     <Link className=' block text-base text-white uppercase cursor-pointer hover:text-blue-700' to={navItem.path}>
    //                       {navItem.link}
    //                     </Link>
    //                 ))
    //               }
    //             </div>

    //     </nav>
    // </header>
<header className='w-full fixed top-0 transition-all ease-in duration-300'>
<nav className={` lg:px-24 ${isSticky? "sticky top-0 inset-0 bg-blue-300" : "bg-base-100"}`}>
    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/">home</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700'  to="/about">About</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/shop">Shop</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/admin/dashboard">Sell your book </Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/blog">Blog</Link></li>
      </ul>
    </div>
    <Link to="/" className='text-2xl font-bold ml-4 text-blue-700 flex items-center gap-2' > <FaBlog className='inline-block '/>Books</Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/">home</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/about">About</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/shop">Shop</Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/admin/dashboard">Sell your book </Link></li>
      <li><Link className='block text-base font-medium text-black uppercase cursor-pointer hover:text-blue-700' to="/blog">Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div tabIndex={0} role="button" className="btn btn-ghost text-blue-800 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
  </div>
</div>
</nav>
</header>
  )
}

export default Navbar   
 