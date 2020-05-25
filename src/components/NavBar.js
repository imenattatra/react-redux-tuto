import React from 'react';
import { NavLink, withRouter} from 'react-router-dom'

const NavBar=(props)=> {
    setTimeout(()=>{
        //console.log(props)
    },2000)
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
  
  export default withRouter(NavBar);