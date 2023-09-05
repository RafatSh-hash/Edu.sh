/* eslint-disable no-unused-vars */
import React from 'react';
import "./Apply.css";
import Odometer1 from './Odometer1';
import Odometer2 from './Odometer2';
import Odometer3 from './Odometer3';
import Odometer4 from './Odometer4';

const Apply = () => {
    return (
        <div id='ApplySection' className="relative p-10">


            <div className="bg-banner-image bg-cover bg-center h-96"></div>


            <div className="absolute inset-0 bg-[#092847] bg-opacity-70 flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className='grid grid-cols-2 gap-5'>
                    <Odometer1></Odometer1>
                    <Odometer2></Odometer2>
                    <Odometer3></Odometer3>
                    <Odometer4></Odometer4>

                </div>

            </div>

        </div>
    );
};

export default Apply;