import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import "../styles/Header.css";
import mylogo from './myLogo.png';
import {RxHamburgerMenu} from 'react-icons/rx';



function Header() {
    return (
        <div className='header'>
            <div className='topBanner'>
                <nav className='navbar me-auto mb-2 mb-lg-0'>
                    <a className="navbar-brand">
                        <img src={mylogo} />
                        China Pickering 
                    </a>
                    <ul className='navbar-list '>
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
                    <div className='menuDropdown'>
                    <RxHamburgerMenu />
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header