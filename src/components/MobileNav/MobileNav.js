import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import './MobileNav.css';

const MobileNav = (props) => {

    useEffect(() => {
        
       let navContainer = document.querySelector('.mobileNav__container');
       if(props.showMobileNav){
        navContainer.classList.add("showNav");
       }else{
        navContainer.classList.remove("showNav");
       }
        return () => {
        }
    }, [props.showMobileNav])


    return (
        <div 
        onClick={() =>  props.mobileNavHandler(false)} 
        className='mobileNav__container'>
        
            <div className='mobileNav__itemsContainer'>
            <div className="mobileNavItem">
                <NavLink
                exact
                onClick={() =>  props.mobileNavHandler(false)}
                activeClassName="mobileNavItem--active"
                to="/" >Home</NavLink>
            </div>

            <div className="mobileNavItem">
                <NavLink
                onClick={() =>  props.mobileNavHandler(false)}
                activeClassName="mobileNavItem--active"
                to="/team" >Team</NavLink>
            </div>

            <div className="mobileNavItem">
                <NavLink
                onClick={() =>  props.mobileNavHandler(false)}
                activeClassName="mobileNavItem--active" 
                to="/contact" >Contact</NavLink>
            </div>

            <div className="mobileNavItem">
                <NavLink
                onClick={() =>  props.mobileNavHandler(false)}
                activeClassName="mobileNavItem--active" 
                to="/career" >Career</NavLink>
            </div>
            </div>
        </div>
    )
}

export default MobileNav;