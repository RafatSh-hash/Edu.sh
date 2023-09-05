/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Odometer2 = () => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const targetPercentage = 800;

    useEffect(() => {
        const updatePercentage = () => {
            if (currentPercentage < targetPercentage) {
                setCurrentPercentage((prevPercentage) => prevPercentage + 10);
            }
        };

        const intervalId = setInterval(updatePercentage, 5);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentPercentage]);

    return (
        <div className='flex flex-col w-48 h-44 justify-center items-center bg-white bg-opacity-20 rounded-md transition-all duraion-50 hover:scale-105 hover:bg-opacity-30'>

            <h1 className='text-4xl text-orange-500 font-semibold'>{`${currentPercentage}`}+ </h1>
            <p className='text-xl text-white font-semibold'>Students</p>
        </div>
    );
};

export default Odometer2;