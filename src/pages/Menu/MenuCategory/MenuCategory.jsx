import React from 'react';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import Cover from '../../../shared/Cover/Cover';


const MenuCategory = ({ items, title, img }) => {

    return (
        <div className='my-10'>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-4 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-outline border-0 border-b-4 uppercase'>Order your favourite food </button>
            </div>
        </div>
    );
};

export default MenuCategory;