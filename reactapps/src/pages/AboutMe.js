import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <Row className ='aboutMe'>
      <h1 className='text-center'>About Me</h1>
      <p>Working in healthcare during a pandemic opened eyes. It made me think about my goals and how I could change my life to achieve them. Front-end development has never been “just a job” for me, but a way to be constantly challenged and continually develop my skills.<br></br> I continually challenged myself by earning a certificate from the Trilogy Skills Bootcamp whilst travelling on the opposite side of the world. Through my experience, my strengths are teamwork, continual professional development, ability to take initiative and execute tasks as promised.</p>
    <Row>
    <Col sm={4} className='skills'>
        <h3>Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>node.js</li>
            <li>jQuery</li>
            <li>React</li>
            <li>bootstrap</li>
        </ul>
    </Col>
    <Col sm={6}>
      <img className='aboutImage' src='/images/me.png'></img>
    </Col>
  </Row>
  </Row>
  )
}

export default AboutMe