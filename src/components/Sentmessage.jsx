import React from 'react'
import sent from '../assets/sent.png'

function Sentmessage({onClose}) {
  return (
   <div>

    <div className=' md:hidden fixed inset-0 flex  justify-center items-center pt-110 pb-3'>
       <section className=' rounded-xl px-3.5 py-12 backdrop-blur-sm bg-[#02223b]/70 flex flex-col gap-10 justify-center items-center'>
    <img className='w-40' src={sent} alt="sent-pop-up" />
        <h1 className='text-white text-xl font-bold'>Message sent
Succesfully</h1>

        <button onClick={onClose} className=' cursor-pointer hover:bg-[#07abc5] text-white border-[#0689a5] border rounded-xl mx-20  py-4 px-20'>
        Done
        </button>
    </section>
    </div>

    <div className=' hidden fixed lg:pt-49 lg:px-54 pt-80 px-18 inset-0 md:block  justify-center items-center '>
 
  <div className='flex rounded-4xl backdrop-blur-sm bg-[#02223b]/80 justify-between items-center  px-10
  0 py-14 gap-10 '>
         <div className='flex-1 justify-center'><img className='w-60' src={sent} alt="sent-pop-up" /></div>
  <div className=' flex-1 gap-10 flex flex-col items-center justify-center '>
          <h1 className= ' text-center text-white text-3xl font-bold'>Message sent
Succesfully</h1>    <button onClick={onClose} className=' cursor-pointer hover:bg-[#07abc5] text-white border-[#0689a5] border rounded-xl  py-4 px-20'>
        Done
        </button>
  </div>
  </div>
   
    </div>
   </div>
  )
}

export default Sentmessage;