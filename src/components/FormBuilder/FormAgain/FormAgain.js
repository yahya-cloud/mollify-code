import React from 'react';
import './FormAgain.css';

import Logo from '../../../assets/logo.png';
import Button from '../../UI/Button/Button';

const FormAgain = (props) => {
    let text = "Your response have been recorded Mollify team will get in touch with you as soon as possible"
    if(props.errorText){
        text = "Oops Something went wrong Please try again"
    }
    return (
        <div className="formAgain__container">
            <img className='formAgain__img'  src={Logo} alt="logo" /> 
            
            <h3 className='paragraph formAgain__para'>
            {text}
            </h3>

            <Button
            buttonColor={props.color}
            buttonFunction={props.buttonFunction} 
            buttonType="functionButton">Submit Again</Button>
        </div>
    )
}

export default FormAgain;