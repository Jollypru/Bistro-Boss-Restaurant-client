import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
    }, [])

    return (
        <section className='mb-16'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 my-10'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-outline border-0 border-b-4 uppercase'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;