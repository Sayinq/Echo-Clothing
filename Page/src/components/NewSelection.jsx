import React from 'react';
import '../index.css';

import refWindbreaker from '../assets/clothes/reflective-purple-windbreaker.png';
import mrefWindbreaker from '../assets/clothes/3m-purple-windbreaker.png';
import creamSweatshirt from '../assets/clothes/cream-sweatshirt.png';
import ashHat from '../assets/clothes/ash-hat.png';
import ashPuffer from '../assets/clothes/ash-puffer.png';

const items = [
    {
        id: 1,
        imageSrc: refWindbreaker,
        name: 'Reflective Windbreaker',
        price: '$1200',
    },
    {
        id: 2,
        imageSrc: ashHat,
        name: 'Ash Hat',
        price: '$800',
    },
    {
        id: 3,
        imageSrc: creamSweatshirt,
        name: 'Cream Sweatshirt',
        price: '$800',
    },
    {
        id: 4,
        imageSrc: mrefWindbreaker,
        name: '3M Windbreaker',
        price: '$800',
    },
    {
        id: 5,
        imageSrc: ashPuffer,
        name: 'Ash Puffer',
        price: '$800',
    },


  ];
  
  const NewSelections = () => {
    return (
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-scroll pb-6 snap-x cursor-grab">
          {items.map((item) => (
            <div key={item.id} id="new-item" className="basis-[250px] snap-start mr-[16px] cursor-pointer">
              <img src={item.imageSrc} alt={item.name} className="w-[250px] max-w-[250px] max-h-[250px] h-fit" />
              <div className="">
                <h2 className="text-[1.25rem] font-medium m-0">{item.name}</h2>
                <p className="m-0">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NewSelections;