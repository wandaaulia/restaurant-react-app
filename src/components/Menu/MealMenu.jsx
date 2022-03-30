import React from 'react';
import './MenuStyle.css';

const MealMenu = ({imgMeal, category}) => {

    const renderSwitch = (param) => {
        switch(param) {
            case 'Beef':
                return 'Steak';
            case 'Side':
                return 'Vegan Micro';
            case 'Pasta':
                return 'Red Pasta';
            case 'Miscellaneous':
                return 'Beef Burito';
            case 'Lamb':
                return 'Grill Lamb';
            case 'Vegetarian':
                return 'Traditional food';
            default:
                return 'ayam';
        } 
    }

    return (
        <>
          <div className=" w-2/5 p-2 width-30 lg:p-3 text-center">
                       <div className='2xl:flex 2xl:justify-center flex justify-center'> 
                       <img src={imgMeal} alt="img menu" className="lg:w-3/5 xl:w-3/5 md:w-4/5"/>
                       </div>
                       <div className="flex justify-center"> 
                       <div className="md:text-4xl lg:text-2xl 2xl:text-3xl xl:text-3xl"> {renderSwitch(category)} </div>
                       </div>
                        </div>
        </>
    )
}


export default MealMenu;