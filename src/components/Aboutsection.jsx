import React from "react";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from "../assets/Data.png";
import Vector from "../assets/Vector.png";
import Hrs from "../assets/Hrs.png";

function Aboutsection() {
  return (
    <div>
      <div id="about" className="  md:hidden flex flex-col gap-4 mt-20">
        {" "}
        {/* mobile version */}
        <p className="text-center text-white text-3xl font-semibold px-7">
          {" "}
          Unbanking Shipping
        </p>
        <p className=" text-white text-center px-12 font-extralight">
          Nexum (NEXM) is the utility token that aims to power the multi-billion
          Shipping & Oil industry. NEXM is designed to{" "}
          <span className="font-bold">unbank the shipping industry.</span>
          <br /> <br />
          We signed the first partnership with{" "}
          <span className="font-bold">Nexum Platform</span> to provide funding
          to traders in the shipping and oil industry in a secure and efficient
          way.
        </p>
        <div className="mt-12 items-center text-center text-white">
          <p> Explore our community:</p>
          <div className=" gap-3 cursor-pointer mt-3 flex justify-center">
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <img className=" px-20" src={Data} alt="" />
        <img className="px-20 mt-10" src={Vector} alt="" />
        <p className=" mt-10 text-center text-[#01C09D] ">
          {" "}
          Low: <span className=" font-bold text-xl text-white">$0.14819</span>
        </p>
        <p className="text-center text-[#01C09D] ">
          {" "}
          High: <span className=" font-bold text-xl text-white">$0.16937</span>
        </p>
        <img className="mt-5 pl-33 pr-40 " src={Hrs} alt="" />
        <p className=" pl-33 pr-40 text-xl text-white">$218,929.60 </p>
      </div>

      <div className=" hidden md:flex w-full h-120 md:mt-15  lg:px-15 lg:mt-10 ">
        {/* larger screen version */}

        <div className=" w-1/2 h-full pl-4 ">
          <p className="pl-5 text-white text-4xl font-semibold ">
            {" "}
            Unbanking Shipping
          </p>
          <p className=" mt-5 text-white px-4 font-extralight">
            <span className="font-semibold"> Nexum (NEXM)</span> is the utility
            token that aims to power the multi-billion Shipping & Oil industry.
            NEXM is designed to{" "}
            <span className="font-bold">unbank the shipping industry.</span>
            <br /> <br />
            We signed the first partnership with{" "}
            <span className="font-bold">Nexum Platform</span> to provide funding
            to traders in the shipping and oil industry in a secure and
            efficient way.
          </p>
          <div className="flex text-white gap-2 mt-15 px-4 ">
            <p className="items-center mt-1.5"> Explore our community:</p>
            <div className=" gap-3 cursor-pointer mt-3 flex pb-2 ">
              <FontAwesomeIcon icon={faTelegram} />
             <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              >
  <FontAwesomeIcon icon={faTwitter} />
</a>

            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full justify-end pr-8">
          <div className="flex justify-end mt-2 md:pl-50 lg:pl-100 ">
            <img className="w-120 h-10 lg:h-14" src={Data} alt="" />
          </div>
          <div className="flex justify-end ">
            <img
              className="md:mt-15 md:h-42 lg:w-100
     "
              src={Vector}
              alt=""
            />
          </div>

          <div className="flex h-40 mt-4 ml-32 lg:justify-end  ">
            <div className="  md:w-50 flex flex-col mt-3 gap-0.5 lg:pl-15 lg:mt-5 lg:gap-2">
              <p className=" md:mt-3 text-[#01C09D] lg:mt-2.5 ">
                {" "}
                Low: <span className="  text-white font-medium">$0.14819</span>
              </p>
              <p className="text-[#01C09D] mb-150 lg:mb-30 lg:justify-center ">
                {" "}
                High:<span className=" text-white font-medium">$0.16937</span>
              </p>
            </div>

            <div className=" w-1/2 lg:w-40 lg: h-25 lg:mt-2 flex flex-col gap-2 justify-center">
              <img className=" px-3 " src={Hrs} alt="" />
              <p className=" px-2 text-l text-white font-medium">
                $218,929.60{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
