
import React, { useState } from "react"
import {Link, NavLink} from 'react-router-dom'
import logo from '../../Images/logo.jpg'
import "./NavBar.css"

export default function NavBar()
{
    const [menuOpen, setMenuOpen] = useState(false);
     return (
         <>
         <nav>
            <div className="menu" onClick={()=>{
                console.log('working');
                setMenuOpen(!menuOpen);
                }}>
                 <span></span>
                 <span></span>
                 <span></span>
            </div>
            <NavLink to ="/" className="title">
                <img src={logo} alt="Logo" className="nav-logo" />
                <div className="title-text">
                    <span className="heading">AWESOME</span><br/>
                    <span className="subHeading">ART & DECOR</span>
                </div>
            </NavLink>
            <ul className = {menuOpen ? "open": ""}>
                <li>
                <NavLink to="/Gallery">Gallery</NavLink>
                </li>
                <li>
                <NavLink to="/About">About</NavLink>
                </li>
                <li>
                <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/Login">Login</NavLink>
                </li>
            </ul>
         </nav>
         </>
     );
}