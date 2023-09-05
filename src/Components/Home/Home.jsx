/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FeauturedClass from './FeauturedClass/FeauturedClass';
import Apply from './Apply/Apply';
import EventSchedule from './EventSchedule/EventSchedule';
import OurTeachers from './OurTeachers/OurTeachers';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Features></Features>
            <FeauturedClass></FeauturedClass>
            <Apply></Apply>
            <EventSchedule></EventSchedule>
            <OurTeachers></OurTeachers>
        </div>
    );
};

export default Home;