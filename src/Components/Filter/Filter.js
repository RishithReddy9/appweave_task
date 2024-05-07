import React from 'react'

function Filter({ setSelected }) {

    return (
        <>
            <h1 className='mb-2 font-semibold text-2xl'>Gender</h1>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={() => setSelected(null)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-md font-medium text-black">All</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={(event) => setSelected(event.target.value)} type="radio" value="Male" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 font-medium text-black text-md">Male</label>
            </div>
            <div class="flex items-center">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value="Female" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">Female</label>
            </div>

            <h1 className='mb-2 mt-4 font-semibold text-2xl'>Color</h1>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={() => setSelected(null)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-sm font-medium text-black ">All</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={(event) => setSelected(event.target.value)} type="radio" value="Green" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-sm font-medium text-black ">Green</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value="Blue" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 text-sm font-medium text-black">Blue</label>
            </div>
            <div class="flex items-center">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value="White" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 text-sm font-medium text-black">White</label>
            </div>

            <h1 className='mb-2 mt-4 font-semibold text-2xl'>Price</h1>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={() => setSelected(null)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-md font-medium text-black">All</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={(event) => setSelected(event.target.value)} type="radio" value={250} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 font-medium text-black text-md">0 - 250</label>
            </div>
            <div class="flex items-center">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value={500} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">250-500</label>
            </div>

            <h1 className='mb-2 mt-4 font-semibold text-2xl'>Type</h1>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={() => setSelected(null)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-md font-medium text-black">All</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={(event) => setSelected(event.target.value)} type="radio" value='polo' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 font-medium text-black text-md">Polo</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value='Hoodie' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">Hoodie</label>
            </div>
            <div class="flex items-center">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value='Basic' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">Basic</label>
            </div>

            <h1 className='mb-2 mt-4 font-semibold text-2xl'>Size</h1>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={() => setSelected(null)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 text-md font-medium text-black">All</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-1" onChange={(event) => setSelected(event.target.value)} type="radio" value='S' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                <label for="default-radio-1" class="ms-2 font-medium text-black text-md">S</label>
            </div>
            <div class="flex items-center mb-3">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value='M' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">M</label>
            </div>
            <div class="flex items-center">
                <input id="default-radio-2" onChange={(event) => setSelected(event.target.value)} type="radio" value='L' name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                <label for="default-radio-2" class="ms-2 font-medium text-black text-md">L</label>
            </div>
        </>
    )
}

export default Filter