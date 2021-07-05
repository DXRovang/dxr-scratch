import React from 'react';
import { NavLink } from 'react-router-dom';
 

//establish routes
const NavBar = () => {
    return (
       <div className="navBar">
          <NavLink className="nav"to="/">Home</NavLink>
          <NavLink className="nav"to="/code">Coding</NavLink>
          <NavLink className="nav"to="/music">Music</NavLink>
          <NavLink className="nav"to="/about">Other</NavLink>
          <NavLink className="nav"to="/contact">Contact</NavLink>
       </div>
    );
} 
 
export default NavBar;