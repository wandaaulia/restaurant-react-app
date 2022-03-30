import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getMenu, valMenu } from '../../features/MenuSlices';
import axios from 'axios';
import MealMenu from './MealMenu';

import './MenuStyle.css';

const Menu = () => {

    const [mealName , setMealName] = useState('');

    const dispatch = useDispatch();
    const menuMeal = useSelector(valMenu);

    useEffect(() => {
        dispatch(getMenu());
    }, [dispatch]);

 

    return (
        <div className="pb-2 sm:pb-8 2xl:pt-20 lg:pt-10 pt-5 2xl:pb-10 background-black px-4 lg:px-6 text-white flex flex-col justify-center items-center "> 
        <p className='text-sm font-base md:text-2xl lg:text-lg'> The Best Meal for you </p>
        <div  className="h-px mt-1 w-8 bg-white"/>
        <h2 className="2xl:pt-4 font-semibold font-base pt-3 text-5xl color-golden md:text-7xl" id="menu"> Our Menu </h2>

        <div className="2xl:mt-5 text-white mt-4 font-base text-xl lg:px-0 justify-center gap-2 flex flex-row flex-wrap">
                {menuMeal.map((meal, index) => 
                   (
                    <MealMenu key={index} imgMeal={meal.strCategoryThumb} category={meal.strCategory} />
                   )
                )}
      
        </div>
        </div> 
    )
}

export default Menu;