import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function CardLayout({ item, cart }) {

    const handleAddToCart = () => {
        let found = cart.filter((product) => item.key === product.key);
        if (found[0] === undefined) {
            cart.push(item);
            localStorage.setItem(item.key, 1);
            toast.success(`${item.name} added to cart`);
        } else {
            let quantity = localStorage.getItem(item.key);
            quantity = parseInt(quantity) + 1;
            localStorage.setItem(item.key, quantity);
            toast.success(`${item.name} added to cart`);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="bg-slate-300 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-scale duration-300 overflow-hidden">
            <img className="w-80 h-52 object-cover" src={item.image_url} alt="shirt" />
            <div className="p-4 ml-3">
                <h1 className="text-xl font-bold mt-2">{item.name}</h1>
                <div className='flex justify-between items-center mt-3'>
                    <h3 className="text-lg text-gray-500">Rs {item.price}</h3>
                    <div className='flex items-center gap-1 p-3 cursor-pointer text-green-500 hover:bg-green-500 hover:text-white rounded-2xl focus:bg-black'>
                        <ShoppingBagIcon />
                        <button onClick={() => handleAddToCart()}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardLayout;
