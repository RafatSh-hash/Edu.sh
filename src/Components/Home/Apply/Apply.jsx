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
        // <div id='ApplySection' className="p-32 relative my-16 md:my-24 lg:my-36 ">


        //     <div className="bg-banner-image bg-cover bg-center h-96"></div>


        //     <div className="absolute inset-0 bg-[#092847] bg-opacity-70 flex flex-col md:flex-row lg:flex-row justify-evenly items-center">
        //         <div className='grid grid-cols-2 gap-5'>
        //             <Odometer1></Odometer1>
        //             <Odometer2></Odometer2>
        //             <Odometer3></Odometer3>
        //             <Odometer4></Odometer4>

        //         </div>
        //         <div className='bg-[#ffffff] p-5 rounded-md w-96 shadow-2xl'>
        //             <form action="">
        //                 <div className='relative'>
        //                     <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Full Name</label>
        //                     <label htmlFor="userIcon"><img src={userIcon} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
        //                     <input type="text" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
        //                 </div>
        //                 <div className='relative'>
        //                     <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Email</label>
        //                     <label htmlFor="userIcon"><img src={email} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
        //                     <input type="email" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
        //                 </div>
        //                 <div className='relative'>
        //                     <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Phone</label>
        //                     <label htmlFor="userIcon"><img src={telephone} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
        //                     <input type="number" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
        //                 </div>
        //             </form>

        //             <div className="flex justify-center mt-10 w-full">
        //                 <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div id='ApplySection' className=' '>
            <div className=' bg-[#092847] bg-opacity-70  flex flex-col md:flex-row lg:flex-row justify-center items-center p-2 md:p-5 lg:p-10 w-full'>
                <div className='grid grid-cols-2 gap-5 w-[95%] my-5 md:w-1/2 lg:w-1/2 mx-auto p-0 md:p-5 lg:p-10'>
                    <Odometer1></Odometer1>
                    <Odometer2></Odometer2>
                    <Odometer3></Odometer3>
                    <Odometer4></Odometer4>

                </div>
                <form action="" className='bg-white w-[95%] my-5 md:w-1/2 lg:w-1/2 mx-auto p-3 md:p-5 lg:p-10 rounded-md'>
                    <div className='relative'>
                        <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Full Name</label>
                        <label htmlFor="userIcon"><img src={userIcon} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                        <input type="text" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                    </div>
                    <div className='relative'>
                        <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Email</label>
                        <label htmlFor="userIcon"><img src={email} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                        <input type="email" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                    </div>
                    <div className='relative'>
                        <label htmlFor="name" className='absolute left-3 top-5 pb-4 text-sm'>Phone</label>
                        <label htmlFor="userIcon"><img src={telephone} className='w-5 h-5 absolute right-3 top-5' alt="" /></label>
                        <input type="number" name="userName" className='bg-[#f4f7fc] text-sm border-2 border-black rounded-md py-6 bottom-0 mt-4 px-3  w-full' id="" />
                    </div>
                    <div className="flex justify-center mt-10 w-full">
                        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Apply;