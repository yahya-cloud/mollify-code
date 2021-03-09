import React from 'react';
import './Footer.css';

import Logo from '../../assets/logo.png';
import NavBar from '../NavBar/NavBar';

import { GrInstagram } from '@react-icons/all-files/gr/GrInstagram';
import {FiTwitter} from '@react-icons/all-files/fi/FiTwitter';

const Footer = (props) => {
    return (
        <div className='footer'>
        <div className='footer__container'>
                <img className="footer__logo" src={Logo} alt="logo" />

        <div className="footer__info">

        <div className="nav--footer">
        <NavBar pageHandler={props.pageHandler} />
        </div>

        <div className='footer--textBox'>
        <p className="paragraph paragraph--footer">
       To know more about us follow us on below given social media handles 
        </p>
        <div className='footer__iconBox'>
        <a href="https://www.instagram.com/mollify.in/">  <GrInstagram fontSize={25} color="#acacac" style={{marginRight:'4rem'}}  /> </a>
        <a href="https://twitter.com/mollify_in"> <FiTwitter fontSize={25} color="#acacac"  /> </a>  
        </div>

        </div>
      
            
            
        </div>


            </div>
        </div>
    )
}


export default Footer;