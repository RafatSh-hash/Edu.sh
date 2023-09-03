/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Card = ({ card }) => {
    const { title, desc, img, colorClass } = card;
    return (
        <div className='bg-white shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center justify-center border-2 border-gray-300 p-5 rounded-xl'>
            <div className={`w-20 h-20 p-3 ${colorClass} rounded-2xl`}>
                <img className='w-full h-full' src={img} alt="img-Education" />
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font-semibold text-center my-6'>{title}</h1>
                <hr className='w-[10%] mx-auto h-2 bg-green-200 hover:bg-green-300' />
                <p className='text-justify text-base'>{desc}</p>
            </div>
        </div >)

};

export default Card;