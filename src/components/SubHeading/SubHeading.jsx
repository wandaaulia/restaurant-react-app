import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title}) => {


    return (
        <div className='subheading'> 
        <h3 className="text-xs pb-2 md:text-base capitalize font-bold"> {title} </h3>
        <img src={images.spoon} alt="img spoon" className="w-11 md:w-14"/>
        </div>
    )
}


export default SubHeading;