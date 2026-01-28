import React from "react";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contactcartoon from "../assets/Contactcartoon.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
function Contactus() {
  return (
    <section>
      <div className=" md:hidden">
        <h1 className=" text-center text-4xl mt-20 text-white">
          {" "}
          Get in Touch
        </h1>
        <div className=" mx-8 mt-10 gap-6 flex flex-col ">
          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="text"
            placeholder="First name"
          />
          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="text"
            placeholder="Last name"
          />
          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="email"
            placeholder="Enter your email address"
          />
          <input
            className="border-[#1a3040] px-10 pt-6 pb-40 rounded-md border-2  text-[#d0dde6] "
            type="text"
            placeholder="write message..."
          />

          <div className=" flex flex-col">
            <div className=" flex gap-2 ">
              <input type="checkbox" />
              <h2 className=" text-white"> Subscribe to our Newsletter</h2>
            </div>
            <div className=" flex gap-2 items-center ">
              <input className="" type="checkbox" />
              <h2 className=" pt-5 text-white">
                You have read and agree to NEXM's Terms of Service and Privacy
                Policy.
              </h2>
            </div>
          </div>
          <button className=" mx-auto text-white border-[#048d91] border-2 py-4 px-40 rounded-xl cursor-pointer ">
            Send
          </button>

          <h3 className="text-white mt-20 text-center mx-auto font-extralight">
            {" "}
            Media about us:
          </h3>

          <div className=" flex mx-auto items-center ">
            <div className=" border-2 bg-white rounded-full w-8 h-8 "></div>
            <div className=" border-2 bg-white rounded-full w-5 h-8 "></div>
            <div className=" border-2 bg-white rounded-full w-3 h-8 "></div>
            <h2 className="text-white ml-1 text-3xl font-bold"> Medium </h2>
          </div>

          <p className=" text-white px-28 leading-10">
            3 Fraser Street #05-25 Duo Tower, Singapore 189352
          </p>
          <h3 className="text-white mt-10 text-center"> Official Channels:</h3>
          <div className=" gap-3 cursor-pointer text-white  flex justify-center">
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className=" mx-auto text-white border-[#048d91] border-2 py-4 px-16 items-center  rounded-xl cursor-pointer ">
            <div className="flex items-center gap-3">
              <p className="text-xl"> Join our community</p>
              <FontAwesomeIcon icon={faTelegram} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block mx-10">
        {" "}
        {/* when on medium and larger screens */}
        <h1 className="text-white mt-20 ml-4 text-5xl mb-10"> Get in Touch</h1>
        <div className=" flex  gap-6 lg:gap-0  ">
          <div className=" border-[#048d91] flex-1 pt-10 ">
            <img
              className="h-70 w-60 "
              src={Contactcartoon}
              alt="Contact Cartoon"
            />
          </div>
          <div className=" border-[#048d91] flex-1  w-full">
            <div className=" flex gap-4  ">
              <input
                className="border-[#1a3040] p-2 rounded-md border-2 flex-1 text-[#d0dde6] "
                type="text"
                placeholder="First name"
              />
              <input
                className="border-[#1a3040] p-2 rounded-md border-2 flex-1  text-[#d0dde6] "
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              className="border-[#1a3040] p-2 mt-4 w-full rounded-md border-2  text-[#d0dde6] "
              type="email"
              placeholder="Enter your email address"
            />

            <input
              className="border-[#1a3040] px-3 mt-4 w-full pt-2 pb-14  rounded-md border-2  text-[#d0dde6] "
              type="text"
              placeholder="write message..."
            />

            <div className=" flex gap-2 mt-4 ">
              <input type="checkbox" />
              <h2 className=" text-white"> Subscribe to our Newsletter</h2>
            </div>
            <div className=" flex gap-2  w-full ">
              <input type="checkbox" />
              <div>
                <h2 className=" text-white   w-full whitespace-nowrap ">
                  You have read and agree to NEXM's Terms of Service and Privacy
                  Policy.
                </h2>
              </div>
            </div>
            <button className=" mt-4  text-white border-[#048d91] border-2 py-2 px-40 rounded-xl cursor-pointer ">
              Send
            </button>
          </div>
        </div>
       
        <div className=" mt-30  flex">
          <div className=" m-2 h-30 flex-1 flex lg:ml-20 ">
            <div className=" m-2  flex-1 flex-col pt-3 pl-5">
              <div>
                <Link to="/" className="flex gap-1 ">
                  <img className="w-6" src={logo} alt="" />
                  <h2 className="text-white font-bold">NEXUM</h2>
                </Link>
              </div>
              <div className=" flex mx-auto mt-4 items-center ">
                <div className=" border-2 bg-white rounded-full w-4 h-4 "></div>
                <div className=" border-2 bg-white rounded-full w-3 h-4 "></div>
                <div className=" border-2 bg-white rounded-full w-2 h-4 "></div>
                <h2 className="text-white font-bold"> Medium </h2>
              </div>
            </div>
            <div className=" mt-4  flex-1">
                <p className=" text-white text-center px-2 lg:px-16 ">3 Fraser Street #05-25 Duo Tower, Singapore 189352</p>
            </div>
          </div>

          <div className=" m-2 h-30 flex flex-1 ">
            <div className=" m-2 flex-1 flex-col">

<h3 className="text-white text-center md:mt-2 "> Official Channels:</h3>
          <div className=" gap-3 mt-1 cursor-pointer text-white  flex justify-center">
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
            <div className="flex  text-white border-[#048d91] m-2 p-2 border-2 items-center mt-2 rounded-xl cursor-pointer gap-2 ">
              <p className="text-white text-nowrap lg:ml-10"> Join our community</p>
              <FontAwesomeIcon icon={faTelegram} />
            </div>
            </div>



            <div className=" m-2  flex-1  ">
                <div className="  bg-[#00c09d] flex-col rounded-full w-12 h-10 ml-12 lg:ml-50 py-6 px-6 mt-6 shadow-[0_0_10px_#00c09d] items-center flex justify-center cursor-pointer ">
                  <FontAwesomeIcon className="item center cursor-pointer" icon={faAngleUp} />
                  <p className="text-center">Up</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
