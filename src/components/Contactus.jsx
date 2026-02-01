import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contactcartoon from "../assets/Contactcartoon.png";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <section>
      <div className=" md:hidden">
        <h1 className=" text-center text-4xl mt-20 text-white">
          {" "}
          Get in Touch
        </h1>
        <form className=" mx-8 mt-10 gap-6 flex flex-col ">
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
          <textarea
            className="border-[#1a3040] px-6 pt-6 p-40 rounded-md border-2  text-[#d0dde6] "
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
        </form>
      </div>

      <div className="hidden md:block mx-10">
        {" "}
        {/* when on medium and larger screens */}
        <h1 className="text-white mt-20 ml-4 text-5xl mb-10"> Get in Touch</h1>
        <div className=" flex  gap- lg:gap-0  ">
          <div className="  w-2/5  ">
            <img
              className="h-90 w-90 "
              src={Contactcartoon}
              alt="Contact Cartoon"
            />
          </div>
          <form className=" w-3/5  ">
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

            <textarea
              className="border-[#1a3040] mt-4 w-full  rounded-md border-2  text-[#d0dde6] h-34  p-2   "
              type="text"
              placeholder="write message..."
            ></textarea>

            <div className=" flex gap-2 mt-4 ">
              <input type="checkbox" />
              <h2 className=" text-white "> Subscribe to our Newsletter</h2>
            </div>
            <div className=" flex gap-2  w-full items-center mt-2 ">
              <input type="checkbox" className="mb-6 lg:mt-6" />
              <div>
                <h2 className=" text-white   w-full ">
                  You have read and agree to NEXM's Terms of Service and Privacy
                  Policy.
                </h2>
              </div>
            </div>
            <button className=" mt-4  text-white border-[#048d91] border-2 py-2 px-40 rounded-xl cursor-pointer ">
              Send
            </button>
          </form>
        </div>  
      </div>
    </section>
  );
}

export default Contactus;
