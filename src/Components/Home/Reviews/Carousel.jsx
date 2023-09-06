/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Images from './Images';
import "./Carousel.css"


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> 🔸 </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> 🔸</div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (


        <div className="content w-full ">

            <div className="container ">
                <Slider {...settings}>
                    {Images.map((item) => (
                        <div key={item.id} className='p-3 md:p-5 lg:p-10 h-96 bg-black bg-opacity-30 rounded-md  border-2 border-black w-[90%] md:w-[60%] lg:w-[50%] mx-auto'>
                            <div className='flex justify-between items-center'>
                                <div className='w-16 my-3 h-16 rounded-full'>
                                    <img src={item.userThumb} className="w-full h-full rounded-full" />
                                </div>
                                <div className='hidden md:block lg:block'>
                                    <h1 className='text-white'>User Satisfication : {item.rating}</h1>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold text-white">{item.userName}, ({item.userPosition})</h2>
                            <p className="description text-sm text-white">{item.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>


    );
};

export default Carousel;