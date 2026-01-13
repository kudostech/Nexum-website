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
    <nav>
      {/* when on mobile */}
      <div className=' md:hidden lg:hidden mx-10 flex justify-between '>

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
        <div className="fixed inset-0 z-50 bg-[#01192b] md:hidden">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>

        </div>
      )};

 {/* When on tablet */}

<div className="hidden lg:hidden  md:flex w-full bg-transparent">

  <div className="
    w-full max-w-6xl mx-auto
    flex items-center  justify-around
  ">

    {/* Logo */}
    <Link to="/" className="flex items-center gap-2 ml-">
      <img className="w-6" src={logo} alt="Nexum logo" />
      <span className="text-white font-bold text-lg">NEXUM</span>
    </Link>

    {/* Nav Links */}
    <ul className="
      flex items-center
      gap-10
      text-white text-sm font-light

    ">
      <li><a href="">About</a></li>
      <li><a href="">Token</a></li>
      <li><a href="">Vision</a></li>
      <li><a href="">Buy</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Team</a></li>
    </ul>

    {/* CTA */}
    <button className="
      px-4 py-2
      text-sm text-white
      border rounded-md
      border-[#04adc0]
      hover:bg-[#01C09D]
      transition
      
    ">
      Contact
    </button>

  </div>
</div>


      {/* when on desktop */}
      <div className=' hidden md:hidden  lg:flex items-center justify-between mx-20  ' >
        <Link to="/" className='gap-1 flex mt-10 '>
          <img className='w-6' src={logo} alt="" />
          <p className='text-white font-bold'> NEXUM </p>
        </Link>

        <ul className=' flex gap-12
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
          <button className='hidden md:flex text-white border px-4 py-2 rounded-md border-[#04adc0] border-l-[#01C09D] mt-10 cursor-pointer '> Contact</button>
        </Link>
      </div>
    </nav>



  )
};
export default Navbar;



