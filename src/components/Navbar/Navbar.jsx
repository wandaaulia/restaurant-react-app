import React, { useState} from 'react';
import {GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';


import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
    
    const [toggleBar, setToggleBar] = useState(false);

    return (
        <nav className="background-black flex justify-between items-center w-full py-4 px-5 2xl:px-8"> 
            <div className="flex justify-start items-center app__navbar-logo">
                <img src={images.gericht} alt="app logo" />
            </div>
            <ul className="hidden lg:flex text-white justify-center items-center">
                <li className="mx-4"> <a href="#home"  className='hover:text-gray-300'> Home </a> </li>
                <li className="mx-4"> <a href="#menu" className='hover:text-gray-300'> Menu </a> </li>
                <li className='mx-4'> <a href="#contact" className='hover:text-gray-300'> Contact </a> </li>
            </ul>
            <div className="text-white hidden lg:flex"> 
            <a href="#login" className="mx-4"> Login </a>
            <div  className='w-px height-30 background-grey'/>
            <a href="/" className='mx-4'> Book Table </a>
            </div>

            <div className="lg:hidden xl:hidden flex static">
                <GiHamburgerMenu fontSize={27} color="#fff" onClick={() => setToggleBar(true)}/>

            { toggleBar && ( 
                <div className="absolute left-0  w-full background-black top-bar text-white py-2 px-8 flex flex-row-reverse justify-center"> 
                <MdOutlineRestaurantMenu fontSize={27} className="flex-none" onClick={() => setToggleBar(false)} / >
                <ul className="flex-1 text-center ">
                <li className="mx-4 pb-1 text-md md:text-2xl"> <a href="#home" className='hover:text-gray-300'> Home </a> </li>
                <li className="mx-4 pb-1 text-md md:text-2xl"> <a href="#menu" className='hover:text-gray-300'> Menu </a> </li>
                <li className='mx-4 pb-1 text-md md:text-2xl'> <a href="#Contanct" className='hover:text-gray-300'> Contact </a> </li>
                </ul>
                </div>
            )}
               
            </div>
        </nav>
    )
}

export default Navbar;