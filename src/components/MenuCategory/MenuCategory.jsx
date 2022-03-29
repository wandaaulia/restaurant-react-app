import React from 'react'


const MenuCategory = ({id, title, tags, price}) => {

    return (
    
            <div key={id}> 
            <div className='md:mt-5 mt-2 flex flex-row px-8 font-base'>
            <div className='left'> 
            <div className='md:text-4xl lg:text-xl 2xl:text-2xl'>
            {title} 
            </div>
             <div className='text-xs md:text-lg lg:text-xl 2xl:text-lg'> {tags}  </div>
            </div>
            <div className='grow w-10 2xl:w-44'/>
            <div className='2xl:text-2xl md:text-4xl lg:text-xl right flex flex-row items-center'>
                <div className="lg:mr-0 h-px w-8 mt-1 mr-2 bg-white"/>
                <div>
                {price} 
                </div>
            </div> 
            </div>
            </div> 

    )
}

export default MenuCategory;