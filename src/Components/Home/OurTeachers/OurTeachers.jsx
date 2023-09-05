/* eslint-disable no-unused-vars */
import React from 'react';
import instructor1 from "../../../assets/instructor1.png";
import instructor2 from "../../../assets/instructor2.png";
import instructor3 from "../../../assets/instructor3.png";
import instructor4 from "../../../assets/instructor4.png";

const OurTeachers = () => {
    return (
        <div className='my-10 md:my-20 lg:my-32'>
            <div>
                <h3 className='text-2xl text-green-400 text-center md:text-left lg:text-left'>Our Teachers</h3>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left text-orange-500'>Awesome <span className='text-black font-semibold'>Instructors</span></h1>
            </div>
            <div className='my-10 relative flex flex-col md:flex-row lg:flex-row items-center justify-evenly gap-5 w-full'>
                <div className='w-56 my-14'>
                    <div className='w-56 h-56 rounded-full z-10 relative'>
                        <div className='group w-full h-full rounded-full shadow-2xl  overflow-hidden'>
                            <img src={instructor1} className='w-full h-full object-cover transition-all duration-500 hover:scale-105' alt="" />
                        </div>
                        <div className='absolute w-full py-4 px-6 rounded-md -mt-5 bg-white shadow-xl text-center z-20'>
                            <h1 className='text-xl font-semibold'>SANDRA RILEY</h1>
                            <p>Professor</p>
                        </div>
                    </div>
                </div>
                <div className='w-56  my-14'>
                    <div className='w-56 h-56 rounded-full z-10 relative'>
                        <div className='group w-full h-full rounded-full shadow-2xl  overflow-hidden'>
                            <img src={instructor2} className='w-full h-full object-cover transition-all duration-500 hover:scale-105' alt="" />
                        </div>
                        <div className='absolute w-full py-4 px-6 rounded-md -mt-5 bg-white shadow-xl text-center z-20'>
                            <h1 className='text-xl font-semibold'>ALISON BEAKER</h1>
                            <p>Asst. Professor</p>
                        </div>
                    </div>
                </div>
                <div className='w-56  my-14'>
                    <div className='w-56 h-56 rounded-full z-10 relative'>
                        <div className='group w-full h-full rounded-full shadow-2xl  overflow-hidden'>
                            <img src={instructor3} className='w-full h-full object-cover transition-all duration-500 hover:scale-105' alt="" />
                        </div>
                        <div className='absolute w-full py-4 px-6 rounded-md -mt-5 bg-white shadow-xl text-center z-20'>
                            <h1 className='text-xl font-semibold'>FRANK ARMANY</h1>
                            <p>INSTRUCTOR, TEACHER</p>
                        </div>
                    </div>
                </div>
                <div className='w-56  my-14'>
                    <div className='w-56 h-56 rounded-full z-10 relative'>
                        <div className='group w-full h-full rounded-full shadow-2xl  overflow-hidden'>
                            <img src={instructor4} className='w-full h-full object-cover transition-all duration-500 hover:scale-105' alt="" />
                        </div>
                        <div className='absolute w-full py-4 px-6 rounded-md -mt-5 bg-white shadow-xl text-center z-20'>
                            <h1 className='text-xl font-semibold'>MANUEL NEUR</h1>
                            <p>Professor</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default OurTeachers;