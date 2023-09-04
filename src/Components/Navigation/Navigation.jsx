/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import scholar from "../../assets/scholar.png";

const Navigation = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className="bg-white w-full py-2">
            <div className=" mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <img src={Logo} className="w-40" alt="" />
                    </div>
                    <div className="hidden sm:block md:hidden lg:block">
                        <ul className="flex space-x-6">
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-white hover:border-orange-500 hover:bg-white py-2 px-2"><a href="/">Home</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-white hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">About Us</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-white hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Courses</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-white hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Blog</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-white hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Contact</a></li>
                        </ul>
                    </div>


                    <div className="md:hidden flex items-center justify-center">
                        <div className='mx-3'>
                            <label className="swap swap-rotate">


                                <input type="checkbox" />


                                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                        <button id="mobile-menu-button" className="mobile-menu-button focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:block  md:flex lg:flex items-center justify-center" >
                        <button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                            <div className="flex justify-evenly items-center w-32">
                                <div className="w-6 h-6 rounded-full me-2">
                                    <img src={scholar} className="w-full h-full" alt="" />
                                </div>
                                <p className="text-base font-semibold">Sign Up</p>
                            </div>
                        </button>
                        <div className='mx-3'>
                            <label className="swap swap-rotate">


                                <input type="checkbox" />


                                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <ul className="bg-white py-2 px-4  text-center grid grid-cols-2 gap-5">
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 " href="/">Home</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 " href="#">About Us</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105  " href="#">Courses</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105" href="#">Blog</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105" href="#">Contact</a></li>
                        <li>


                            <button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                                <div className="flex justify-evenly items-center w-36">
                                    <div className="w-6 h-6 rounded-full me-2">
                                        <img src={scholar} className="w-full h-full" alt="" />
                                    </div>
                                    <p className="text-base font-semibold">Sign Up</p>
                                </div>
                            </button>

                        </li>
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Navigation;