import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'

const contactLinks = [
  {
    name: 'LinkedIn',
    icon:  BsLinkedin,
    link: 'https://www.linkedin.com/in/joshua-murphy-7a20b1120/'
  },
  {
    name: 'Github',
    icon:  BsGithub,
    link: 'https://www.linkedin.com/in/joshua-murphy-7a20b1120/'
  },
  {
    name: 'Email',
    icon:  HiOutlineMail,
    link: 'https://www.linkedin.com/in/joshua-murphy-7a20b1120/'
  },
  {
    name: 'Phone',
    icon:  BsFillTelephoneFill,
    link: 'https://www.linkedin.com/in/joshua-murphy-7a20b1120/'
  },
]

function ContactInfo() {


  return (
    <Container>
      <Row>
        <Col>LinkedIn</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default ContactInfo
