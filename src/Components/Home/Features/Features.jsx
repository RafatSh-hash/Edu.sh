/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';

const Features = () => {

    const data = [
        {
            title: "Education Services",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe officiis facilis, natus nisi quos possimus harum ducimus nesciunt dolorem.",
            img: "https://i.ibb.co/BLgPjLx/magic-book.png",
            colorClass: "bg-green-200 hover:green-500"
        },
        {
            title: "Online/Offline Class",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe officiis facilis, natus nisi quos possimus harum ducimus nesciunt dolorem.",
            img: "https://i.ibb.co/s6mmgHG/learning.png",
            colorClass: "bg-blue-200 hover:blue-500"
        },
        {
            title: "Expert Mentor",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe officiis facilis, natus nisi quos possimus harum ducimus nesciunt dolorem.",
            img: "https://i.ibb.co/SX6cPvq/online-counseling.png",
            colorClass: "bg-orange-200 hover:orange-500"
        },
        {
            title: "Lifetime Support",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe officiis facilis, natus nisi quos possimus harum ducimus nesciunt dolorem.",
            img: "https://i.ibb.co/g9Gw1Td/support.png",
            colorClass: "bg-pink-200 hover:pink-500"
        },


    ]

    return (
        <div className='my-10 md:my-20 lg:my-32 p-5'>
            <div>
                <h3 className='text-2xl text-green-400 text-center md:text-left lg:text-left'>Features</h3>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center md:text-left lg:text-left text-orange-500'>Our Special <span className='text-black font-semibold'>Features</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14'>
                {data.map(card => <Card card={card} key={card.title}></Card>)}
            </div>
        </div>
    );
};

export default Features;