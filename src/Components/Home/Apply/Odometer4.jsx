/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Odometer4 = () => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const targetPercentage = 13;

    useEffect(() => {
        const updatePercentage = () => {
            if (currentPercentage < targetPercentage) {
                setCurrentPercentage((prevPercentage) => prevPercentage + 1);
            }
        };

        const intervalId = setInterval(updatePercentage, 10);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentPercentage]);

    return (
        <div className='flex flex-col w-48 h-44 justify-center items-center bg-white bg-opacity-20 rounded-md'>

            <h1 className='text-4xl text-orange-500 font-semibold'>{`${currentPercentage}`}+ </h1>
            <p className='text-xl text-white font-semibold'>National Awards</p>
        </div>
    );
};

export default Odometer4;
