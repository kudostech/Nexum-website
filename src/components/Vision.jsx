import React from 'react'

function Vision() {
  return (
    <div id='vision'> 
        {/* when on mobile */}
        <div className=' md:hidden bg-[#012947] rounded-xl h-120 mx-18 mt-10' >
           <p className='text-center text-white pt-6 text-3xl'> Vision </p>
       
         <p className=' text-white text-center px-4 mt-4 font-light'>
            Our vision is for Nexum Token to <br />become the main element of <br /> tokenization in shipping and oil <br />transactions worldwide. We aim <br /> to provide alternative financial <br /> tools and to introduce DeFi <br /> driving innovation in the shipping <br />industry.
<br /><br/> <br /> Industry adoption, driven by <br /> clear economic benefits and  <br />utility, is the main factor <br />influencing the success of a <br /> token. We have clear plan on <br /> how to achieve this.

         </p>
        </div>

{/* when on large screen */}
        <div className='hidden md:flex flex-col  bg-[#012947] rounded-xl h-80 mx-18 lg:mx-50 mt-10' >
           <p className='text-center text-white pt-10 text-3xl'> Vision </p>
       
         <p className=' text-white text-center px-4 mt-4 font-light'>
            Our vision is for Nexum Token to become the main element of <br /> tokenization in shipping and oil transactions worldwide. We <br /> aim to provide alternative financial tools and to introduce <br /> DeFi driving innovation in the shipping industry.
<br /> <br /> <span className='font-normal'> Industry adoption, driven by clear economic benefits and  <br />utility, is the main factor influencing the success of a token. <br /> We have clear plan on  how to achieve this.</span>
         </p>
        </div>
    </div>
      
        
   
  )
}

export default Vision