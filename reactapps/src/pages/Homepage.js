import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPicture from '../assets/me.png';
import Contact from './Contact';
import About from './AboutMe';
import Projects from './Projects';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../styles/Homepage.css';

function Homepage() {

  const viewAbout = () => {
    console.log("Directing to about me page")
  }

  const viewContact = () => {
    console.log("Directing to contact page")
  }

  return (
    <>
      <div className='heroBanner'>
        <Container>
          <Row>
            <Col sm={8} className='heroInfo'>
              <h1 className='name'>China Pickering</h1>
              <h2 className='headerSubheading'>Portfolio</h2>
              <h3>Learning the new world of software development whilst travelling the world</h3>
              <div className='heroPicture'>
                <img src={MyPicture} />
              </div>

              <Link to='/aboutme'>
                <Button onClick={viewAbout} variant="primary" className='me-4'>Get to know me</Button>
              </Link>
              <Link to='/contactme'>
                <Button oncClick={viewContact} variant="light">Contact Me</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Homepage