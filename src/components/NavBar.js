import React from 'react';
import { Link , NavLink} from 'react-router-dom'

const NavBar=()=> {
    return (
        
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo right">Poke Times</a>
                <ul className="left">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    );
  }
  
  export default NavBar;