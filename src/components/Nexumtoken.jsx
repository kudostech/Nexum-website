import React from 'react'
import Bulletin from '../assets/Bulletin.png'
import logo from '../assets/logo.png'
import pegasus from '../assets/pegasus.png'
import shipoil from '../assets/shipoil.png'
import stic from '../assets/stic.png'
import fueltrade from '../assets/fueltrade.png'
import marasco from '../assets/marasco.png'
function Nexumtoken() {
  return (
    <div id='token'>
      <div className='mt-20 md:hidden '> {/* when on mobile */}
        <p className='text-center text-white text-4xl font-bold'>NEXM Token</p>
        <p className='font-extralight text-center mt-5 text-white'>
          We created NEXM utility token <span className='font-bold'>to power <br />the whole ecosystem as well as to <br /> unbank the Shipping & Oil industry. <br /></span> Traders, suppliers and other players need <br />to utilise the token if they require to:
        </p>
        <div className='mt-4 flex flex-col gap-4'>


          <p className='text-center px-10 text-white mt-5'>We aim to achieve that by <br /> partnering with Nexum Platform</p>
        </div>

        <div className='mt-10 flex items-center '>
          <img className=' ml-40 w-10 ' src={logo} alt="" />
          <p className='  leading-3 text-white ml-2 font-bold text-2xl mt-2'> NEXUM <br /> <span className='font-light text-xs'>PLATFORM</span></p>
        </div>

        <p className=' text-[#01F0C4] mt-10 text-center'>AND ITS PARTNERS:</p>

        <div className=' items-center flex flex-col gap-4 mt-6'>
          <img className='w-20 h-8' src={pegasus} alt="-" />
          <img className='w-20 h-8' src={shipoil} alt="-" />
          <img className='w-20 h-8' src={stic} alt="-" />
          <img className='w-20 h-8' src={fueltrade} alt="-" />
          <img className='w-20 h-8' src={marasco} alt="-" />
        </div>
      </div>


      {/* when on large screen */}
      <div className='hidden md:flex flex-col'>
        <div>
          <p className=' text-white text-3xl mt-10 font-bold text-center'> NEXM Token </p>
        </div>

        <div className=' mt-10 flex w-full h-94 gap-6 px-10 lg:gap-0 lg:px-0'>
          <div className='  flex-1 lg:ml-80 '>
            <p className='font-extralight mt-5 text-white'>
              We created NEXM utility token <span className='font-bold'>to power <br />the whole ecosystem as well as to <br /> unbank the Shipping & Oil industry. <br /></span> Traders, suppliers and other players need <br />to utilise the token if they require to:
            </p>
            <div className='mt-6 flex flex-col gap-6'>
              <div className=' flex gap-4'>
                <img className='h-6' src={Bulletin} alt="-" />
                <p className='text-white font-light'>Get access to the data hub</p>
              </div>
              <div className=' flex gap-4'>
                <img className='h-6' src={Bulletin} alt="-" />
                <p className='text-white font-light'>Receive finances for worldwide shipping</p>
              </div>
              <div className=' flex mr-2 gap-4'>
                <img className='h-6' src={Bulletin} alt="-" />
                <p className='text-white font-light'>Secure and instant multi-currency global payments</p>
              </div>
            </div>
          </div>

          <div className=' flex-1 lg:mr-50 '>
            <p className='text-center px-10 text-white mt-6'>We aim to achieve that by <br /> partnering with Nexum Platform</p>
            <div className='mt-8 px-24 flex lg:pl-30 '>
              <img className=' w-10 ' src={logo} alt="" />
              <p className='  leading-3 text-white ml-2 font-bold text-2xl mt-2'> NEXUM <br /> <span className='font-light text-xs'>PLATFORM</span></p>
            </div>
            <p className=' text-[#01F0C4] mt-10 text-center'>AND ITS PARTNERS:</p>

            <div className=' ml-10 items-center flex gap-4 mt-10 lg:ml-14'>
              <img className='w-20 h-8' src={pegasus} alt="-" />
              <img className='w-20 h-8' src={shipoil} alt="-" />
              <img className='w-20 h-8' src={stic} alt="-" />
            </div>
            <div className=' ml-20 items-center flex gap-4 mt-6 lg:ml-24'>
              <img className='w-20 h-8' src={fueltrade} alt="-" />
              <img className='w-20 h-8' src={marasco} alt="-" />
            </div>
          </div>
        </div>
      </div>




    </div>

  )
}

export default Nexumtoken;
