import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../styles/ContactForm.css';



const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conForm)
  }
  return (
    <Form className='contactForm' name='contactForm' onSubmit={onSubmit} method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contactForm" />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Firstname" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Surname" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@hotmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number"placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text"placeholder="Enter your mesage" rows={5}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit {formStatus}
      </Button>
    </Form>
  )
}
export default ContactForm