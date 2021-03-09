import React from 'react';
import './FormInput.css';


const FormInput = (props) => {

    let inputElement = null;
    const inputClasses = ["input"];
    let errorMessage = null;

    if(props.inValid && props.shouldValidate && props.isTouched){
        inputClasses.push("invalid")
        errorMessage = (<p className="errorMessage">Please enter valid value</p>)
    }

    switch (props.elementType) {
        case 'input':

        inputElement =  <input
        className={inputClasses.join(" ")}
        type="text"
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        /> 
        break;

        
        case ('text-area'):
        inputElement = <textarea
        className= 'input input--textArea'
        {...props.elementConfig}
        value={props.value} 
        onChange={props.changed}
        />    
        break;
        
              
        
        default:
            break;
    }

    return (
        <div className="inputContainer">
               
               

                <label
                 className="label"
                 htmlFor={props.elementConfig.id}>
                 {props.elementConfig.placeholder.slice(5)}
                </label>
                {inputElement} 
                {errorMessage}
                </div>
    )
}

export default FormInput;