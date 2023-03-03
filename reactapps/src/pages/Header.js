import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import "../styles/Header.css";
import mylogo from './myLogo.png';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'



function Header() {
    return (
        <div className="header">
            <Navbar bg="white" 
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img src={mylogo} />
                    China Pickering
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className= 'nav-item'>
                        <Nav.Link className= 'nav-links' href="/">Home</Nav.Link>
                        <Nav.Link className= 'nav-links' href="aboutme">About Me</Nav.Link>
                        <Nav.Link className= 'nav-links' href="projects">Proects</Nav.Link>
                        <Nav.Link className= 'nav-links' href="contactme">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
export default Header