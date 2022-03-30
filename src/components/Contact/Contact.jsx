import React from 'react';
import SubHeading from '../SubHeading/SubHeading';


const Contact = () => {
 

    return (
        <div className="2xl:pt-16 lg:px-6 md:px-8 pt-12 md:pt-18 pb-8 px-4 md:px-8 background-black ">
            <div className="lg:gap-2 lg:justify-center flex lg:flex-row font-base flex-col text-white">
            <div className="lg:pt-6 lg:p-4 width-30  lg:mt-0 lg:order-none md:mt-4 order-2 mt-1 md:gap-1 flex flex-col justify-center gap-0 items-center"> 
                <h3 className="text-xl md:text-4xl lg:text-xl"> Contact Us </h3>
                <p className="text-md md:text-2xl lg:text-lg"> Pondok Bambu Street, Jakarta </p>
                <p className='text-md md:text-2xl lg:text-lg'> +62 23434567 </p>
                <p className="text-md md:text-2xl lg:text-lg"> +62 8123456 </p>
            </div>
            <div className="width-30 lg:p-4 lg:justify-start lg:gap-1 lg:order-none order-1 flex items-center flex-col gap-0 mb-4">
                <h3 className="text-3xl md:text-5xl font-semibold lg:text-2xl xl:text-3xl"> Geritch </h3>
                <p className='text-sm font-base md:text-2xl lg:text-lg xl:text-lg'> "Good Meal, Good Moment" </p>
                <div className="h-px mt-1 w-8 bg-white"/>
            </div>
            <div className="lg:pt-6 width-30 lg:p-4 lg:gap-1 lg:mt-0 lg:order-none mt-5 md:mt-8 order-3 flex items-center flex-col font-base"> 
             <h3 className='text-xl md:text-3xl lg:text-xl'> Working Hours </h3>
             <div className='pt-1 p-2 text-md md:text-2xl lg:text-lg'>
                 <p> Monday - Friday </p>
                 <p> 5:00 pm - 10:00 pm </p>
             </div>
             </div>
        </div>
        </div>
    )
}

export default Contact;