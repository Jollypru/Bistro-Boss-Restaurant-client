import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

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
                        <div key={item._id} className="bg-gray-200 rounded-md shadow-md">
                            <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2 text-center h-[140px]">
                                    <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                                    <p>{item.recipe}</p>
                                </div>
                                <button className='w-1/2 mx-auto btn text-yellow-600 hover:bg-black border-0 border-b-4 border-yellow-600 uppercase'>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Recommended;