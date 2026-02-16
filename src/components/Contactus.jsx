import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contactcartoon from "../assets/Contactcartoon.png";
import { useState } from "react";
import Failmessage from "./Failmessage";
import Sentmessage from "./Sentmessage";

function Contactus() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subscribe: false,
    agree: false,
  });


  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const [agreeError, setAgreeError] = useState("");
  

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "agree" && checked) {
      setAgreeError("");
    }

    setError(false);
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message 
    ) {
      setError(true);
      return;
    }

    if (!formData.agree) {
      setAgreeError(
        " You must read and agree to NEXM's Terms of Service and Privacy to Proceed! ",
      );
      return;
    }

    console.log("Form Submitted", formData);
 setSuccess(true);
   

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subscribe: false,
      agree: false,
    });
  };

  return (
    // when on mobile
    <section id="contact">
      <div className=" md:hidden">
        <h1 className=" text-center text-4xl mt-20 text-white">
          {" "}
          Get in Touch
        </h1>

        <form
          onSubmit={handleSubmit}
          className=" mx-8 mt-10 gap-6 flex flex-col "
        >
          
          {error && <Failmessage onClose={() => setError(false)} />}

          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="border-[#1a3040] p-5 rounded-md border-2  text-[#d0dde6] "
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="border-[#1a3040] px-6 pt-6 p-40 rounded-md border-2  text-[#d0dde6] "
            type="text"
            name="message"
            placeholder="write message..."
            value={formData.message}
            onChange={handleChange}
          />

          <div className=" flex flex-col">
            <div className=" flex gap-2 items-center ">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <h2 className=" text-white"> Subscribe to our Newsletter</h2>
            </div>
            <div className=" flex gap-2 items-center ">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <h2 className=" pt-5 text-white">
                You have read and agreed to NEXM's Terms of Service and Privacy
                Policy.
              </h2>
            </div>
            {agreeError && (
              <p className="text-red-500 text-sm mt-2">{agreeError}</p>
            )}
          </div>
          <button className=" hover:bg-[#012947] mx-auto text-white border-[#048d91] border-2 py-4 px-40 rounded-xl cursor-pointer ">
            Send
          </button>
        </form>

        {success && <Sentmessage onClose={() => setSuccess(false)} />}
      </div>

      <div className="hidden md:block mx-10 lg:mx-40  ">
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
          <form onSubmit={handleSubmit} className=" w-3/5  ">
            <div className=" flex gap-4  ">
                {error && <Failmessage onClose={() => setError(false)} />}
              <input
                className="border-[#1a3040] p-2 rounded-md border-2 flex-1 text-[#d0dde6] "
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                className="border-[#1a3040] p-2 rounded-md border-2 flex-1  text-[#d0dde6] "
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              className="border-[#1a3040] p-2 mt-4 w-full rounded-md border-2  text-[#d0dde6] "
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              className="border-[#1a3040] mt-4 w-full  rounded-md border-2  text-[#d0dde6] h-34  p-2   "
              type="text"
              placeholder="write message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <div className=" flex gap-2 mt-4 ">
              <input 
                 type="checkbox"
                name="subscribe"
                onChange={handleChange}
                checked={formData.subscribe}
               />
              <h2 className=" text-white "> Subscribe to our Newsletter</h2>
            </div>
            <div className=" flex gap-2  w-full items-center mt-2 ">
              <input
                 type="checkbox"
                name="agree"
                onChange={handleChange}
                checked={formData.agree}
              className="mb-6 lg:mt-6" />
              <div>
                <h2 className=" text-white   w-full ">
                  You have read and agree to NEXM's Terms of Service and Privacy
                  Policy.
                </h2>
              </div>
            </div>
             {agreeError && (
              <p className="text-red-500 text-sm mt-2">{agreeError}</p>
            )}
            <button className="  hover:bg-[#012947] mt-4  text-white border-[#048d91] border-2 py-2 px-40 rounded-xl cursor-pointer ">
              Send
            </button>
            {success && <Sentmessage />}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
