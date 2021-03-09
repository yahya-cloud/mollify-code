import React from 'react'
import './StatCard.css'


const StatCard = (props) => {

    return (
        <div 
        data-aos-once= {true}  
        data-aos-delay={props.animationDelay}
        data-aos="opacityWithTranslate" 
        className='statCard'
        style={{backgroundColor:`${props.color}`}}>

        <div className='overlay--statCard'></div>
            <h3 className='stat__num' >
            {props.num} 
            </h3>

            <h2 className=' stat__text'>
            {props.info}
            </h2>

        </div>
    )
}

export default StatCard;