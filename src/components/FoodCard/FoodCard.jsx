import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="bg-gray-200 rounded-md shadow-md relative">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <p className='bg-black text-white absolute right-4 top-4 py-1 px-2'>${price}</p>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center h-[140px]">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p>{recipe}</p>
                </div>
                <button className='w-1/2 mx-auto btn text-yellow-600 hover:bg-black border-0 border-b-4 border-yellow-600 uppercase'>Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;