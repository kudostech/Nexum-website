import React from "react";
import fail from "../assets/fail.png";

function Failmessage({onClose,message}) {
  return (
    <div>
      <div className=" md:hidden fixed inset-0 flex  justify-center items-center pb-110 pt-3">
        <section className="rounded-xl px-26 py-19 backdrop-blur-sm bg-[#02223b]/70 flex flex-col gap-10 justify-center items-center">
          <img className=" w-40 " src={fail} alt="failmessage" />
          <h1 className="text-red-500 text-xl text-center font-bold mt-2">
            Attention: <br />{" "}
            <span className="text-white text-xl font-normal ">
               {message}
            </span>
          </h1>
          <button  onClick={onClose} className=" hover:bg-[#012947] text-white border-[#0689a5] border rounded-xl cursor-pointer   py-4 px-20">
            OK
          </button>
        </section>
      </div>
      <div className=" hidden fixed lg:pt-49 lg:px-54 pt-80 px-18 inset-0 md:block  justify-center items-center ">
        <div
          className="flex rounded-4xl backdrop-blur-sm bg-[#02223b]/80 justify-between items-center  px-10
       0 py-14 gap-10 "
        >
          <div className="flex-1 justify-center">
            <img className="w-60" src={fail} alt="sent-pop-up" />
          </div>
          <div className=" flex-1 gap-10 flex flex-col items-center justify-center ">
            <h1 className="  text-center text-red-500 text-3xl font-bold">
              Attention! <br />{" "}
              <span className="text-white  whitespace-nowrap text-xl font-normal ">
                {message}
              </span>{" "}
            </h1>
            <button onClick={onClose} className=" cursor-pointer hover:bg-[#07abc5] text-white border-[#0689a5] border rounded-xl  py-4 px-20">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Failmessage;
