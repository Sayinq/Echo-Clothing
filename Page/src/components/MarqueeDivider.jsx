import React from 'react'
import Marquee from 'react-fast-marquee';
import globeLogo from '../assets/globe-outline.svg';

const MarqueeDivider = () => {
    return (
        <div id="marquee-wrapper" className="bg-black py-[2px]">
            <Marquee speed={25} autoFill={true} 
                className="flex flex-row justify-center items-center bg-white">
                <h1 className="text-medium text-3xl px-4">BEST SELLERS</h1>
                <img src={globeLogo} className="w-6 h-6" />
                <h1 className="text-medium text-3xl px-4">BEST SELLERS</h1>
                <img src={globeLogo} className="w-6 h-6" />
                <h1 className="text-medium text-3xl px-4">BEST SELLERS</h1>
                <img src={globeLogo} className="w-6 h-6" />
                <h1 className="text-medium text-3xl px-4">BEST SELLERS</h1>
                <img src={globeLogo} className="w-6 h-6" />
            </Marquee> 
        </div>
    )
}

export default MarqueeDivider