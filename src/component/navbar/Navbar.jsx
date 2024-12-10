import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navgate=useNavigate();
  const user=JSON.parse(localStorage.getItem('user'));
  console.log(user)

  const logout=()=>{
    localStorage.clear(user);
    navgate("/login");
  }
  return (
    <div className='top-0 sticky z-50'>
      <div className="main bg-[#06b6d4] text-black py-2 md:flex justify-between items-center lg:px-24 md:px-20">
        {/* left */}
        <div className="left">
           <h1 className='font-bold text-xl flex justify-center pb-1 cursor-pointer'>LOGO</h1>
        </div>
        {/* right */}
        <div className="right flex justify-center md:gap-8">
          <ul className='flex gap-5 items-center '>
          <Link><li className='cursor-pointer  font-semibold'>Home</li></Link>
          <Link><li className='cursor-pointer  font-semibold'>About</li></Link>
          <Link><li className='cursor-pointer  font-semibold'>Contact</li></Link>
          <Link><li className='cursor-pointer  font-semibold hidden md:block'>Services</li></Link>          
          </ul>
          {user && <button onClick={logout} className='md:py-2 md:px-4 py-1 px-3 cursor-pointer rounded-xl bg-red-600 text-white font-bold'>Logout</button>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
