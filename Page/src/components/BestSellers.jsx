import React from 'react'

import pinkSweatshirt from '../assets/clothes/pink-sweatshirt.png';
import ashSweatshirt from '../assets/clothes/ash-sweatshirt.png';
import ashWindbreaker from '../assets/clothes/ash-windbreaker.png';

const items = [
    {
        id: 1,
        imageSrc: pinkSweatshirt,
        name: 'Pink Sweatshirt',
        price: '$800',
    },
    {
        id: 2,
        imageSrc: ashSweatshirt,
        name: 'Ash Sweatshirt',
        price: '$800',
    },
    {
        id: 3,
        imageSrc: ashWindbreaker,
        name: 'Ash Windbreaker',
        price: '$800',
    },
    {
        id: 4,
        imageSrc: pinkSweatshirt,
        name: 'Pink Sweatshirt',
        price: '$800',
    },
]

// Cols 2 Rows 2 scaling in size ( W-full pictures with a max-w/h ? )

const BestSellers = () => {
    return (
        <section id="best-sellers" className="flex justify-center items-center p-2 pt-4 w-screen h-fit">
            <div id="bs-wrapper" className="grid grid-cols-2 grid-rows-2 gap-2">
                {items.map((item) => (
                    <div key={item.id} id="best-seller-item" className="mb-4">
                        <img src={item.imageSrc} alt={item.name} className="w-full h-fit max-w-[175px] max-h-[175px]" />
                        <div className="">
                            <h2 className="">{item.name}</h2>
                            <p className="">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BestSellers