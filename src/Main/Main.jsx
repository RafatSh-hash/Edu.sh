/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {

    return (
        <div>
            <div className='sticky z-50 top-0'>
                <Navigation></Navigation>
            </div>
            <div className='my-5 md:my-7 lg:my-10'>
                <Outlet></Outlet>
            </div>
            <div className='mt-10 '>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;