import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <Row className='aboutContent'>
      <Col sm={6} className='imgCol'>
        <img className='aboutImage' src='/images/bali.JPG' alt='me travelling'></img>
      </Col>
      <Col sm={6} className='aboutmeSkills'>
        <h1 className=' aboutSubheading text-center'>About Me</h1>
        <p className='aboutText'>Working in healthcare during a pandemic opened eyes. It made me think about my goals and how I could change my life to achieve them. Front-end development has never been “just a job” for me, but a way to be constantly challenged and continually develop my skills.<br></br> I continually challenged myself by earning a certificate from the Trilogy Skills Bootcamp whilst travelling on the opposite side of the world. Through my experience, my strengths are teamwork, continual professional development, ability to take initiative and execute tasks as promised.</p>
        <div className='skills'>
          <h2 className='skillsSubheading'>Skills</h2>
          <ul className='skillsList'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>node.js</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>..any many soft skills</li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}

export default AboutMe