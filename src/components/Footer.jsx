
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'


function Footer() {
  return (
    <footer> 
        {/* Footer for mobile screens */}
            <div className=' md:hidden mt-8 h-20 flex flex-col justify-center items-center bg-[#00c09d]  '>
<h3 className=' text-center '> All rights reserved</h3>
<div className=' flex items-center justify-center gap-2 mt-2 '>
    <h3 className=' text-center '> Privacy Policy</h3>
                <div className=" mt-1 bg-black rounded-full w-3 h-3 "></div>
                <h3 > Terms of Use</h3>
</div>
</div>

{/* Footer for larger screens */}
<div  className=' hidden md:flex  items-center justify-center bg-[#00c09d] h-20 gap-4 mt-10'>  
 <div><h2>&copy; {new Date().getFullYear()}, Nexum</h2></div>
 <div><h3> All rights reserved</h3></div>
   <div className=" bg-black rounded-full w-2 h-2 "></div>
   <div><h3> Privacy Policy</h3></div>
   <div className=" bg-black rounded-full w-2 h-2 "></div>
   <div><h3> Terms of Use</h3></div>
 

</div>
    </footer>
  )
}

export default Footer;