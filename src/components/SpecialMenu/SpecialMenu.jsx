import React from 'react'
import { images, data } from '../../constants';
import MenuCategory from '../MenuCategory/MenuCategory';

const SpecialMenu = () => {

    //images.menu

    return (
        <div className="2xl:pt-0 background-black px-4 md:px-8 text-white pb-5 pt-10">

        <div className="flex flex-col justify-center items-center "> 
        <p className='text-sm font-base md:text-2xl lg:text-lg'> The Best Juice & Dessert for you </p>
        <div  className="h-px mt-1 w-8 bg-white"/>
        <h2 className="md:text-7xl 2xl:text-7xl lg:text-6xl font-base pt-3 text-5xl color-golden font-semibold"> Today's Special </h2>
        </div>

        <div className=' 2xl:mt-4 lg:flex-row text-white flex flex-col justify-center'> 

            <div className="2xl:pt-5 2xl:py-12 lg:py-5 w-full md:w-full lg:flex 2xl:px-4 2xl:w-3/5 lg:w-2/5 lg:order-none juice order-2 py-5 flex lg:justify-start items-center pt-5 justify-center flex-col"> 
            <h1 className='2xl:text-5xl md:text-6xl lg:pb-4 font-base lg:text-3xl text-3xl pb-2'> Juice </h1>
            <div className="md:px-28 lg:px-0 2xl:px-0 lg:w-auto px-0 w-full md:px-32">
                { data.juice.map((d, index) => (
                <MenuCategory key={index} id={index} title={d.title} tags={d.tags} price={d.price} />
                ))}
            </div>
            </div> 
            <div className='2xl:py-0 2xl:w-2/5 xl:w-2/5 lg:w-2/5 lg:px-0 lg:flex lg:order-none images-menu py-4 order-1'> 
            <img src={images.menu} alt="img menu" className="w-3/5 lg:w-full xl:w-4/5 mx-auto" />
            </div>

            <div className='2xl:pt-5 2xl:py-12 lg:py-5 w-full 2xl:w-3/5 lg:w-2/5 lg:px-0 lg:flex lg:order-none  dessert order-3 py-5 flex items-center pt-5 lg:justify-start justify-center flex-col'>
            <h1 className='text-3xl 2xl:text-5xl md:text-6xl font-base lg:text-3xl pb-2 lg:pb-6'> Dessert </h1>
            <div className="md:px-28 px-0 lg:w-auto lg:px-0 w-full md:px-32">
                { data.dessert.map((d, index) => (
                <MenuCategory key={index} id={index} title={d.title} tags={d.tags} price={d.price} />
                ))}
            </div>
            </div>
        </div>
     
        </div>
    )
}


export default SpecialMenu;