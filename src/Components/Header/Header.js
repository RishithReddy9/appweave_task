import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='flex items-center justify-between p-4' style={{ backgroundColor: '#0077b6' }}>
            <Link to='/'>
                <h1 className='text-3xl font-bold'>TeeRex Store</h1>
            </Link>
            <ul className='flex items-center gap-5 text-xl pr-4'>
                <Link to='/'>
                    <li className='hover:bg-sky-200 p-2 cursor-pointer rounded-xl'>Products</li>
                </Link>
                <Link to='/cart'>
                    <div className='hover:bg-sky-200 cursor-pointer p-3 rounded-3xl'>
                        <FaCartShopping />
                    </div>
                </Link>
            </ul>
        </div>
    )
}

export default Header