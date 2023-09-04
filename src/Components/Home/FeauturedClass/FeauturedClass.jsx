/* eslint-disable no-unused-vars */
import React from 'react';
import FCard from './FCard';

const FeauturedClass = () => {

    const classData = [
        {
            title: "Strategic Social Marketing ",
            teacher: "Parker",
            lessons: "15 Lessons",
            students: "25 Students",
            price: "$29.39",
            thumb: "https://i.ibb.co/Gv3xyZT/05.png"
        },
        {
            title: "Mastering Web-development",
            teacher: "Weisley",
            lessons: "50 Lessons",
            students: "63 Students",
            price: "$59.99",
            thumb: "https://i.ibb.co/n8FvzPc/02.png"
        },
        {
            title: "Human Psychological Attractions",
            teacher: "Ema",
            lessons: "47 Lessons",
            students: "56 Students",
            price: "$41.99",
            thumb: "https://i.ibb.co/3WP7LDS/03.png"
        },
        {
            title: "Strategic Social Media ",
            teacher: "Parker",
            lessons: "15 Lessons",
            students: "25 Students",
            price: "$29.99",
            thumb: "https://i.ibb.co/Gv3xyZT/05.png"
        },
        {
            title: "Three chapters of History",
            teacher: "Adam",
            lessons: "28 Lessons",
            students: "26 Students",
            price: "$39.99",
            thumb: "https://i.ibb.co/k2wgzfd/04.png"
        },
        {
            title: "Engagement of UX in UI",
            teacher: "Albus",
            lessons: "46 Lessons",
            students: "75 Students",
            price: "$69.99",
            thumb: "https://i.ibb.co/Gv3xyZT/05.png"
        }
    ]
    return (
        <div >
            <div>
                <h3 className='text-2xl text-green-400 text-center md:text-left lg:text-left'>Top Courses</h3>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left text-orange-500'>Featured <span className='text-black font-semibold'>Online Courses</span></h1>
            </div>
            <div id='featuredClassBG' className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-3'>
                {
                    classData.map(cardF => (<FCard key={cardF.price} cardF={cardF}></FCard>))
                }
            </div>
        </div>
    );
};

export default FeauturedClass;