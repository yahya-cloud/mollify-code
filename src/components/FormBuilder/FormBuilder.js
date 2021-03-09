import React, {useState, useEffect} from 'react'
import Form from '../Form/Form';


import "./FormBuilder.css";
import Spinner from '../UI/Spinner/Spinner';
import emailjs from 'emailjs-com';
import FormAgain from './FormAgain/FormAgain';

let form = null;


const FormBuilder = (props) => {

    const [showForm, setShowForm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [sendAgain, setSendAgain] = useState(false);
    const [error, setError] = useState(false)

    const initForm = () => {
        setShowForm(true);
        setLoader(false);
        setSendAgain(false);
    }

    const sendEmailHandler = async (e) => {
        try{
            e.preventDefault();
            setShowForm(false);
            setLoader(true);
            await (emailjs.sendForm('service_jx83m7n', 'template_dhckn4h', e.target, 'user_t9QuEp0IHc8KGEGU7N6tQ'))
            setLoader(false);
            setSendAgain(true);
        }
        catch(error){
            setLoader(false)
            setError(true)         
            setSendAgain(true)
        }

    }    
   
    if(showForm){
        form =  <Form 
        sendEmailHandler={sendEmailHandler}
        mainColor= {props.mainColor} 
        heading={props.formHeading}/>
    }
    if(loader){
        form =  <Spinner color={props.sideContainerColor} />
    }
    if(sendAgain){
        error ?
        form = <FormAgain errorText={true} color={props.mainColor} buttonFunction={initForm} />
        : form = <FormAgain color={props.mainColor} buttonFunction={initForm} />
    }



   
       
    
    

    useEffect(() => {
        initForm()
        let sideContainerForm = document.querySelector('.sideContainer__form');
        let imgContainer = document.querySelector('.sideContainer__imgContainer');

        if(props.formOrder < 0){
            imgContainer.style.animation = 'fadeRight .8s ease forwards';
            imgContainer.style.order = -1
            sideContainerForm.style.animation = 'fadeLeft .8s ease forwards'
        }else{
            imgContainer.style.animation = 'fadeLeft .8s ease forwards';
            imgContainer.style.order = 1
            sideContainerForm.style.animation = 'fadeRight .8s ease forwards'
        }

     }, [props])
 
    return (
        <div className="Form__container">
            <div
            className="sideContainer__form">
           {form}
            </div>

            <div 
            style={{backgroundColor:props.sideContainerColor}}
            className="sideContainer__imgContainer">
            <h2 className="heading--formSideContainer">{props.imgContainerHeading}</h2>
            <img className="sideImg  sideImg--contact" src={props.img} alt={props.formHeading} />
            </div>
        </div>
    )
}

export default FormBuilder;