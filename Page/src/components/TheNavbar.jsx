import React from 'react'
import myLogo from '../assets/personal_logo.png';

const TheNavbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center w-screen h-auto bg-black p-8">
            <div id="navlogo">
                <img src={myLogo} className="w-20 h-20" />
            </div>
            <div id="links">
                <ul className="md:flex hidden text-white font-bold gap-x-8">
                    <a>
                      Link  
                    </a>
                    <a>
                      Link  
                    </a>
                    <a>
                      Link  
                    </a>
                </ul>
            </div>
            <div id="menu-button" className="md:hidden flex text-white">
                <h2>Menu</h2>
            </div>
            <div id="cart-button" className="md:flex hidden text-white">
                <h2>Cart</h2>
            </div>
        </nav>
    )
}

export default TheNavbar