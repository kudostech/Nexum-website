import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav className=' mt-10 mx-40'>

      <div className=' flex justify-between '>

        <div className=' flex gap-20'>

          <div className='gap-1 flex items-center'>
            <img className=' w-6 ' src={logo} alt="" />
            <p className='text-white font-bold' >NEXUM</p>
          </div>
          <ul className='flex gap-7
font-light text-white items-center '>
           <a href=""> About</a>
            <a href="">NEXM Token</a>
            <a href="">Vision</a>
            <a href="">How to buy</a>
            <a href="">Blog</a>
            <a href=""> Team </a>
            <a href="">FAQ</a>
          </ul>
        </div>
        <div>
          <button className=' text-white border px-4 py-2 rounded-md border-[#04adc0] border-l-[#01C09D]'> Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
