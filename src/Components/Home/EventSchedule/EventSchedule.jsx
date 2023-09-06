/* eslint-disable no-unused-vars */
import React from 'react';
import Eventcard from './Eventcard';

const EventSchedule = () => {

    const EventData = [
        {
            name: "J. Miller",
            hostImg: "https://i.ibb.co/QPSn6HP/author01.png",
            date: "Sunday 16, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "Product Design with Attractive UI/UX"

        },
        {
            name: "B. James",
            hostImg: "https://i.ibb.co/TkSTqkr/author02.png",
            date: "Monday 17, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "The Advancement of Artificial Intelligence"

        },
        {
            name: "C. Carter",
            hostImg: "https://i.ibb.co/JRJ18Px/author03.png",
            date: "Tuesday 18, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "Python For Everybody"

        },
        {
            name: "L. Sprak",
            hostImg: "https://i.ibb.co/kSXg3yH/author04.png",
            date: "Wednesday 19, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "The world is your workplace- A Freelances Story"

        },
        {
            name: "L. Lily",
            hostImg: "https://i.ibb.co/rQg9nMK/author05.png",
            date: "Thursday 20, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "Cybersecurity and Artificial Intelligence"

        },
        {
            name: "L. Gotty",
            hostImg: "https://i.ibb.co/T2vFc1Z/03-1.png",
            date: "Friday 21, December 2023",
            time: "10:00 AM(GMT +6)",
            title: "Full Stack Web Development"

        },

    ]

    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between mt-10'>
                <div>
                    <h3 className='text-2xl text-green-400 text-center md:text-left lg:text-left'>Upcoming Events</h3>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left text-orange-500'>Event <span className='text-black font-semibold'>Details</span></h1>
                </div>
                <div className='mt-3'>

                    <select className='bg-[#07294d] px-5 py-2 rounded-xl shadow-xl text-lg font-semibold text-white'>
                        <option className='bg-[#07294d] px-5 py-2 border-4 border-orange-500' name="ven1" id="ven1">Sunday 16 December 2023</option>
                        <option className='bg-[#07294d] px-5 py-2 border-4 border-orange-500' name="ven2" id="ven2">Monday 17 December 2023</option>
                        <option className='bg-[#07294d] px-5 py-2 border-4 border-orange-500' name="ven3" id="ven3">Tuesday 18 December 2023</option>
                        <option className='bg-[#07294d] px-5 py-2 border-4 border-orange-500' name="ven4" id="ven4">Wednesday 19 December 2023</option>
                        <option className='bg-[#07294d] px-5 py-2 border-4 border-orange-500' name="ven5" id="ven5">Thursday 20 December 2023</option>
                    </select>
                </div>
            </div>

            <div className='my-10 w-[95%] md:w-10/12 lg:w-11/12 mx-auto'>
                {EventData.map(event => <Eventcard key={event.title} event={event}></Eventcard>)}
            </div>
        </div>
    );
};

export default EventSchedule;