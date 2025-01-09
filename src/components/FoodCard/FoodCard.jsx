import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || '/';
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = food => {
        if(user && user.email){
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2500
                      });
                }
            }
            )
        }
        else{
            Swal.fire({
                title: "You are not logged in.",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send user to the login page
                navigate('/login')
                }
              });
        }

    }
    return (
        <div className="bg-gray-200 rounded-md shadow-md relative">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <p className='bg-black text-white absolute right-4 top-4 py-1 px-2'>${price}</p>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center h-[140px]">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p>{recipe}</p>
                </div>
                <button onClick={() => handleAddToCart(item)} className='w-1/2 mx-auto btn text-yellow-600 hover:bg-black border-0 border-b-4 border-yellow-600 uppercase'>Add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;