import React from "react";
import cofounder1 from "../assets/cofounder1.png";
import cofounder2 from "../assets/cofounder2.png";
import chairman from "../assets/chairman.png";
import ciro from "../assets/ciro.png";
import cm from "../assets/cm.png";
import cmo from "../assets/cmo.png";
import hocc from "../assets/hocc.png";
import mocc from "../assets/mocc.png";
import be from "../assets/be.png";
import cto from "../assets/cto.png";
import se from "../assets/se.png";
import tl from "../assets/tl.png";
import se2 from "../assets/se2.png";
import ccfe from "../assets/ccfe.png";
import ire from "../assets/ire.png";
import cre from "../assets/cre.png";
import cse from "../assets/cse.png";
import bia from "../assets/bia.png";
import tda from "../assets/tda.png";
import la from "../assets/la.png";
import ma from "../assets/ma.png";
import ma2 from "../assets/ma2.png";
import ibe from "../assets/ibe.png";

function Team() {
  return (
    <section id="team">
      <div  className=" md:hidden">
        {" "}
        {/* when on mobile */}
        <h1 className=" text-center text-4xl mt-20 text-white"> Co-Founders</h1>
        <div className="flex flex-col gap-10">
          <div>
            <img
              className="mx-auto w-20 mt-10"
              src={cofounder1}
              alt="Co-founder 1"
            />
            <h3 className="text-center text-white mt-4">Panos Georgolios</h3>
            <h6 className="   text-center text-[#02d5b1] mt-2 "> CO-FOUNDER</h6>
            <p className="text-white px-14 mt-2">
              Panos has a PhD in the area of semantic web services in
              Information Management from National Technical University of...
            </p>
            <h2 className=" px-14 text-white font-medium mt-1"> READ MORE</h2>
          </div>
          <div>
            <img
              className="mx-auto w-20 "
              src={cofounder2}
              alt="Co-founder 2"
            />
            <h3 className="text-center text-white mt-4">
              Konstantinos Vonatsos
            </h3>
            <h6 className="   text-center text-[#02d5b1] mt-2 "> CO-FOUNDER</h6>
            <p className="text-white px-14 mt-2">
              Konstantinos has a PhD in Mathematical Sciences from the
              University of Manchester, he also holds...{" "}
            </p>
            <h2 className=" px-14 text-white font-medium mt-1"> READ MORE</h2>
          </div>
        </div>
        <h1 className=" text-center text-4xl mt-20 text-white">
          {" "}
          Business Team
        </h1>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={chairman} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Panos <br /> Bethanis <br />{" "}
              <span className=" text-base font-bold  text-[#02d5b1]">
                {" "}
                CHAIRMAN{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          Panos Bethanis earned his Bachelor degree from Brandeis University and
          holds a JD and a Masters of Business Administrat... <br />{" "}
          <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40 ">
            <img className="mx-auto mt-6" src={ciro} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Kristiana <br />
              Ndreka Aboud <br />{" "}
              <span className="  text-[#02d5b1]">
                {" "}
                Chief investor <br /> relations officer{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          Kristiana Ndreka Aboud has a long experience in sales, marketing and
          investment relations, starting from 2011 at...
          <br /> <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40 ">
            <img className="mx-auto mt-6" src={cm} alt="" />
          </div>
          <div className="flex-1 h-40 ">
            <h2 className=" text-white mt-6 text-2xl">
              Constantinos <br />
              Mylonakis <br />{" "}
              <span className=" text- font- text-[#02d5b1]">
                {" "}
                Commercial <br /> Manager{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          Constantinos Mylonakis holds a Bsc (Hons) in Maritime Business from
          Plymouth University and an MSc in International...
          <br /> <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40 ">
            <img className="mx-auto mt-6" src={cmo} alt="" />
          </div>
          <div className="flex-1 h-40 ">
            <h2 className=" text-white mt-6 text-2xl">
              Dimitrii <br />
              Matiushin <br />{" "}
              <span className=" text- font- text-[#02d5b1]">
                {" "}
                chief marketing <br />
                officer{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          JDimitrii Matiushin has graduated as BBA student from the University
          of Applied Sciences in Finland (JAMK).
          <br /> <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <h1 className=" text-center text-4xl mt-20 text-white">
          {" "}
          Credit Committee
        </h1>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40 ">
            <img className="mx-auto mt-6" src={hocc} alt="" />
          </div>
          <div className="flex-1 h-40 ">
            <h2 className=" text-white mt-6 text-2xl">
              Dimitris <br />
              Vassilakos
              <br />{" "}
              <span className=" text- font- text-[#02d5b1]">
                {" "}
                Head of Credit <br />
                Committee{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          Dimitris is a senior corporate financier with a special focus on the
          shipping industry. In 2017, he co-founded a consulting boutique.
          <br /> <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <div className=" flex  mx-6 mt-10">
          <div className="flex-1 ">
            <img className="mx-auto mt-6" src={mocc} alt="" />
          </div>
          <div className="flex-1 h-40 ">
            <h2 className=" text-white  mt-6 text-2xl ">
              Jason Dallas
              <span className="  text-[#02d5b1]">
                {" "}
                Member of Credit <br />
                Committee{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <p className=" text-white pl-8 pr-20 ">
          {" "}
          Jason has more than 20 years of experience in shipping finance. Since
          2017 he is a co-founding partner of Ship Finance.
          <br /> <span className="font-bold"> READ MORE</span>{" "}
        </p>
        <h1 className=" px-18 text-center text-4xl mt-20 text-white">
          {" "}
          Team Development
        </h1>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={be} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Salman Sami <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                BLOCKCHAIN <br /> EXPERT{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-4">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={cto} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Danila Kuklov <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                CHIEF TECHNOLOGY <br /> OFFICER{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-4">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={se} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Fotis <br />
              Kouretas <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                SOFTWARE ENGINEER{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-4">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={tl} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Mykhaylo <br /> Lukyanov <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                TEAM LEAD{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-4">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={se2} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Andrei <br /> Taranuta <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                SOFTWARE ENGINEER{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <h1 className=" px-18 text-center text-4xl mt-20 text-white">
          {" "}
          Advisors
        </h1>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={ccfe} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Rami Martin <br /> Eldada <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                CRYPTO CURRENCY & <br /> FINANCE EXPERT{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={ire} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Prince Franklin <br /> E Omene <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                INTERNATIONAL <br /> RELATIONS EXPERT{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={cre} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Alex <br />
              Fedosseev <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                CRYPTO CURRENCY <br /> EXPERT{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={cse} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Alik <br />
              Altermalin <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                CYBERSECURITY <br /> EXPERT{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={bia} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Ashok <br />
              Jayagopal <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                BLOCKCHAIN <br /> INVESTMENT ADVISOR{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={tda} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Rod Frowd
              <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                TECHNICAL <br /> DEVELOPMENT <br /> ADVISOR{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={la} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Habeeb <br /> Sayed
              <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                LEGAL ADVISOR{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={ma} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Yana <br />
              Vedernikova
              <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                MARKETING ADVISOR{" "}
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={ma2} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
              Anna <br />
              Mitchenko
              <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                MARKETING ADVISOR{" "}
              </span>{" "}
            </h2>
          </div>
        </div>

        <div className=" flex gap-4 mx-8 mt-10">
          <div className="flex-1 h-40">
            <img className="mx-auto mt-6" src={ibe} alt="" />
          </div>
          <div className="flex-1 h-40  ">
            <h2 className=" text-white mt-6 text-2xl">
             Ilias <br /> Kyriakopoulos
              <br />{" "}
              <span className=" text-base text-[#02d5b1]">
                {" "}
                INTERNATIONAL BUSINESS EXPERT{" "}
              </span>{" "}
            </h2>
          </div>


          
        </div>
      </div>

      <div className=" hidden md:block lg:mx-40 ">
        {" "}
        {/* when on large screens */}
        <h1 className=" text-center text-5xl mt-40 text-white"> Co-Founders</h1>
        <div className=" flex gap-4 justify-center mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <img className="mx-auto" src={cofounder1} alt="Co-founder 1" />
            <h2 className="text-white text-center mt-2">Panos Georgolios</h2>
            <h4 className="text-[#02d5b1] text-center">CO-FOUNDER</h4>
            <p className="text-white font-extralight px-4 mt-4">
              Panos has a PhD in the area of semantic web services in
              Information Management from National Technical University, he also
              earned a diploma (MEng) in Electrical Engineering from, National
              Technical University of Athens. <br /> <br /> In 2008 Panos was
              awarded the Best Young Entrepreneur by the Athens Chamber of
              Commerce. <br /> <br /> Panos has co-founded and exited numerous
              number startups in the area of AI, BigData analytics and FinTech
              in Europe and the USA. He was the leader of IMC Technologies and
              grew it from pre-revenue to more than €20 million in revenue.{" "}
              <br /> <br /> Panos led the development of the first discussion
              analytics platform used by the biggest media groups globally
              including CNN, CNBC and others implementing targeted personalized
              analysis of more than 19 million U.S website visitors daily.
            </p>
          </div>
          <div className=" border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <img className="mx-auto" src={cofounder2} alt="Co-founder 1" />
            <h2 className="text-white text-center mt-2">
              Konstantinos Vonatsos
            </h2>
            <h4 className="text-[#02d5b1] text-center">CO-FOUNDER</h4>
            <p className="text-white font-extralight px-4 mt-4">
              Konstantinos has a PhD in Mathematical Sciences from the
              University of Manchester, he also holds a diploma in Mechanical
              Engineering (MEng) from the National Technical University of
              Athens. <br /> <br /> Konstantinos has experience in the shipping
              industry where he worked at the top-managing positions in Eclipse
              Navigation Inc/Eclipse Shipmanagement Inc., Dean Marine Advisers
              (a UK-based shipping advisory firm), TEO Shipping Inc.
              (Athens-based shipping company owning 7 Post-Panamax, 1 Panamax
              and third-party management of two 2800TEU containers). <br />{" "}
              <br /> Konstantinos has also worked as an Investment Manager & CFO
              at European Navigation Group, where he was responsible for the
              finance department, the S&P department and for all the investments
              of the group, overseeing assets in excess of $1bn.
            </p>
          </div>
        </div>
        <h1 className=" text-center text-5xl mt-20 text-white">
          {" "}
          Business Team{" "}
        </h1>
        <div className=" flex gap-4 justify-center mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={chairman} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Panos Bethanis <br />
                  <span className="text-[#02d5b1]">CHAIRMAN</span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Panos Bethanis earned his Bachelor degree from Brandeis University
              and holds a JD and a Masters of Business Administration from
              Boston University. Since the 1990s, he has been innovating in the
              technology, marketing, and data space in the United States and
              globally with 3 successful exits. <br /> <br />
              Recognizing gaps in retail and growing in-store needs by emerging
              brands, Panos in 2012 launched Survey.com. In March 2020 he led
              the acquisition of Survey.com by Trax Retail.
              <br /> <br /> In 2020 Panos joined Nexum fintech platform aiming
              to disrupt the outdated funding processes in the shipping
              industry.
            </p>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={cm} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Constantinos <br />
                  Mylonakis
                  <br />
                  <span className="text-[#02d5b1]">
                    COMMERCIAL MANAGER
                  </span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Dimitris is a senior corporate financier with a special focus on
              the shipping industry. In 2017, he co-founded a consulting
              boutique, Ship Finance Solutions (SFS) that is advising borrowers
              or lenders on debt finance deals. Since its inception, SFS has
              successfully advised on more than 30 deals totalling more than
              $1bn. <br /> <br />
              Prior to launching SFS, Dimitris was a Managing Director and the
              Head of Greek shipping at Citibank, for four years and he was
              managing a shipping loans portfolio of about $1.5bn.
            </p>
          </div>
        </div>
        <div className=" flex gap-4 justify-center mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className="mx-4" src={ciro} alt="" />
              </div>
              <div>
                <h2 className="text-white mx-4">
                  Kristiana <br />
                  Ndreka Aboud <br />
                  <span className="text-[#02d5b1] ">
                    CUSTOMER INVESTOR RELATION OFFICER
                  </span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Kristiana Ndreka Aboud has a long experience in sales, marketing
              and investment relations, starting from 2011 at Vodafone. In 2014
              Kristiana started her private education in the areas of finance
              and FX trading. Kristiana created and educated a large network of
              financial agents specializing in the crypto industry. <br />{" "}
              <br />
              In 2019 Kristiana became an advisor and a development consultant
              of a bunkering company in Monaco. Now she leads the Investment
              relations of Nexum..
            </p>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className="mx-4" src={cmo} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Dimitrii Matiushin
                  <br />
                  <span className="text-[#02d5b1]">
                    CHIEF MARKETING OFFICER
                  </span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Dimitrii Matiushin has graduated as BBA student from the
              University of Applied Sciences in Finland (JAMK). <br /> <br />
              Dimitrii joined crypto space in 2017 and ever since he is
              witnessing ups & downs of the industry. His primary focus was an
              intraday trading and token analysis. Dimitrii strongly believes
              that it is impossible to understand the market and its movement
              unless you have skin in the game. <br /> <br />
              Pursuing his interest in the industry Dimitrii joined a
              crypto-marketing agency. He became a leading marketer helping
              crypto projects to unleash their potential as well as to reach
              target audience of token holder and community members. His fresh
              and innovative vision is the core of Nexum marketing.
            </p>
          </div>
        </div>
        <h1 className=" text-center text-5xl mt-20 text-white">
          {" "}
          Credit Committe{" "}
        </h1>
        <div className=" flex gap-4 justify-center mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className="mx-4" src={hocc} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Dimitris <br />
                  Vassilakos
                  <br />
                  <span className="text-[#02d5b1]">
                    HEAD OF CREDIT COMMITTE{" "}
                  </span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Dimitris is a senior corporate financier with a special focus on
              the shipping industry. In 2017, he co-founded a consulting
              boutique, Ship Finance Solutions (SFS) that is advising borrowers
              or lenders on debt finance deals. Since its inception, SFS has
              successfully advised on more than 30 deals totalling more than
              $1bn. <br /> <br />
              Prior to launching SFS, Dimitris was a Managing Director and the
              Head of Greek shipping at Citibank, for four years and he was
              managing a shipping loans portfolio of about $1.5bn.
            </p>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className="mx-4" src={mocc} alt="" />
              </div>
              <div>
                <h2 className="mx-4 text-white">
                  Jason Dallas
                  <br />
                  <span className="text-[#02d5b1]">
                    MEMBER OF CREDIT COMMITTEE
                  </span>{" "}
                </h2>
              </div>
            </div>
            <p className="text-white px-4 mt-4 font-extralight">
              {" "}
              Jason has more than 20 years of experience in shipping finance.
              Since 2017 he is a co-founding partner of Ship Finance Solutions,
              a shipping finance advisory firm that advises lenders or Borrowers
              on debt finance transactions. Previously he had worked for Piraeus
              Bank for more than 13 years, including acting as the Deputy Head
              of a shipping portfolio in excess of $4bn. <br /> <br />
              Jason was actively involved in the successful integration of more
              than $2.5bn of acquired shipping loans within this portfolio and
              was responsible on the business side for developing the bank’s
              shipping loan risk assessment model at the time.
            </p>
          </div>
        </div>
        <div className=" flex gap-4  mt-20 mx-8 ">
          <div className="justify-center  p-2 flex-1 rounded-2xl ">
            <div className=" flex items-center  gap-4 mt-2 ">
              <div className=" h-16 border-2 border-[#02d5b1]  "></div>
              <div>
                <h2 className="text-white  text-3xl leading-10">
                  Team <br /> Development
                  <br />
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className=" mt-4" src={be} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Salman Sami
                  <br />
                  <span className="text-[#02d5b1]">BLOCKCHAIN EXPERT</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={cto} alt="" />
              </div>
              <div>
                <h2 className=" mt-4 text-white">
                  Danila Kuklov
                  <br />
                  <span className="text-[#02d5b1]">
                    CHIEF TECHNOLOGY OFFICER
                  </span>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-4  mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className=" " src={se} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Fotis <br /> Kouretas
                  <br />
                  <span className="text-[#02d5b1]">SOFTWARE ENGINEER</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className=" mt-4" src={tl} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Mykhaylo Lukyanov
                  <br />
                  <span className="text-[#02d5b1]">TEAM LEAD</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={se2} alt="" />
              </div>
              <div>
                <h2 className=" mt-4 text-white">
                  Andrei Taranuta
                  <br />
                  <span className="text-[#02d5b1]">SOFTWARE ENGINEER</span>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>



        <div className=" flex gap-4  mt-20 mx-8 ">
          <div className="justify-center  p-2 flex-1 rounded-2xl ">
            <div className=" flex   gap-4 mt-2 ">
              <div className=" h-16 border-2 border-[#02d5b1]  "></div>
              <div>
                <h2 className="text-white  text-3xl leading-10">
                  Advisor
                  <br />
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className=" mt-4" src={ma} alt="" />
              </div>
              <div>
                <h2 className="text-white mt-4 ">
                 Anna Mitchenko
                  <br />
                  <span className="text-[#02d5b1]">MARKETING ADVISOR</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={ire} alt="" />
              </div>
              <div>
                <h2 className=" mt-4 text-white">
                  Prince <br />
Franklin E Omene
                  <br />
                  <span className="text-[#02d5b1]">
                    INTERNATIONAL RELATIONS EXPERT
                  </span>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" flex gap-4  mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className=" " src={cre} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                 Alex <br />Fedosseev 
                  <br />
                  <span className="text-[#02d5b1]">CRYPTO CURRENCY EXPERT</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 mt-4 ">
              <div>
                {" "}
                <img className=" mt-4 " src={cse} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Alik Altermalin
                  <br />
                  <span className="text-[#02d5b1]">CYBERSECURITY EXPERT</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={ibe} alt="" />
              </div>
              <div>
                <h2 className=" mt-4 text-white">
                 Ilias Kyriakopoulos
                  <br />
                  <span className="text-[#02d5b1]">INTERNATIONAL BUSINESS EXPERT</span>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

          <div className=" flex gap-4  mt-10 mx-8 ">
          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img className="  " src={tda} alt="" />
              </div>
              <div>
                <h2 className="text-white mt-2">
                Rod Frowd
                  <br />
                  <span className="text-[#02d5b1]">TECHNICAL DEVELOPMENT ADVISOR</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 mt-4 ">
              <div>
                {" "}
                <img className=" " src={cse} alt="" />
              </div>
              <div>
                <h2 className="text-white">
                  Habeeb Sayed
                  <br />
                  <span className="text-[#02d5b1]">LEGAL ADVISOR</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#022e4d] p-2 flex-1 rounded-2xl ">
            <div className=" flex justify-center items-center gap-4 ">
              <div>
                {" "}
                <img src={ma2} alt="" />
              </div>
              <div>
                <h2 className=" mt-4 text-white">
                 Yana Vedernikova
                  <br />
                  <span className="text-[#02d5b1]">MARKETING ADVISOR</span>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
