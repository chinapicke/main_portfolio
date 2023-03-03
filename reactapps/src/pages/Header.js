import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'



function Header() {
    return (
        <div className='header'>
            <div className='container-fluid'>
                <div className='navbar'>
                    <a class="navbar-logo">
                        {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""> */}
                    </a>
                    <ul>
                        <li className='nav-item'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="about">About Me</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="projects">Projects</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="contact">Contact Me</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Header