import React from 'react'
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Media() {
  return (
    <div >

        <div className=' md:hidden mt-20 mb-20 flex flex-col items-center justify-center'> {/* mobile version */}
            <h3 className="text-white text-center mx-auto mb-4 font-extralight">
                    {" "}
                    Media about us:
                  </h3>
                  <div className=" flex justify-center items-center mb-4  ">
                    <div className=" border-2 bg-white rounded-full w-8 h-8 "></div>
                    <div className=" border-2 bg-white rounded-full w-5 h-8 "></div>
                    <div className=" border-2 bg-white rounded-full w-3 h-8 "></div>
                    <h2 className="text-white ml-1 text-3xl font-bold"> Medium </h2>
                  </div>
        
                  <p className=" text-white text-center  px-28 leading-10">
                    3 Fraser Street #05-25 Duo Tower, Singapore 189352
                  </p>
                  <h3 className="text-white mt-10 text-center"> Official Channels:</h3>
                  <div className=" gap-3 cursor-pointer text-white  flex justify-center mb-10">
                    <a href="http://web.telegram.org/a/"
                              target="_blank" 
                              rel="noopener noreferrer"
                              >
                             <FontAwesomeIcon icon={faTelegram} /></a>    
                                
                                   <a
                                 href="https://x.com"
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 >
                     <FontAwesomeIcon icon={faTwitter} />
                   </a>
                         
                  </div>
                  <a href="http://web.telegram.org/a/"
                              target="_blank" 
                              rel="noopener noreferrer"
                              >
                  <button className=" mx-8 text-white border-[#048d91] hover:bg-[#012947] border-2 py-4 px-16 items-center  rounded-xl cursor-pointer ">
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-xl"> Join our community</p>
                     
                             <FontAwesomeIcon icon={faTelegram} />
                    </div>
                  </button>
                  </a> 
        </div>
        
         <div className=" hidden mt-10  md:flex lg:mx-40"> {/* desktop version */}
          <div className=" m-2 h-30 flex-1 flex  ">
            <div className=" m-2  flex-1 flex-col pt-3 pl-5 lg:pl-0 ">
              <div>
                <div className="flex gap-1 ">
                  <img className="w-6" src={logo} alt="" />
                  <h2 className="text-white font-bold">NEXUM</h2>
                </div>
              </div>
              <div className=" flex mx-auto mt-4 items-center ">
                <div className=" border-2 bg-white rounded-full w-4 h-4 "></div>
                <div className=" border-2 bg-white rounded-full w-3 h-4 "></div>
                <div className=" border-2 bg-white rounded-full w-2 h-4 "></div>
                <h2 className="text-white font-bold"> Medium </h2>
              </div>
            </div>
            <div className=" mt-4  flex-1">
              <p className=" text-white text-center px-2 lg:px-10 ">
                3 Fraser Street #05-25 Duo Tower, Singapore 189352
              </p>
            </div>
          </div>

          <div className=" m-2 h-30 flex flex-1 ">
            <div className=" m-2 flex-1 flex-col">
              <h3 className="text-white text-center md:mt-2 ">
                {" "}
                Official Channels:
              </h3>
              <div className=" gap-3 mt-1 cursor-pointer text-white  flex justify-center items-center">
           <a href="http://web.telegram.org/a/"
                     target="_blank" 
                     rel="noopener noreferrer"
                     >
                    <FontAwesomeIcon icon={faTelegram} /></a>     
                          <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
                
              </div>
               <a href="http://web.telegram.org/a/"
                     target="_blank" 
                     rel="noopener noreferrer"
                     >
              <button className="flex  text-white hover:bg-[#012947] border-[#048d91] m-2 p-2 border-2 items-center mt-2 rounded-xl cursor-pointer gap-2 ">
                <p className="text-white text-nowrap">
                  {" "}
                  Join our community
                </p>
                         
                    <FontAwesomeIcon icon={faTelegram} />  
              </button>
              </a>
            </div>

            <div className=" m-2  flex-1  ">
              <button className=" bg-[#00c09d] flex-col rounded-full w-12 h-10 ml-12 lg:ml-50 py-6 px-6 mt-6 shadow-[0_0_10px_#00c09d] items-center flex justify-center cursor-pointer "
              onClick={ ()=> {
                document.getElementById('nav')?.scrollIntoView(
                  {
                    behavior: 'smooth'
                  }
                )
              }}>
                <FontAwesomeIcon
                  className="item center cursor-pointer"
                  icon={faAngleUp}
                />
                <p className="text-center">Up</p>
              </button>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Media;