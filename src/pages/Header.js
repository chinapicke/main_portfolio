import React from 'react'
import "../styles/Header.css";
import mylogo from '../assets/myLogo.png';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import LinkedinNav from '../assets/linkedin.png'
import GithubNav from '../assets/github-sign.png'



function Header() {
    return (
        <div className="header">
            <Navbar bg="white"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img className='logo' src={mylogo} alt='China Pickering Logo' />
                    China Pickering
                </Navbar.Brand>

                <Navbar.Toggle className="menuDropdown" />
                <Navbar.Collapse >
                    <Nav className='nav-item container-fluid'>
                        <Nav.Link className='nav-links' href="/">Home</Nav.Link>
                        <Nav.Link className='nav-links' href="aboutme">About Me</Nav.Link>
                        <Nav.Link className='nav-links' href="projects">Projects</Nav.Link>
                        <Nav.Link className='nav-links' href="contactme">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <a href='https://www.linkedin.com/in/china-pickering-019153250/' target="_blank" rel="linkedInLinkNav">
                        <img className='linkedinNav' src={LinkedinNav} alt='linkedin Icon' />
                    </a>
                </Navbar.Brand>
                <Navbar.Brand>
                    <a href='https://github.com/chinapicke' target="_blank" rel="githubLinkNav">
                    <img className='githubNav' src={GithubNav} alt='Github Icon' />
                    </a>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default Header