import React from 'react'
import coingecko from '../assets/coingecko.svg'
import Etherscan from '../assets/Etherscan.jpeg'
import ApeSwap from '../assets/ApeSwap.png'
import PancakeSwap from '../assets/PancakeSwap.png'
import QUICKSWAP from '../assets/QUICKSWAP.png'
import Yahoofinance from '../assets/Yahoofinance.png'
import Cryptopolitan from '../assets/Cryptopolitan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import Bulletin from '../assets/Bulletin.png'
import Blockchain from '../assets/Blockchain.png'

function FeatureSection() {
    return (
        <div id='features'>

            <div className='mt-24'>
                <h1 className=' text-3xl font-bold text-center text-[#05b1ba] md:text-6xl'> NEXUM now on:</h1>


                <div className='flex flex-col gap-6 mt-8 md:hidden '>

                    <div className=' text-white pl-30 items-center flex  gap-2 '>
                        <p>
                            <svg className='w-6 h-5 fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CoinMarketCap</title><path d="M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 0 1 2.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 0 0-1.519-.059 9.56 9.56 0 0 1-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z" /></svg>
                        </p>
                        <p className='text-xl'> CoinMarketCap </p>
                    </div>

                    <div className=' text-white pl-30 items-center flex  gap-2'>
                        <img className=' w-6' src={coingecko} alt="coingecko" />
                        <p className='text-xl'> CoinGecko</p>
                    </div>

                    <div className=' text-white pl-30 items-center flex  gap-2'>
                        <img className=' w-6' src={Etherscan} alt="" />
                        <p className='text-xl'>Etherscan</p>
                    </div>

                    <div className=' text-white pl-30 items-center flex  gap-2'>
                        <img className=' w-6' src={ApeSwap} alt="" />
                        <p className='text-xl text-[#a16552] font-bold '>ApeSwap</p>
                    </div>

                    <div className=' text-white pl-30 items-center flex  gap-2'>
                        <img className=' w-6' src={PancakeSwap} alt="" />
                        <p className='text-xl  font-bold '>PancakeSwap</p>
                    </div>

                    <div className=' text-white pl-30 items-center flex  gap-2 '>
                        <img className=' w-6' src={QUICKSWAP} alt="" />
                        <p className='text-xl'>QUICKSWAP</p>
                    </div>

                </div>

                {/* on a larger screen */}
                <div className='hidden md:flex items-center  mt-10 flex-col gap-10  '>
                    <div className='flex gap-10'>
                        <div className=' text-white items-center flex  gap-2 '>
                            <p>
                                <svg className='w-6 h-12 fill-white' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CoinMarketCap</title><path d="M20.738 14.341c-.419.265-.912.298-1.286.087-.476-.27-.738-.898-.738-1.774v-2.618c0-1.264-.5-2.164-1.336-2.407-1.416-.413-2.482 1.32-2.882 1.972l-2.498 4.05v-4.95c-.028-1.14-.398-1.821-1.1-2.027-.466-.135-1.161-.081-1.837.953l-5.597 8.987A9.875 9.875 0 0 1 2.326 12c0-5.414 4.339-9.818 9.672-9.818 5.332 0 9.67 4.404 9.67 9.818.004.018.002.034.003.053.05 1.049-.29 1.883-.933 2.29zm3.08-2.34-.001-.055C23.787 5.353 18.497 0 11.997 0 5.48 0 .177 5.383.177 12c0 6.616 5.303 12 11.82 12 2.991 0 5.846-1.137 8.037-3.2.435-.41.46-1.1.057-1.541a1.064 1.064 0 0 0-1.519-.059 9.56 9.56 0 0 1-6.574 2.618c-2.856 0-5.425-1.263-7.197-3.268l5.048-8.105v3.737c0 1.794.696 2.374 1.28 2.544.584.17 1.476.054 2.413-1.468.998-1.614 2.025-3.297 3.023-4.88v2.276c0 1.678.672 3.02 1.843 3.68 1.056.597 2.384.543 3.465-.14 1.312-.828 2.018-2.354 1.944-4.193z" /></svg>
                            </p>
                            <p className='text-xl'> CoinMarketCap</p>
                        </div>

                        <div className=' text-white items-center flex  gap-2'>
                            <img className=' w-6' src={coingecko} alt="coingecko" />
                            <p className='text-xl'> CoinGecko</p>
                        </div>

                        <div className=' text-white items-center flex  gap-2'>
                            <img className=' w-6' src={Etherscan} alt="" />
                            <p className='text-xl'>Etherscan</p>
                        </div>

                    </div>

                    <div className='flex gap-10'>
                        <div className=' text-white items-center flex  gap-2'>
                            <img className=' w-6' src={ApeSwap} alt="" />
                            <p className='text-xl text-[#a16552] font-bold '>ApeSwap</p>
                        </div>
                        <div className=' text-white items-center flex  gap-2'>
                            <img className=' w-6' src={PancakeSwap} alt="" />
                            <p className='text-xl text-[#a16552] font-bold '>PancakeSwap</p>
                        </div>
                        <div className=' text-white items-center flex  gap-2 '>
                            <img className=' w-6' src={QUICKSWAP} alt="" />
                            <p className='text-xl'>QUICKSWAP</p>
                        </div>
                    </div>

                </div>




            </div>

            <div className='mt-15 mx-4'>
                <p className=' text-[#00f0c4] text-2xl pl-8 font-bold mb-6 lg:ml-34'>  Dont Miss</p>
                <div className=' flex flex-col gap-4 mt-4  md:hidden'>
                    <div className=' rounded-md mx-8 border  border-[#054776] h-38 flex flex-col md:flex md:w-1/4'>
                        <div className=' mt-6 ml-4 flex gap-2 text-center  items-center'>
                            <img className='w-10 ' src={Yahoofinance} alt="" />
                            <p className=' text-2xl text-white font-extrabold'> Yahoo! Finance </p>
                        </div>
                        <p className=' mt-4 font-extralight ml-4 text-white'>Our Partnership with Investment <br /> Fund from UAE </p>

                    </div>

                    <div className=' rounded-md mx-8 border border-[#054776] h-38 flex flex-col md:w-1/4'>
                        <div className=' mt-6 ml-4 flex gap-2 text-center  items-center'>
                            <img className='w-10 ' src={Cryptopolitan} alt="" />
                            <p className=' text-2xl text-white font-extrabold'> Cryptopolitan </p>
                        </div>
                        <p className=' mt-4 font-extralight ml-4 text-white'>Nexum Building Blockchain-based <br /> Carbon Credit Exchange Platform</p>

                    </div>

                    <div className=' rounded-md mx-8 border border-[#054776] h-38 flex flex-col md:w-1/4'>
                        <div className=' mt-6 ml-4 flex  text-center  items-center'>
                            <FontAwesomeIcon className='text-white text-4xl' icon={faDroplet} />
                            <p className=' font-light text-2xl text-[#00a8ec]'>Publish<span className='font-light text-[#4d4d4d]'>0</span><span className='text-[#4d4d4d] text-2xl font-light '>x</span></p>
                        </div>
                        <p className=' mt-4 font-extralight ml-4 text-white'>Interview with our CEO about the <br />future of Nexum</p>

                    </div>
                </div>
                {/* when on larger screen */}
                <div className=' hidden md:flex mt-4 lg:ml-34  '>
                    <div className=' rounded-md mx-8 border   border-[#054776] h-38 flex flex-col md:flex md:w-1/4'>
                        <div className=' mt-3 ml-4 flex text-center  items-center'>
                            <img className='w-8 ' src={Yahoofinance} alt="" />
                            <p className=' text-xl text-white font-extrabold'> Yahoo! Finance </p>
                        </div>
                        <p className=' mt- font-extralight ml-4 text-white'>Our Partnership with Investment <br /> Fund from UAE </p>

                    </div>

                    <div className=' rounded-md border border-[#054776] h-38 flex flex-col md:w-1/4'>
                        <div className=' mt-3 flex text-center  items-center'>
                            <img className='w-8 ml-3' src={Cryptopolitan} alt="" />
                            <p className=' text-l text-white font-extrabold'> Cryptopolitan </p>
                        </div>
                        <p className=' mt-1 font-extralight ml-4 text-white'>Nexum Building Blockchain-based <br /> Carbon Credit Exchange Platform</p>

                    </div>

                    <div className=' rounded-md mx-8 border border-[#054776] h-38 flex flex-col md:w-1/4'>
                        <div className=' mt-3 ml-4 flex  text-center  items-center'>
                            <FontAwesomeIcon className='text-white text-4xl' icon={faDroplet} />
                            <p className=' font-light text-2xl text-[#00a8ec]'>Publish<span className='font-light text-[#4d4d4d]'>0</span><span className='text-[#4d4d4d] text-2xl font-light '>x</span></p>
                        </div>
                        <p className=' mt-4 font-extralight ml-4 text-white'>Interview with our CEO about the <br />future of Nexum</p>

                    </div>
                </div>



                <div className=' mt-30'>
                    <p className=' text-white text-4xl font-bold text-center '>
                        Nexum Platform
                    </p>

                    
                        <div className='md:hidden flex flex-col gap-4 ml-6 ' > {/* when on mobile screen */}
                        <div className='mt-15 md:border border-[#023153] rounded-xl md:w-85'>
                            <p className=' text-[#00f0c4] text-4xl mt-10 font-medium text-center '>
                                Problems
                            </p>
                            <p className='text-center mt-5 text-white font-light'>
                                The very nature of shipping industry <br />presented big challenges that lead to:
                            </p>
                            <div className='mt-6 flex flex-col gap-6'>
                                <div className=' flex mx-6 gap-4'>
                                    <img src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Expensive Cross-border payments</p>
                                </div>
                                <div className=' flex mx-6 gap-4'>
                                    <img src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Delivery delays</p>
                                </div>
                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Difficulty in coordination within ship managers and between and buyers</p>
                                </div>

                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Financial loses resulted in bankruptcy</p>
                                </div>

                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Fragmented and incomplete data</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-15 md:border border-[#023153] rounded-xl md:w-85' >
                            <p className=' mt-10 text-[#00f0c4] text-4xl font-medium text-center '>
                                Solution
                            </p>

                            <p className=' mt-10 text-white font-extralight mx-5 text-center'>
                                Value is created only if you can provide solution for an existing problem.
                            </p>
                            <p className=' mt-5 text-white font-extralight mx-5 text-center'>
                                Nexum Platform powered by blockchain technology provides the solution by combining:
                            </p>

                            <img className='items-center p-10' src={Blockchain} alt="" />


                        
                    </div>

                    </div>


                    <div className='hidden md:flex gap-4 ml-6 lg:ml-70' > {/* when on larger screen */}
                        <div className='mt-15 md:border border-[#023153] rounded-xl md:w-85'>
                            <p className=' text-[#00f0c4] text-4xl mt-10 font-medium text-center '>
                                Problems
                            </p>
                            <p className='text-center mt-5 text-white font-light'>
                                The very nature of shipping industry <br />presented big challenges that lead to:
                            </p>
                            <div className='mt-6 flex flex-col gap-6'>
                                <div className=' flex mx-6 gap-4'>
                                    <img src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Expensive Cross-border payments</p>
                                </div>
                                <div className=' flex mx-6 gap-4'>
                                    <img src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Delivery delays</p>
                                </div>
                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Difficulty in coordination within ship managers and between and buyers</p>
                                </div>

                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Financial loses resulted in bankruptcy</p>
                                </div>

                                <div className=' flex mx-6 gap-4'>
                                    <img className='h-6' src={Bulletin} alt="-" />
                                    <p className='text-white font-light'> Fragmented and incomplete data</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-15 md:border border-[#023153] rounded-xl md:w-85' >
                            <p className=' mt-10 text-[#00f0c4] text-4xl font-medium text-center '>
                                Solution
                            </p>

                            <p className=' mt-10 text-white font-extralight mx-5 text-center'>
                                Value is created only if you can provide solution for an existing problem.
                            </p>
                            <p className=' mt-5 text-white font-extralight mx-5 text-center'>
                                Nexum Platform powered by blockchain technology provides the solution by combining:
                            </p>

                            <img className='items-center p-10' src={Blockchain} alt="" />


                        </div>
                    </div>
                    <div className=' rounded-md mx-6 mb-4 mt-10 border  border-[#054776] lg:mx-68'>
                        <p className=' px-2 text-center font-extralight m py-4 text-white'> Nexum Platform creates a <span className='font-bold'>transparent, efficient and cost- <br /> saving ecosystem </span>for each  player in the Shipping & Oil industry. <br /> </p>

                    </div>
                </div>


            </div>






        </div>
    )
}

export default FeatureSection;
