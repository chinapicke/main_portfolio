import React from 'react'
import "../styles/Header.css";
import mylogo from '../assets/myLogo.png';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'



function Header() {
    return (
        <div className="header">
            <Navbar bg="white" 
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img className='logo'src={mylogo} />
                    China Pickering
                </Navbar.Brand>

                <Navbar.Toggle className="menuDropdown" />
                <Navbar.Collapse >
                    <Nav className= 'nav-item'>
                        <Nav.Link className= 'nav-links' href="/">Home</Nav.Link>
                        <Nav.Link className= 'nav-links' href="aboutme">About Me</Nav.Link>
                        <Nav.Link className= 'nav-links' href="projects">Projects</Nav.Link>
                        <Nav.Link className= 'nav-links' href="contactme">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
export default Header