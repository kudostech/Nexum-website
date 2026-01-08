import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=''>
      {/* when on mobile */}
      <div className=' mx-15 flex justify-between md:hidden'>

        <div className='flex items-center' >
          <Link to="/" className=' gap-1 flex mt-10'>
            <img className='w-6' src={logo} alt="" />
            <p className='text-white font-bold' >NEXUM</p>
          </Link>
        </div>

        <div className="text-white cursor-pointer mt-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )
          }
        </div>
      </div>
      {menuOpen && (
  <ul className="md:hidden text-xl mt-15 items-center flex flex-col gap-10 text-white font-semibold px-5">
    <li><a href="">About</a></li>
    <li><a href="">Features</a></li>
    <li><a href="">Team</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Tokens</a></li>

  </ul>
)}

      {/* when on tablet */}
      <div className=' hidden md:flex lg:hidden items-center  ' >
        <Link to="/" className='gap-1  mt-10 flex ml-5 '>
          <img className='w-6' src={logo} alt="" />
          <p className='text-white font-bold'> NEXUM </p>
        </Link>
        <ul className='ml-12 hidden md:flex  mt-10 gap-4
font-light text-white items-center '>
          <li>
            <a href=""> About</a>
          </li>
          <li>
            <a href="">NEXM Token</a>
          </li>
          <li>
            <a href="">Vision</a>
          </li>
          <li>
            <a href="">How to buy</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href=""> Team </a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>

        <div>
          <button className=' hidden md:flex ml-12 text-white border px-4 py-2 rounded-md  mt-10 border-[#04adc0] border-l-[#01C09D] cursor-pointer'> Contact</button>       </div>
      </div>


      {/* when on desktop */}
      <div className=' mx-20  hidden md:hidden justify-between lg:flex items-center  ' >
        <Link to="/" className='gap-1 flex mt-10 '>
          <img className='w-6' src={logo} alt="" />
          <p className='text-white font-bold'> NEXUM </p>
        </Link>

        <ul className='hidden md:flex gap-12
font-light text-white items-center ml-5 mt-10'>
          <li>
            <a href=""> About</a>
          </li>
          <li>
            <a href="">NEXM Token</a>
          </li>
          <li>
            <a href="">Vision</a>
          </li>
          <li>
            <a href="">How to buy</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href=""> Team </a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>

        <Link to="/">
          <button className='hidden md:flex ml-10 text-white border px-4 py-2 rounded-md border-[#04adc0] border-l-[#01C09D] mt-10 cursor-pointer '> Contact</button>
        </Link>
      </div>
    </nav>
  )
};
export default Navbar;



