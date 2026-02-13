import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="nav">
      {/* when on mobile */}
      <div
        className="  md:hidden bg-[#01192b] rounded-b-lg 
 fixed top-0 left-0  w-full items-center px-6 h-16 flex justify-between "
      >
        <div
          onClick={() => {
            document.getElementById("nav")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className=" gap-1 items-center flex "
        >
          <img className="w-6" src={logo} alt="" />
          <p className="text-white font-bold">NEXUM</p>
        </div>
        <button
          className=" text-white cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className=" fixed inset-0 bg-[#01192b] md:hidden">
          <div className="  flex justify-between mx-8 mt-10">
            <div to="/" className=" gap-1 flex justify-center items-center ">
              <img className="" src={logo} alt="" />
              <p className="text-white text-xl  font-bold leading-4">
                NEXUM <br />
                <span className="font-extralight text-xs"> PLATFORM</span>
              </p>
            </div>

            {/* Close button */}
            <button
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div className="flex justify-end p-6"></div>
          {/* Menu items */}
          <ul className=" flex text-5xl flex-col h-full items-center  text-white gap-10 ">
            <li
              className="p-4 "
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              About
            </li>

            <li
              className="p-4 "
              onClick={() => {
                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Team
            </li>

            <li
              className="p-4 "
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Features
            </li>

            <li
              className="p-4 "
              onClick={() => {
                document.getElementById("faq")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              FAQ
            </li>

            <li
              className="p-4 "
              onClick={() => {
                document.getElementById("token")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Token
            </li>
          </ul>
        </div>
      )}
      ;{/* When on tablet */}
      <div className="hidden lg:hidden  md:flex w-full bg-transparent">
        <div
          className="
    w-full max-w-6xl mx-auto
    flex items-center  justify-around
  "
        >
          {/* Logo */}
          <div to="/" className="flex items-center gap-2 ml-">
            <img className="w-6" src={logo} alt="Nexum logo" />
            <span className="text-white font-bold text-lg">NEXUM</span>
          </div>

          {/* Nav Links */}
          <ul
            className="
      flex items-center
      gap-10
      text-white text-sm font-light

    "
          >
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Team
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("vision")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Vision
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("buy")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Buy
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("blog")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Blog
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
            >
              Team
            </li>
          </ul>

          {/* CTA */}
          <button
            className="
            cursor-pointer
      px-4 py-2
      text-sm text-white
      border rounded-md
      border-[#04adc0]
      hover:bg-[#01C09D]
      transition
      
    "
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
              setMenuOpen(false);
            }}
          >
            Contact
          </button>
        </div>
      </div>
      {/* when on desktop */}
      <div className=" hidden md:hidden  lg:flex items-center justify-between mx-24 mb-20 ">
        <div to="/" className="gap-1 flex mt-10 ">
          <img className="w-6" src={logo} alt="" />
          <p className="text-white font-bold"> NEXUM </p>
        </div>

        <ul
          className=" flex gap-12
font-light text-white items-center ml-5 mt-10"
        >
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("team")?.scrollIntoView({
                behavior: "smooth",
              });
         
            }}
          >
            Team
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("vision")?.scrollIntoView({
                behavior: "smooth",
              });
            
            }}
          >
            Vision
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("buy")?.scrollIntoView({
                behavior: "smooth",
              });
             
            }}
          >
            Buy
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("blog")?.scrollIntoView({
                behavior: "smooth",
              });
            
            }}
          >
            Blog
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              document.getElementById("team")?.scrollIntoView({
                behavior: "smooth",
              });
           
            }}
          >
            Team
          </li>
        </ul>

        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
       
          }}
          className="hidden md:flex text-white border px-4 py-2 rounded-md border-[#04adc0] border-l-[#01C09D] mt-10 cursor-pointer "
        >
          {" "}
          Contact
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
