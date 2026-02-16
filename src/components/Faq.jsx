import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import proceed from '../assets/proceed.png'
import circulation from '../assets/circulation.png'
import mobilebuy from '../assets/mobilebuy.png'
import largebuy from '../assets/largebuy.png'
function Faq() {
  return (
    <section id="faq">
      <div className="md:hidden"> {/*     When on mobile screen */}
        <h1 className="text-white text-4xl mx-24 mt-20 text-center leading-10">
          Frequently Asked Questions
        </h1>
        <details className=" group border-[#043c63]  mt-10 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
            What is Nexum Platform?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
          <p className="text-white  py-4 pl-4 pr-14 font-extralight">
           NEXUM is a fintech platform that disrupts the financing mechanisms of shipping operations focusing on the expenditure side. 
Traders and other ecosystem participants that require funding and access to services offered by the platform must pay the platform an upfront fee in Nexum tokens (NEXM). The platform offers also other incentives for the adoption of crypto as means of payment within its ecosystem. As a result, the platform has two streams of income, one in fiat currency (USD) and one in Nexum Tokens (NEXM).
We aim by using blockchain technology and big data clusters to derive performance and credit-risk-related assessments on a per vessel/ship-manager basis. Our data-driven approach will also allow us to analyze and predict trade flows and world economic activity on a macro level.
          </p>
        </details>

         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
How many NEXM tokens are there in circulation?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
   <div className="flex flex-col md:flex  ">
    <img src={circulation} className="w-30 h-25 mx-auto mt-4" alt=" circulation" />
<p className=" text-white p-2 font font-extralight"> 80% of funds raised are used to finance shipping ecosystem participants. Up to 10% will be utilized to promoting and marketing activities that increase awareness of the token and the balance will be used for ecosystem development. The financing activity apart from necessary income to fund operations and to support further development of ecosystem applications also allows for collection of proprietary data that feed in our performance and credit-risk assessment models.</p> 
   </div>
        </details>

         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Why one more token?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
          <p className="text-white  py-4 pl-4 pr-14 font-extralight">
The shipping industry is still a laggard in technological adoption. By its very nature, it is a fragmented and opaque industry, making it ripe for innovation. Furthermore, by being a decentralize industry, it naturally lends itself to crypto applications. The multijurisdictional and multicurrency nature of shipping transactions provides a fertile environment for token utilization that will make cross-border payments and remittances quick and efficient. Nexum Token is a utility token that will form the backbone of tokenization in shipping transactions.
          </p>
        </details>

          <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
How will the funds be used?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
   <div className="flex-col">
    <img src={proceed} className="w-30 h-30 mx-auto mt-4" alt=" circulation" />
<p className=" text-white p-2 font font-extralight"> 80% of funds raised are used to finance shipping ecosystem participants. Up to 10% will be utilized to promoting and marketing activities that increase awareness of the token and the balance will be used for ecosystem development. The financing activity apart from necessary income to fund operations and to support further development of ecosystem applications also allows for collection of proprietary data that feed in our performance and credit-risk assessment models.</p> 
   </div>
        </details>

         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
What is the team of Nexum Platform?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
<p className=" text-white p-2 font font-extralight"> The team of Nexum is a unique blend of seasoned shipping industry veterans, ranging from senior banking executives, traders and shipmanagement executives and experienced entrepreneurs in information technology with multiple successful exits in the sector. For more information visit the Team section (link) or read our whitepaper <a href="">(link)</a>.</p> 
   
        </details>


         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
What makes Nexum Platform unique?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
<p className=" text-white p-2 font font-extralight"> Nexum Platform applies the right solution to an actual problem in an industry that is responsible for 90% of world trade. Other applications try to apply blockchain technology to specific activities in the transportation chain such as bill of lading, logistics operation etc. Nexum Platform focuses on the vessel as the economic unit, bringing transparency and efficiency in the capital allocation process.</p> 
        </details>

            <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Where can I buy NEXM tokens?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
    <img src={mobilebuy} className="w-30 h-90 my-4 mx-auto mt-4" alt=" circulation" />
        </details>


         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-8">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Technology Overview</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
    <p className=" text-white p-2 font font-extralight">Our proprietary technology is built to provide quick capital deployment and unlimited scalability, enabling the execution of any number of daily transactions with minimum human intervention. 
The disbursement mechanism has been designed to protect against fraudulent transactions.
All datasets and clusters are to be handled by a unique registry following blockchain protocols that will allow for advanced distributed applications, including payments, collections and insurtech applications.  Further data analytics and data visualization methods will provide a  personalized wallet to access all related data to the respective stakeholders (brokers/agents, charterers, shipowners, insurers,  lenders).
</p>
        </details>
      </div>



      <div className="hidden md:block"> {/*     When on large screen */}
        <h1 className="text-white text-4xl mx-24 mt-20 text-center leading-10">
          Frequently Asked Questions
        </h1>
        <details className=" group border-[#043c63]  mt-10 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
            What is Nexum Platform?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
          <p className="text-white  py-4 pl-4 pr-14 font-extralight">
           NEXUM is a fintech platform that disrupts the financing mechanisms of shipping operations focusing on the expenditure side. 
Traders and other ecosystem participants that require funding and access to services offered by the platform must pay the platform an upfront fee in Nexum tokens (NEXM). The platform offers also other incentives for the adoption of crypto as means of payment within its ecosystem. As a result, the platform has two streams of income, one in fiat currency (USD) and one in Nexum Tokens (NEXM).
We aim by using blockchain technology and big data clusters to derive performance and credit-risk-related assessments on a per vessel/ship-manager basis. Our data-driven approach will also allow us to analyze and predict trade flows and world economic activity on a macro level.
          </p>
        </details>

         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
How many NEXM tokens are there in circulation?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
   <div className="flex ">
<div className=" flex-1 "><p className=" text-white p-2 font font-extralight"> Nexum Token was launched on Ethereum mainnet with a maximum supply of 5billion tokens. 50% of them are available for capital raising, 30% stays at the Nexum Foundation Ltd. and 20% will be retained to be distributed long-term to team and advisors. All tokens paid as upfront fee by the traders and the ecosystem participants are taken off circulation for an unspecified period</p> </div>
<div className=" flex-1 "><img src={circulation} className="w-60 mx-auto h-60 mt-4" alt=" circulation" /></div>

   </div>
        </details>

         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Why one more token?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
          <p className="text-white  py-4 pl-4 pr-14 font-extralight">
The shipping industry is still a laggard in technological adoption. By its very nature, it is a fragmented and opaque industry, making it ripe for innovation. Furthermore, by being a decentralize industry, it naturally lends itself to crypto applications. The multijurisdictional and multicurrency nature of shipping transactions provides a fertile environment for token utilization that will make cross-border payments and remittances quick and efficient. Nexum Token is a utility token that will form the backbone of tokenization in shipping transactions.
          </p>
        </details>


          <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
How will the funds be used?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>

             <div className="flex ">
<div className=" flex-1 "><p className=" text-white p-2 font font-extralight"> 80% of funds raised are used to finance shipping ecosystem participants. Up to 10% will be utilized to promoting and marketing activities that increase awareness of the token and the balance will be used for ecosystem development. The financing activity apart from necessary income to fund operations and to support further development of ecosystem applications also allows for collection of proprietary data that feed in our performance and credit-risk assessment models.</p> </div>
<div className=" flex-1 "><img src={proceed} className="w-60 mx-auto h-60 mb-4" alt=" circulation" /></div>

   </div>
   
        </details>





         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
What is the team of Nexum Platform?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
<p className=" text-white p-2 font font-extralight"> The team of Nexum is a unique blend of seasoned shipping industry veterans, ranging from senior banking executives, traders and shipmanagement executives and experienced entrepreneurs in information technology with multiple successful exits in the sector. For more information visit the Team section (link) or read our whitepaper <a href="">(link)</a>.</p> 
   
        </details>


         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
What makes Nexum Platform unique?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
<p className=" text-white p-2 font font-extralight"> Nexum Platform applies the right solution to an actual problem in an industry that is responsible for 90% of world trade. Other applications try to apply blockchain technology to specific activities in the transportation chain such as bill of lading, logistics operation etc. Nexum Platform focuses on the vessel as the economic unit, bringing transparency and efficiency in the capital allocation process.</p> 
        </details>

            <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Where can I buy NEXM tokens?</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
    <img src={largebuy} className="w-130 h-60 my-4 mx-auto mt-4" alt=" circulation" />
        </details>


         <details className=" group border-[#043c63]  mt-4 border rounded-md mx-16 lg:mx-60">
          <summary className="text-white text-l p-2 list-none cursor-pointer flex items-center justify-between">
           <span> 
Technology Overview</span>
            <FontAwesomeIcon icon={faAngleDown} className=" pointer-events-none transition-transform duration-300 group-open:rotate-180 " />
          </summary>
    <p className=" text-white p-2 font font-extralight">Our proprietary technology is built to provide quick capital deployment and unlimited scalability, enabling the execution of any number of daily transactions with minimum human intervention. 
The disbursement mechanism has been designed to protect against fraudulent transactions.
All datasets and clusters are to be handled by a unique registry following blockchain protocols that will allow for advanced distributed applications, including payments, collections and insurtech applications.  Further data analytics and data visualization methods will provide a  personalized wallet to access all related data to the respective stakeholders (brokers/agents, charterers, shipowners, insurers,  lenders).
</p>
        </details>


        
      </div>
    </section>
  );
}

export default Faq;
