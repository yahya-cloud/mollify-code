import React, {useEffect, useState} from 'react';
import { GrInstagram } from '@react-icons/all-files/gr/GrInstagram';
import {GrLinkedinOption} from '@react-icons/all-files/gr/GrLinkedinOption';
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';
import './Person.css';

const Person = (props) => {

   const [width, setWidth] = useState(window.innerWidth);
   const imgBoxStyle = {backgroundImage: `url(${props.img})`} 

    useEffect(() => {

       function handelResize(){
           setWidth(window.innerWidth);
       }

       window.addEventListener('resize', handelResize);
        
        return () => {
           window.removeEventListener('resize', handelResize);
        }
    }, [])

    const iconStyle={fontSize: 25, color:"#acacac"}
   
   return (
   <div
   data-aos="fade-up" 
   data-aos-easing="ease-int-out" 
   data-aos-duration="800"
   data-aos-once= {false}  
   className="person">


   <div  className="person__infoContainer">

      <div
      data-aos="fade-up" 
      data-aos-easing="ease-int-out" 
      data-aos-duration="900"
      data-aos-once= {false}  
      data-aos-offset="-100"
      className="person__info" >

      <div
       style={width > 600 && !props.left ? {...imgBoxStyle, order:3}: imgBoxStyle}
           
       className="imgBox"></div>

       <div
      
       className="iconBox">
       <a href={props.insta}><GrInstagram style={iconStyle}/></a>  
       <a href={props.linkedin}><GrLinkedinOption style={iconStyle}/></a> 
       <a href={props.twitter}><FaTwitter style={iconStyle} /></a> 
       </div>


       </div>


       <div
      data-aos="fade-up" 
      data-aos-easing="ease-int-out" 
      data-aos-duration="900"
      data-aos-once= {false} 
      data-aos-offset="-100"
        style={ width > 600 && props.left ? {order:-1} : null}
        className="textBox" >
               <h3 className="textBox__name" >{props.name}</h3>
               <h5 className="textBox__position">{props.position}</h5>
               <p className="paragraph textBox__info">{props.text}</p>
       </div>
       </div> 
      
     

    </div>
    )
}

export default Person;