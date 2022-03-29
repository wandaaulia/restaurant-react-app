import React from 'react';
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading'
import './Header.css';

const Header = () => {

    return (
        <div className="2xl:pb-8 lg:pb-6 2xl:px-10 flex flex-col lg:flex-row lg:pt-18 pb-10 pt-8 px-8 lg:px-16 text-white lg:gap-x-1 background-black"> 
        <div className="lg:flex-1 flex flex-col pb-8 md:pb-20 lg:pb-28 items-start justify-center">
            <SubHeading title="Chase The New Flavour"/>
            <div> 
            <h1 className='font-base font-bold capitalize text-5xl md:text-8xl md:py-6 lg:text-6xl 2xl:text-8xl color-golden py-2'> The Key To Fine Dining </h1>
            <p className="text-xs md:text-2xl lg:text-2xl font-base font-normal capitalize "> lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p> 
            <button className='text-black md:text-2xl md:mt-3 lg:text-2xl rounded mt-2 p-1 text-base bg-white font-bold font-base background-crimson'> Explore Menu</button>
            </div>
        </div>



        <div className='lg:flex-1 lg:px-2 lg:py-32 md:pb-8 flex justify-center'>
            <img src={images.welcome} alt="img welcome" className="w-4/5"/>
        </div>

        </div>
    )
}

export default Header;