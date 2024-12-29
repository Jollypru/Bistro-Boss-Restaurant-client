import React from 'react';
import featuredImage from '../../assets/home/featured.jpg';
import './Featured.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg-cover text-white pt-5'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'Featured item'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 gap-5 mt-5 py-14 px-40'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2025</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae placeat, error eligendi minima quaerat, nemo ipsum iure quas ab deserunt ad? Voluptate earum, dolor fugit dolorum architecto praesentium quo placeat non aliquid sapiente alias nemo, rerum, maiores eius numquam provident reprehenderit. Qui cupiditate molestias dolore eveniet soluta impedit vitae dolores.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;