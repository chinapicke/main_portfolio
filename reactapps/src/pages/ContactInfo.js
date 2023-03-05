import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactShow from '../jsonfiles/contacts.json'
import CV from '../assets/chinapickeringCV.pdf'




function Contacts(props){
  return (
    <Row>
      <Col className='icons'>
      <img src={props.icon} />
      </Col>
      <Col>
      <a href={props.link} target="_blank" rel="conttactlink">{props.name}</a>
      <p>{props.show}</p>
      </Col>
    </Row>
  )
}


function ContactInfo() {
  return (
    <Container>
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
      <a href={CV} target="_blank" rel="CV link">
        CV
      </a>
      </Row>
    </Container>
  )
}

export default ContactInfo
