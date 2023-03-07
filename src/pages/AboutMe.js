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
        <p className='aboutText'>Working in healthcare during a pandemic opened eyes. It made me think about my goals and how I could change my life to achieve them. Front-end development has never been “just a job” for me, but a way to be constantly challenged and continually develop my skills.<br>
        </br> I am in the process of earning a certificate from the Trilogy Skills Bootcamp whilst travelling on the opposite side of the world. Through my experience, my strengths are teamwork, continual professional development, ability to take initiative and execute tasks as promised.</p>
        <div className='skills'>
          <h2 className='skillsSubheading'>Skills</h2>
          <div className='skillsList'>
            <img src='/images/html.png' alt='HTML skill' className='skillIcon' style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/css.png' alt='CSS skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/js.png' alt='JS skill' className='skillIcon' style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/bootstrap.png' alt='Bootstrap skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/git.png' alt='Git skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/jquery.png' alt='JQuery skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/node.png' alt='Node skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
            <img src='/images/atom.png' alt='React skill' className='skillIcon'  style={{width: '50px',height:'50px', margin:'10px'}}/>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default AboutMe