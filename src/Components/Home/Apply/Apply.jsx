/* eslint-disable no-unused-vars */
import React from 'react';
import "./Apply.css";
import Odometer1 from './Odometer1';
import Odometer2 from './Odometer2';
import Odometer3 from './Odometer3';
import Odometer4 from './Odometer4';
import userIcon from "../../../assets/user.png"
import telephone from "../../../assets/telephone.png";
import email from "../../../assets/email.png"

const Apply = () => {
    return (
        <div id='ApplySection' className="p-32 relative my-16 md:my-24 lg:my-36 ">


            <div className="bg-banner-image bg-cover bg-center h-96"></div>


            <div className="absolute inset-0 bg-[#092847] bg-opacity-70 flex flex-col md:flex-row lg:flex-row justify-evenly items-center">
                <div className='grid grid-cols-2 gap-5'>
                    <Odometer1></Odometer1>
                    <Odometer2></Odometer2>
                    <Odometer3></Odometer3>
                    <Odometer4></Odometer4>

                </div>
                <div className='bg-white p-5 rounded-md w-96'>
                    <form action="">
                        <div className='relative'>
                            <label htmlFor="name" className='absolute left-3 top-5 pb-4'>Full Name</label>
                            <label htmlFor="userIcon"><img src={userIcon} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                            <input type="text" name="userName" className='bg-gray-100 text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                        </div>
                        <div className='relative'>
                            <label htmlFor="name" className='absolute left-3 top-5 pb-4'>Email</label>
                            <label htmlFor="userIcon"><img src={email} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                            <input type="email" name="userName" className='bg-gray-100 text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                        </div>
                        <div className='relative'>
                            <label htmlFor="name" className='absolute left-3 top-5 pb-4'>Phone</label>
                            <label htmlFor="userIcon"><img src={telephone} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                            <input type="number" name="userName" className='bg-gray-100 text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                        </div>
                    </form>

                    <div className="flex justify-center mt-10 w-full">
                        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Apply;