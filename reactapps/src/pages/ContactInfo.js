import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactShow from '../jsonfiles/contacts.json'
import CV from '../assets/chinapickeringCV.pdf'
import '../styles/ContactInfo.css';




function Contacts(props){
  return (
    <Row className='linkImageText'>
      <Col className='icons' xs={2}>
      <img src={props.icon} className='linkImage' alt='contact icons'/>
      </Col>
      <Col xs={4} className='linksAndInfo'>
      <a href={props.link} target="_blank" rel="contactlink"  className='contactURL'>{props.name}</a>
      <p className='phoneEmail'>{props.show}</p>
      </Col>
    </Row>
  )
}


function ContactInfo() {
  return (
    <Container className='contactLinks'>
      <Row>
        {ContactShow.map((link) => (
          <Contacts
          icon ={link.icon}
          link={link.link}
          name={link.name}
          show={link.show}
          />
        ))}
      </Row>
      <Row className="CV">
        <Col>
        <a href={CV} target="_blank" rel="CV link" className='CVLink'>
        <img className='CVIcon' src='/images/cv.png' alt='CV icon'></img>
        </a>
        </Col>
        <Col>
        <p className='CVText'>CV</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactInfo
