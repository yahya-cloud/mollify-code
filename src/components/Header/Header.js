import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import { ScrollTo } from "react-scroll-to";
import Logo from '../../assets/logo.png';
import NavBar from '../NavBar/NavBar';


const Header = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    let iconClass = '';
    if(props.mobileNav){
        iconClass = 'opened'
    }


    useEffect(() => {

        function handelResize(){
            setWidth(window.innerWidth);
        }
 
        window.addEventListener('resize', handelResize);
         
         return () => {
            window.removeEventListener('resize', handelResize);
         }
     }, []);
 

    useEffect(() => {
    
        if(width < 600){
       const burgerIcon =  document.querySelector('.burger__icon');
       const changeClass = () => {
        if(!props.mobileNav){
            burgerIcon.classList.add('opened');
        }else{
            burgerIcon.classList.remove('opened');
        }
         props.mobileNavHandler(!props.mobileNav)
       }

       burgerIcon.addEventListener('click', changeClass);

       return () => {
           burgerIcon.removeEventListener('click', changeClass);
       }

        }

    }, [width,props]);

    let logo = (<Link to="/"> <img className='logo'  src={Logo} alt="logo" /> </Link>)

    if(props.page === 'home'){
        logo =    <ScrollTo >
        {({ scroll }) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => scroll({ x: 0, y: 0, smooth:'true' })}>
          <img className='logo'  src={Logo} alt="logo" /> 
          </a> 
         
        )}
      </ScrollTo>

    }



    let nav = <NavBar  header />
    if(width < 600){
        nav = <div  className={`burger__icon ${iconClass} `}>
        <div className="burger__icon--line burger__icon--line1" ></div>
        <div className="burger__icon--line burger__icon--line2" ></div>
        <div className="burger__icon--line burger__icon--line3" ></div>
    </div>
   
    }

    return (
        <div className='header'>

            <div className='logo__box'>
          {logo}
            </div>

            <div className="nav--header">
            {nav}
            </div>


        </div>
    )
}

export default Header;