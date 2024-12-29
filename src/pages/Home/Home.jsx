import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../featured/Featured';
import Testimonials from '../testimonials/Testimonials';
import AboutUs from '../aboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Recommended from '../Recommends/Recommended';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AboutUs></AboutUs>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;