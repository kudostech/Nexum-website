import React from "react";
import metamask from "../assets/metamask.png";
import ApeSwap from "../assets/ApeSwap.png";
import PancakeSwap from "../assets/PancakeSwap.png";
import QUICKSWAP from "../assets/QUICKSWAP.png";
import Etherscan from "../assets/Etherscan.jpeg";
import polygon from "../assets/polygon.png";
import HTB from "../assets/HTB.png";
import HTBLG from "../assets/HTBLG.png";
import Pdf from "../assets/Pdf.png";
import whitepaper from "../assets/whitepaper.pdf"
function Howtobuy() {
  return (
    <div id="buy">
      <div className=" md:hidden">
        {" "}
        {/* when on mobile */}
        <p className=" text-white text-center mt-10 text-4xl"> How to buy</p>
        <div className=" flex flex-col mt-10 items-center gap-4">
          <div className=" text-white items-center flex  gap-2">
            <img className=" w-6" src={metamask} alt="" />
            <p className="text-l">Metamask</p>
          </div>

          <div className=" text-white items-center flex  gap-2">
            <img className=" w-6" src={ApeSwap} alt="" />
            <p className="text-l text-[#a16552] font-bold ">ApeSwap</p>
          </div>

          <div className=" text-white items-center flex  gap-2">
            <img className=" w-6" src={PancakeSwap} alt="" />
            <p className="text-l  font-bold ">PancakeSwap</p>
          </div>
          <div className=" text-white items-center flex  gap-2 ">
            <img className=" w-6" src={QUICKSWAP} alt="" />
            <p className="text-l">QUICKSWAP</p>
          </div>
        </div>
        <div className=" border cursor-pointer hover:bg-[#012743] border-[#033558] mx-10 rounded-2xl mt-10">
          <h3 className=" text-white font-extralight mt-10 ml-10">
            {" "}
            Token name:
          </h3>
          <h2 className=" text-[rgb(0,240,196)] mt-6 ml-10"> NEXUM TOKEN</h2>
          <div className="flex w-full h-30">
            <div className=" flex-1 mt-2 mx-4 flex-col">
              <h3 className=" text-white font-extralight mt-4 mx-4 ">
                {" "}
                Total Supply:
              </h3>
              <p className="text-[#00f0c4] mx-4 mt-4">5 BILLION</p>
            </div>
            <div className=" flex-1 mt-2 mx-4 flex-col">
              <h3 className=" text-white font-extralight mt-4 mx-4 ">
                {" "}
                Symbol:
              </h3>
              <p className="text-[#00f0c4] mx-4 mt-4">NEXM</p>
            </div>
          </div>
          <h3 className="text-white mx-8 mb-6 "> Contracts:</h3>
          <div className="mx-8 flex flex-col gap-14">
            <div className=" text-white items-center flex  gap-4 ">
              <img className=" w-12" src={Etherscan} alt="" />
              <p className="text-2xl font-medium">
                BscScan
                <br />
                <span className=" text-xs"> A product of Etherscan </span>
              </p>
            </div>
            <div className=" text-white items-center flex  gap-2 ">
              <img className=" w-12" src={Etherscan} alt="" />
              <p className="text-3xl font-light">EtherScan</p>
            </div>

            <div className=" text-white items-center flex mb-10  gap-2 ">
              <img className=" w-12" src={polygon} alt="" />
              <p className="text-3xl font-bold">polygonscan</p>
            </div>
          </div>
        </div>
        <div className=" items-center text-center mx-25 ">
          <img className=" w-64 " src={HTB} alt="" />
        </div>
        <h3 className="text-white text-center mt-10">
          Download our White Paper to learn more
        </h3>
       <a href={whitepaper} download>
         <button
        className=" hover:bg-[#012947] cursor-pointer border-[#04adc0] border flex px-28 py-4  mt-4 ml-8 mb-2 rounded-xl">
            <p className="text-white mr-2">White Paper.pdf</p>
            <img src={Pdf} alt="" />
        </button>
       </a>
      </div>

      {/* when on larger screen  */}
      <div className=" hidden md:block">
        <p className=" text-white text-center mt-10 text-4xl"> How to buy</p>
        <div className=" flex ml-10 mt-10 items-center gap-6 lg:ml-70">
          <div className=" text-white items-center flex  gap-2">
            <img className=" w-10" src={metamask} alt="" />
            <p className="text-xl">Metamask</p>
          </div>

          <div className=" text-white items-center flex  gap-2">
            <img className=" w-10" src={ApeSwap} alt="" />
            <p className="text-xl text-[#a16552] font-bold ">ApeSwap</p>
          </div>

          <div className=" text-white items-center flex  gap-2">
            <img className=" w-10" src={PancakeSwap} alt="" />
            <p className="text-xl  font-bold ">PancakeSwap</p>
          </div>
          <div className=" text-white items-center flex  gap-2 ">
            <img className=" w-10" src={QUICKSWAP} alt="" />
            <p className="text-xl">QUICKSWAP</p>
          </div>
        </div>

        <div className=" border border-[#033558] mx-10 rounded-2xl mt-10 lg:mx-70 lg:px-10">
          <div className=" flex mt-10">
            <div className="  flex-1 ml-10">
              <h3 className="text-white font-light">Token name:</h3>
              <h2 className=" text-[rgb(0,240,196)] mt-3 font-bold text-2xl">
                NEXUM TOKEN
              </h2>
            </div>
            <div className="  flex-1 ">
              <h3 className="text-white font-light">Total supply:</h3>
              <h2 className=" text-[rgb(0,240,196)] mt-3 font-bold text-2xl">
                5 BILLION
              </h2>
            </div>
            <div className="  flex-1 ">
              <h3 className="text-white font-light">Symbol:</h3>
              <h2 className=" text-[rgb(0,240,196)] mt-3 font-bold text-2xl">
                NEXM
              </h2>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-white mx-10 mb-2"> Contracts</h3>
            <div className=" flex">
              <div className="ml-10  flex flex-1 gap-1 items-center mt-2 mb-10">
                <img className="w-6" src={polygon} alt="" />
                <p className="text-xl text-white font-bold">polygonscan</p>
              </div>
              <div className=" flex-1 flex items-center gap-1 mt-2 mb-10">
                <img className="w-6" src={Etherscan} alt="" />
                <p className="text-xl text-white font-bold">BscScan</p>
              </div>
              <div className=" flex-1 items-center gap-1 flex mt-2 mb-10">
                <img className="w-6" src={Etherscan} alt="" />
                <p className="text-xl text-white font-bold">EtherScan</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" items-center text-center ml-34 lg:ml-50 ">
          <img className=" w-4/5 " src={HTBLG} alt="" />
        </div>

         
          <h3 className="text-white text-center ">
          Download our White Paper to learn more
        </h3>
        
        <a href={whitepaper} download>
          <button className=" hover:bg-[#012947] cursor-pointer border-[#04adc0] border mt-4 ml-50 mb-2 rounded-xl lg:ml-114">
          <div className=" flex px-28 py-4 ">
            <p className="text-white mr-2">White Paper.pdf</p>
            <img src={Pdf} alt="" />
          </div>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Howtobuy;
