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
        <div className="w-full">
            <div className=" mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <img src={Logo} className="w-40" alt="" />
                    </div>
                    <div className="hidden sm:block md:hidden lg:block">
                        <ul className="flex space-x-6">
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-orange-300 hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Home</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-orange-300 hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">About Us</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-orange-300 hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Courses</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-orange-300 hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Blog</a></li>
                            <li className="text-gray-600 hover:text-black font-semibold w-28 text-center bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 border-2 border-orange-300 hover:border-orange-500 hover:bg-white py-2 px-2"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button id="mobile-menu-button" className="mobile-menu-button focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:block md:block">
                        <button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                            <div className="flex justify-evenly items-center w-32">
                                <div className="w-6 h-6 rounded-full me-2">
                                    <img src={scholar} className="w-full h-full" alt="" />
                                </div>
                                <p className="text-base font-semibold">Sign Up</p>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <ul className="bg-white py-2 px-4  text-center grid grid-cols-2 gap-5">
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 bg-orange-500 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 text-white" href="#">Home</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 text-white" href="#">About Us</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105 text-white " href="#">Courses</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105" href="#">Blog</a></li>
                        <li><a className="block py-2 font-semibold hover:bg-orange-500 text-white bg-orange-400 bg-opacity-40 rounded-md transition-all duration-500 hover:scale-105" href="#">Contact</a></li>
                        <li><button className="border-2 border-orange-400 transition-all duration-500 hover:scale-105 hover:bg-white text-black py-2 px-3 rounded-md" type="submit">
                            <div className="flex justify-evenly items-center w-36">
                                <div className="w-6 h-6 rounded-full me-2">
                                    <img src={scholar} className="w-full h-full" alt="" />
                                </div>
                                <p className="text-base font-semibold">Sign Up</p>
                            </div>
                        </button></li>
                    </ul>
                </div>
            )}
        </div>

    );
};

export default Navigation;