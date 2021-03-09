import React from 'react';
import './Button.css';
import { ScrollTo } from "react-scroll-to";
import { Link } from 'react-router-dom';



const Button = (props) => {
    let button = null;
    let buttonClass = null;

    let disableClass = null;
    if(props.disable){
      disableClass = "disable"
    }

    

    props.buttonColor === "red" ?
    buttonClass = "button--red" 
    :   buttonClass = "button--green"; 

    switch (props.buttonType) {

        case "scrollButton":
          button = <ScrollTo >
          {({ scroll }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a 
            className={`button ${buttonClass}`}
            onClick={() => scroll({ x: 0, y: 750, smooth:'true' })} >    
            {props.children}     
            </a> 
          )}
        </ScrollTo>
      break;

      case "buttonNavigate" :
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
     button =  <Link 
     to={props.linkTo}
     className={`button ${buttonClass}`}>
       {props.children}
     </Link>
    break;


      case "formButton" :
       button =  <button
         type="submit"
         className={`button formButton ${buttonClass} ${disableClass}`}
         disabled={props.disable}
         >
        {props.children}
         </button>            
         break;  
         
      case "functionButton":
        button =  <button
        onClick= {() => props.buttonFunction()}
        className={`button ${buttonClass} `}
        >
       {props.children}
        </button>            
      break;  


        default:
            break;
    }


    return (button)
}

export default Button;