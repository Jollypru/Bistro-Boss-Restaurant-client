
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-16'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 my-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-outline border-0 border-b-4 uppercase'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;