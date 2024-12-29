import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImage from '../../assets/menu/banner3.jpg';
import dessertImage from '../../assets/menu/dessert-bg.jpeg';
import saladsImage from '../../assets/menu/salad-bg.jpg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImage}
                title={'Our Menu'}
            ></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu */}
            <MenuCategory items={desserts} title="Desserts" img={dessertImage}></MenuCategory>
            {/* pizzas menu */}
            <MenuCategory items={pizza} title={'Pizzas'} img={pizzaImage}></MenuCategory>
            {/* salads menu */}
            <MenuCategory items={salad} title='Salads' img={saladsImage}></MenuCategory>
            {/* soups menu */}
            <MenuCategory items={soup} title='Soups' img={saladsImage}></MenuCategory>

        </div>
    );
};

export default Menu;