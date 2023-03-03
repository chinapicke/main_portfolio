import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import "../styles/Header.css";
import mylogo from './myLogo.png';



function Header() {
    return (
        <div className='header'>
            <div className='topBanner'>
                <div className='navbar'>
                    <img src={mylogo} />
                    <ul className='navbar-list'>
                        <li className='nav-item'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="aboutme">About Me</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="projects">Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="contactme">Contact Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header