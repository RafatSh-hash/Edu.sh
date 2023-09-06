/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from './Carousel';
import students from "../../../assets/students.jpg";
import "./Reviews.css"

const Reviews = () => {

    return (
        <div className='w-[95%] mx-auto '>
            <div>
                <h3 className='text-2xl text-green-400 text-center md:text-left lg:text-left'>Reviews</h3>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left text-orange-500'>Success <span className='text-black font-semibold'>Stories</span></h1>
            </div>
            <div className=" review">

                <div className='bg-black bg-opacity-80 my-10 flex flex-col md:flex-row lg:flex-row items-center justify-evenly p-7 md:p-8 lg:p-16'>
                    <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center">
                        <Carousel />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <img
                            className="w-full h-full md:h-2/3 lg:h-2/3 shadow-2xl rounded-md transition-all duration-500 hover:scale-105 hover:-rotate-2"
                            src={students}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;