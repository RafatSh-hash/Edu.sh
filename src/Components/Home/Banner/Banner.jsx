/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImg from "../../../assets/banner.png";
import "./banner.css";

const Banner = () => {
    return (
        <div id='bannerContainer' className='relative w-full h-[60vh]'>
            <div className='absolute bg-black bg-opacity-70 h-full w-full flex  justify-between'>
                <div className='w-full md:w-full lg:w-[50%] flex flex-col justify-center items-center text-left p-10'>
                    <p className='text-left w-full text-xl md:text-2xl lg:text-3xl font-bold text-orange-400 my-5'>LOOKING TO EXPLORE</p>
                    <p className='text-3xl md:text-3xl lg:text-5xl  w-full text-left font-semibold text-white'>YOUR KNOWLEDGE</p>
                    <p className='text-white text-left'>Donec quis fermentum metus. Fusce nec eleifend urna. Sed id placerat erat. Aenean congue, metus sit amet sagittis tincidunt, augue odio vulputate meg ipsum dolor sit amet, consectetur ad.Donec quis fermentum metus. </p>
                    <div className='w-full flex justify-start items-center my-5'>
                        <button className="border-2 border-orange-400 bg-orange-300 transition-all duration-500 hover:scale-105 hover:bg-orange-500 text-black py-2 px-3 rounded-md text-base font-semibold me-5" type="submit">


                            View Courses

                        </button>
                        <button className="border-2 border-green-400 bg-green-300 transition-all duration-500 hover:scale-105 hover:bg-green-500 text-black py-2 px-3 rounded-md text-base font-semibold mx-5" type="submit">


                            Apply Now

                        </button>

                    </div>
                </div>
                <div className='relative sm:hidden md:hidden lg:block lg:w-[50%] '>
                    <div className='w-72 h-72 Green rounded-full bg-white bg-opacity-20 absolute z-10'></div>
                    <div className='w-60 h-60 Red rounded-full bg-white bg-opacity-10 absolute z-20'></div>
                    <div className='w-48 h-48 Blue rounded-full bg-white bg-opacity-5 absolute z-30'></div>
                    <div className='absolute bottom-0 z-40'>
                        <img src={bannerImg} alt='banner' className='w-full h-full object-cover' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;