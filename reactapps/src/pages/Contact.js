import React from 'react';
import ContactForm from './ContactForm.js';
import ContactInfo from './ContactInfo.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <div className="wholecontactarea">
      <h1>Contact Me</h1>
      <p>Get in touch </p>
      <Container fluid="md">
        <Row>
          <Col>
            <aside className="leftContactInfo">
              <ContactInfo />
            </aside>
          </Col>
          <Col>
            <aside className="rightContactForm">
              <ContactForm />
            </aside>
          </Col>

        </Row>
      </Container>
    </div>

  )
}

export default Contact