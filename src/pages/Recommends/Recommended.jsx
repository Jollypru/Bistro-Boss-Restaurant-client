import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FoodCard from '../../components/FoodCard/FoodCard';

const Recommended = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommendedItems = data.slice(6, 9);
                setItems(recommendedItems);
            })
    }, [])

    return (
        <section className='mb-20'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'Chef Recommends'}
            ></SectionTitle>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
                {
                    items.map(item => (
                        <FoodCard key={item._id} item={item}></FoodCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Recommended;