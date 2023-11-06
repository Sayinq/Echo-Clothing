import React from 'react'
import myLogo from '../assets/echo_logo.png';

const TheNavbar = () => {
    return (
        <nav className="flex flex-row sticky top-0 left-0 justify-between items-center w-screen h-auto backdrop-blur-sm px-8 z-50">
            <div id="navlogo justify-start items-center">
                <img src={myLogo} className="scale-[30%]" />
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