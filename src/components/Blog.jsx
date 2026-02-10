import React from "react";
import Blogimage from "../assets/Blogimage.png";
import bulletpoint from "../assets/bulletpoint.png";
import Coingape from "../assets/Coingape.png";
import Media from "../assets/Media.png";
import Yahoo from "../assets/Yahoo.png";
import Publish from "../assets/Publish.png";
import { useState } from "react";
function Blog() {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div id="blog">
      <div className=" md:hidden"> {/* when on mobile */}
        <h1 className=" text-[#14e4d3] text-center mx-20 mt-20 text-2xl">
          {" "}
          BLOG AND PUBLICATIONS
        </h1>
        <h2 className=" font-medium text-white text-center mt-4 text-4xl">
          {" "}
          Our Blog
        </h2>
        <img className="mt-10 w-90 mx-8" src={Blogimage} alt="Blog" />
        <div className="flex justify-between mx-12 mt-8 ">
          <h3 className="text-white text-center mt-4 text-3xl font-medium">
            {" "}
            NEXUM story
          </h3>
          <h3 className="text-white text-center mt-4 text-2xl font-medium">
            {" "}
            Medium
          </h3>
        </div>
        <p className="px-12 text-white mt-4 text-xl">
          Story of NEXUM starts in 2019 just a week before some of the incidents
          that life decides without asking, but...
        </p>
        <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#078078] mx-12 ">
          {isExpanded ?
          (The journey continued with challenges, learning,
            and innovation that shaped the future of the platform.
            What started as an idea grew into a vision to transform
            the industry and empower communities worldwide.):
(Read more)
            }
          </button>
        <img className="mt-6 ml-44" src={bulletpoint} alt="Blog" />
        <h3 className="text-white text-center mt-10 text-2xl font-medium">
          Media About us:
        </h3>

        <div className=" gap-10 flex flex-col items-center mt-10">
          <img className="w-40" src={Coingape} alt="" />
          <img className="w-20" src={Media} alt="" />
          <img className="w-30" src={Yahoo} alt="" />
          <img className="w-40" src={Publish} alt="" />
        </div>
      </div>


      {/* when on larger screens */}
      <div className=" hidden md:block">
        <h3 className=" text-[#14e4d3] text-center mx-20 mt-20 text-3xl">
          {" "}
          BLOG AND PUBLICATIONS
        </h3>
        <h2 className=" font-medium text-white text-center mt-4 text-4xl">
          
          Our Blog
        </h2>
        <div className=" flex px-20 gap-10 mt-10 lg:px-80 lg:gap-10">
          <div className="flex-1">
            <img src={Blogimage} alt="Blog" />
          </div>

          <div className=" flex-1">
            <h3 className="text-white mt-1 text-2xl font-medium">Medium</h3>
            <h3 className="text-white mt-2 text-2xl font-medium">
              NEXUM story
            </h3>
            <p className=" mt-2 text-white">
              Story of NEXUM starts in 2019 just a week before some of the
              incidents that life decides without asking, but....
            </p>
            <h2 className="text-[#078078]  cursor-pointer">Read more</h2>
          </div>
        </div>
<h2 className="text-center text-2xl font-medium text-white mt-20">
  Media about us:
</h2>
        <div className=" gap-10 ml-50 flex  items-center mt-10 lg:ml-110">
          <img className="w-20" src={Coingape} alt="" />
          <img className="w-10" src={Media} alt="" />
          <img className="w-15" src={Yahoo} alt="" />
          <img className="w-20" src={Publish} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
