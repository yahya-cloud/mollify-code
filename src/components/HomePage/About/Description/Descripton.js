import React from 'react';
import './Description.css';

export const Description = (props) => {
    return (
        <div  className='description__container'>
        <div 
        data-aos-offset="100"
        data-aos="flip-up" 
        data-aos-easing="ease-int-out" 
        data-aos-duration="800" 
        data-aos-once= {true}  
        className='descriptionText__container'>
            <h2 className='sub__heading subHeading--description'>
              {props.heading}
            </h2>
            <p className='paragraph paragraph--description'>
             {props.paragraph}
            </p>
        </div>

        <div 
       
        data-aos="fade-right" 
        data-aos-easing="ease-int-out" 
        data-aos-duration="800"
        data-aos-once= {true}  
        style={ props.left ?  {order:-1} : null} className='descriptionSvg__container'>
        {props.svg}
        </div> 

        </div>
    )
}
