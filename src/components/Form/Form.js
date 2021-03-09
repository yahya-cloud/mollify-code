import React, { useState } from 'react'

import './Form.css';
import '../../index.css';



import FormInput from './FormInput/FormInput';
import checkValidity from './CheckValidaity';
import Button from '../../components/UI/Button/Button';

 

const  Form = (props) =>{

    const [inputData, setInputData] = useState({
            name:{
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Enter Your Name*",
                    id:"name",
                    name:"name"
                },
                value:"",
                validation:{
                    required: true,
                    minSize: 2
                },
                valid: false,
                touched: false
            },

            email:{
                elementType:"input",
                elementConfig:{
                    type:"email",
                    placeholder:"Enter Your Email*",
                    id:"email",
                    name:"email"
                },
                value:"",
                validation:{
                   required: true,
                   checkEmail: true
               },
               valid: false,
               touched: false
            },

            subject:{
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Enter Subject",
                    id:"name",
                    name:"subject"
                },
                value:"",
                validation:{},
                valid: true,
                touched: false
            },

            message:{
                elementType:"text-area",
                elementConfig:{
                    type:"text-area",
                    placeholder:"Write  Message ",
                    id:"message",
                    name:"message"
                },
                value:"",
                validation:{},
                valid: true,
                touched: false 
            }

        }
    )

    const [formValidity, setFormValidity] = useState(false)


    // eslint-disable-next-line no-undef
    const  changeInputHandler = (event, inputIdentifier) => {
        const updatedInfoForm = {
            ...inputData
        }
        const updatedFormElement = {
            ...updatedInfoForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched =  true;
        updatedInfoForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for(let inputIdentifier in updatedInfoForm){
            formIsValid = updatedInfoForm[inputIdentifier].valid && formIsValid;
        }
        
        setInputData(updatedInfoForm)
        setFormValidity(formIsValid)
        
        }


    let form = null;
    let headingColor = null;
    props.mainColor === 'red' ? 
    headingColor = "heading--red" :
    headingColor = "heading--green";

    let inputElements = [];
        for(let key in inputData){
            inputElements.push({
                id:key,
                config: inputData[key]
            })
        }

  

    form = (<form autoComplete="off" className="form" onSubmit={(e) => props.sendEmailHandler(e)}>
            <h1 className={`main__heading heading--form ${headingColor}`}>
           {props.heading}
            </h1>

            {inputElements.map(el => {
                return <FormInput 
                key = {el.id}  
                elementType={el.config.elementType}
                elementConfig={el.config.elementConfig}
                value={el.config.value}
                inValid={!el.config.valid}
                shouldValidate = {el.config.validation}
                isTouched = {el.config.touched} 
                changed = {(e) => changeInputHandler(e, el.id)}
                />
            })}

            <Button 
            buttonType="formButton"
            marginTop= "5"
            disable={!formValidity} 
            buttonColor={props.mainColor === "red" ? "red" : "green"} 
            >
            Submit
            </Button>
            
            </form>
        )
       


        return (
             form
        )
    }


export default Form;