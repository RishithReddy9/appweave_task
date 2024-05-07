import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

function Cart({ cart, setCart }) {

    const handleDelete = (shirt) => {
        cart = cart.filter((item) => {
            return item.key !== shirt.key;
        })
        localStorage.removeItem(shirt.key)
        localStorage.setItem('cart', JSON.stringify(cart));
        const itemsInLocalStorage = localStorage.getItem("cart");
        setCart(JSON.parse(itemsInLocalStorage));
    }

    let newTotal = 0;
    let [total, setTotal] = useState(0);

    return (
        <>
            {cart[0] ? (
                <div className='mt-6 lg:ml-96 shadow-xl w-5/12 bg-slate-100' >
                    {
                        cart.map(shirt => {
                            let quantity = localStorage.getItem(shirt.key);
                            quantity = parseInt(quantity)
                            newTotal += shirt.price * quantity;
                            if (newTotal > total) {
                                setTotal(newTotal);
                            }

                            const handleAddQuantity = () => {
                                let currentQuantity = localStorage.getItem(shirt.key);
                                currentQuantity = parseInt(currentQuantity) + 1;
                                if (currentQuantity > shirt.maxQuantity) {
                                    toast.error('Maximum Quantity Reached')
                                } else {
                                    localStorage.setItem(shirt.key, currentQuantity)
                                    quantity = localStorage.getItem(shirt.key)
                                    setTotal(total + shirt.price)
                                }
                            }

                            const handleSubQuantity = () => {
                                let currentQuantity = localStorage.getItem(shirt.key);
                                currentQuantity = parseInt(currentQuantity) - 1;
                                if (currentQuantity === 0) {

                                } else {
                                    localStorage.setItem(shirt.key, currentQuantity)
                                    quantity = localStorage.getItem(shirt.key)
                                    setTotal(total - shirt.price)
                                }
                            }

                            return (
                                <div className='flex p-3 gap-6 justify-items-start items-center '>
                                    <div className='mr-3'>
                                        <img className="w-28 h-36 hover:scale-105 transition-scale duration-300" src={shirt.image_url} alt='shirt' />
                                    </div>
                                    <div className='mr-8 min-w-24'>
                                        <h1>{shirt.name}</h1>
                                        <h1>₹ {shirt.price * quantity}</h1>
                                    </div>
                                    <div className='mr-12 flex gap-3'>
                                        <button className=' bg-slate-400 h-7 w-7 font-semibold hover:scale-105 transition-scale duration-300 text-lg' onClick={() => handleSubQuantity()}>-</button>
                                        <h1>{quantity}</h1>
                                        <button className=' bg-slate-400 h-7 w-7 pb-2 font-semibold hover:scale-105 transition-scale duration-300 text-lg' onClick={() => handleAddQuantity()}>+</button>
                                    </div>
                                    <div className='flex bg-red-600 p-2 rounded-xl hover:scale-105 transition-scale duration-300 gap-1'>
                                        <DeleteIcon />
                                        <button onClick={() => handleDelete(shirt)} >Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='flex justify-between items-center pb-5 pt-4'>
                        <div>
                            <h1 className='text-2xl font-bold text-right ml-5 '>Grand Total: <span className='text-3xl'>₹{total}</span></h1>
                        </div>
                        <div className=''>
                            <button className='p-2 bg-green-500 rounded-lg pb-3 mr-16 hover:scale-105 transition-scale duration-300 text-xl font-semibold'>Pay Now</button>
                        </div>
                    </div>
                </div >
            ) : (
                <div className='flex justify-center min-h-96 items-center text-4xl font-bold'>
                    Your Cart is Empty...
                </div>
            )
            }
        </>
    )
}

export default Cart