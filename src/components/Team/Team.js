import React from 'react';

import './Team.css';
import '../../index.css';
import Person from './Person/Person';
import Button from '../UI/Button/Button';
import {people} from './peopleObject';

const Team = (props) => {

    let peopleData = Object.keys(people)
    .map(personKey => {
        return [people[personKey]]
    })
    .reduce((arr, el) => arr.concat(el), [])


    return (
        <div  className="team__section">

            <div className="teamText__container">
           <div className='teamText__container--overlay'></div> 
                <h1
                data-aos="fade-left" 
                data-aos-easing="ease-int-out" 
                data-aos-duration="800"
                data-aos-once= {false} 
                className="main__heading heading--teamPage ">
                We’are proud of our team and always looking for more people with a similar passion.
                </h1>
                <div
                data-aos="fade-right" 
                data-aos-easing="ease-int-out" 
                data-aos-duration="800"
                data-aos-once= {false} 
                style={{zIndex:100}}>
                <Button linkTo="/career" buttonType="buttonNavigate">Career</Button>
                </div>
               
            </div>

            <div className="people__container">
            <h1
              data-aos="fade-up" 
              data-aos-easing="ease-int-out" 
              data-aos-duration="800"
              data-aos-once= {false}  
              className="sub__heading peopleContainer--heading">
              CraftsMen
            </h1>       
            

            {
                peopleData.map((person, index) => {
                    return(
                    <Person
                    key={index}
                    name={person.name}
                    position={person.position}
                    text={person.text}
                    left={person.left}
                    insta={person.instaLink}
                    twitter={person.twitterLink}
                    linkedin={person.linkedinLink}
                    img= {person.img}
                     />)
                })
            }

            
            
            </div>
        </div>
    )
}

export default Team;