import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import CardLayout from '../Cards/CardLayout';
import data from '././data.json'
import Filter from '../Filter/Filter';
import './Home.css'

function Home({ cart }) {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(null);

    const filteredItem = data.shirts.filter(product => {
        if (query === "") {
            if (selected !== null) {
                if (product.gender === selected || product.color === selected || product.size === selected) return product;
            } else {
                return product;
            }
        } else if (product.name.toLowerCase().includes(query?.toLowerCase())) {
            if (selected !== null) {
                if (product.gender === selected || product.color === selected || product.size === selected) return product;
            } else {
                return product;
            }
        }
        return null;
    });


    return (
        <div>
            <div>
                <div className='flex mx-auto border-slate-700 border-2 rounded-md p-2 w-96 mt-6'>
                    <LuSearch className='items-center text-2xl mr-2' />
                    <input className='block w-96 focus:outline-none' type="text" placeholder='Search...' onChange={event => setQuery(event.target.value)} />
                </div>
                <div className='flex gap-28'>
                    <div className='ml-12 flex flex-col flex-wrap border-2 pr-24 pl-6 pt-6 bg-slate-300 rounded-2xl  min-h-screen pb-3'>
                        <Filter setSelected={setSelected} />
                    </div>
                    {filteredItem[0] ? <div className='flex flex-wrap gap-8 mt-7'>
                        {
                            filteredItem.map(item => {
                                return (
                                    <div>
                                        <CardLayout item={item} cart={cart} />
                                    </div>
                                )
                            })
                        }
                    </div> : <div className='flex items-center mx-auto pr-28 text-4xl font-bold'>
                        No Results Found...
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Home