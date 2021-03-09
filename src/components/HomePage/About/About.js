import React, {useEffect, useState} from 'react'

import './About.css'; 
import '../../../index.css'; 
import VisionSvg from '../../Svg/VisionSvg/VisionSvg';
import ProcessSvg from '../../Svg/ProcessSvg/ProcessSvg';
import ApproachSvg from '../../Svg/ApproachSvg/ApproachSvg';
import { Description } from './Description/Descripton';


const AboutUs = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

       function handelResize(){
           setWidth(window.innerWidth);
       }

       window.addEventListener('resize', handelResize);
        
        return () => {
           window.removeEventListener('resize', handelResize);
        }
    }, [])

    const descriptions = [
        {
            heading: 'Our Vision',
            paragraph: ' Mental Health is an important part of our lives but alas a lot of people are unaware of the fact that there is something like that. According to a survey we conducted in the month of February 2021, 97.1% of people believe that people in this country ignore mental illness but on the contrary are suffering from the same. Mollify will not only help to create awareness about Mental Health but will also help you to solve them.  Social Stigma',
            svg:  <VisionSvg />,
            index:1
        },
        {
            heading: 'Our Approach',
            paragraph: ' Mollify has an easy to understand approach. We are going to make it easier for people who want to seek help from various health professionals. Around 42.2% of people of this country strongly believe that India is not doing enough in the field of Mental Health. Our company will provide people who want to seek help without caring about the stigma that is attached to it. ',
            svg:  <ApproachSvg />,
            left: width > 900 ? true : false,
            index:2
        },
        {
            heading: 'Our Process',
            paragraph: 'Mollify is a digital aggregator application platform which will help people connect with doctor/ psychologists to find the solution of the problems they’re facing. The process is not at all complicated and easy for everyone. The application will give you the liberty to choose timings, location, payment method according to your preference. The application provides you with an option to sync your calendar with your appointments. It will also include a planner of its own either way it can be synced with your Phone’s calendar.',
            svg:  <ProcessSvg />,
            index:3
        }
    ]

   


    return (
        <div id="about" className='about__container'>

        <div 
        data-aos="fade-up" 
        data-aos-easing="ease-int-out" 
        data-aos-duration="800"
        data-aos-once= {true}  
        className='aboutHeading__container'>
        
        <h1 className='main__heading '> About Us</h1>
        <p className='heading__text'>And more about Mollify</p>
        </div>

       {descriptions.map(descrip => (
           <Description
            key={descrip.index}
            heading= {descrip.heading}
            paragraph={descrip.paragraph}
            svg= {descrip.svg}
            left={descrip.left}
             />
       ))}


     

        </div>
    )
}

export default AboutUs;