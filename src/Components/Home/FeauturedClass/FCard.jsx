/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./fcard.css"
import teacherLogo from "../../../assets/teacher.png";
import lessonsLogo from "../../../assets/book-mark.png";
import scholarLogo from "../../../assets/graduate.png"

const FCard = ({ cardF }) => {
    const { price, title, teacher, thumb, lessons, students } = cardF;

    return (
        <div className=' border-2 border-gray-300 rounded-md overflow-hidden shadow-xl transition-all duration-500 hover:scale-105'>
            <div className='h-[65%] overflow-hidden thumbContainer'>
                <img src={thumb} className='w-full h-full ' alt="" />
            </div>
            <div className='p-3'>
                <h1 className='my-3 text-xl font-semibold'>{title}</h1>
                <div className='my-2 flex justify-between items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='w-4 h-4 rounded-full'>
                            <img src={teacherLogo} className='w-full h-full' alt="" />
                        </div>
                        <h1 className='text-orange-500 mx-2'>{teacher}</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <div className='w-4 h-4 rounded-full'>
                            <img src={lessonsLogo} className='w-full h-full' alt="" />
                        </div>
                        <h1 className='text-orange-500 mx-2'>{lessons}</h1>
                    </div>
                    <div className='flex justify-start items-center'>
                        <div className='w-4 h-4 rounded-full'>
                            <img src={scholarLogo} className='w-full h-full' alt="" />
                        </div>
                        <h1 className='text-orange-500 mx-2'>{students}</h1>
                    </div>
                </div>
                <hr className='w-[90%] mx-auto' />
                <div className='flex justify-between items-center bottom-0'>
                    <div className='w-[50%]'>
                        Rating
                    </div>
                    <div className='w-[50%]'>
                    </div><h1 className='text-green-400 font-semibold text-xl'>{price}</h1>
                </div>
            </div>
        </div>



    );
};

export default FCard;