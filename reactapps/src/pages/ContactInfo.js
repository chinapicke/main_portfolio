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
      <img src={props.icon} className='linkImage'/>
      </Col>
      <Col xs={4}>
      <a href={props.link} target="_blank" rel="conttactlink">{props.name}</a>
      <p>{props.show}</p>
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
          <img className='CVIcon' src='/images/cv.png' ></img>
        </Col>
        <Col>
        <a href={CV} target="_blank" rel="CV link" className='CVLink'>
        CV
      </a>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactInfo
