import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {

    return (
        <nav className="nav">

            <div className="navItem">
                <NavLink
                exact
                activeClassName="navbar__link--active"
                to="/" >Home</NavLink>
            </div>

            <div  className="navItem">
                <NavLink
                activeClassName="navbar__link--active"
                to="/team" >Team</NavLink>
            </div>

            <div  className="navItem">
                <NavLink
                activeClassName="navbar__link--active" 
                to="/contact" >Contact</NavLink>
            </div>

            <div className="navItem">
                <NavLink
                activeClassName="navbar__link--active" 
                to="/career" >Career</NavLink>
            </div>

        </nav>            
    )
}

export default NavBar; 