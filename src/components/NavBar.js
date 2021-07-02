import React from 'react';
import { NavLink } from 'react-router-dom';
 

//establish routes
const NavBar = () => {
    return (
       <div>
          <NavLink className="nav"to="/">Home</NavLink>
          <NavLink className="nav"to="/about">About</NavLink>
          <NavLink className="nav"to="/contact">Contact</NavLink>
          <NavLink className="nav"to="/music">Music</NavLink>
          <NavLink className="nav"to="/code">Code</NavLink>
       </div>
    );
} 
 
export default NavBar;