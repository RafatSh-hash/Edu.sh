/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Eventcard = ({ event }) => {

    const { name, date, time, title, hostImg } = event;
    console.log(name, date, time, title, hostImg)
    return (

        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center py-2 px-5 border-2 border-gray-200 rounded-xl shadow-xl my-5'>
            <div className='w-full md:w-[10%] lg:w-[10%] border-4 border-r-orange-500
             border-l-white border-t-white border-b-white'>
                <div className='flex flex-col items-center justify-center p-2'>
                    <div className='w-14 h-14 rounded-full my-2'>
                        <img src={hostImg} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='text-md'>{name}</h1>
                </div>

            </div>
            <div className='w-2 h-full bg-gray-700'>
            </div>
            <div className=' w-full md:w-[80%] lg:w-[80%]'>
                <div className='flex flex-col md:flex-row lg:flex-row items-center justify-start'>
                    <h1 className='text-lg text-center my-1 mx-3'>{time}</h1>
                    <h1 className='text-lg text-center my-1 mx-3'>{date}</h1>
                </div>
                <h1 className='text-2xl text-center md:text-left lg:text-left my-2 font-semibold mx-3'> {title}</h1>
            </div>
            <div className='w-full md:w[10%] lg:w-[10%]'>
                <button className="border-2 w-full border-orange-400 bg-orange-300 transition-all duration-500 hover:scale-105 hover:bg-orange-500 text-black py-2 px-3 rounded-md text-base font-semibold me-5" type="submit">


                    Join

                </button>
            </div>
        </div>

    );
};

export default Eventcard;