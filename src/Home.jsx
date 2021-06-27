import React from 'react';
import Common from './Common';
import web from '../src/Images/home-banner.svg';

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgsrc={web} visit="/about" btname="Get Started" />
        </>
    )
};

export default Home;