import React from 'react'
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import '../styles/ContactForm.css';
import { useState } from 'react';


const ContactForm = () => {
  // const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conForm = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conForm)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (
    <Form>
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your message
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </Form>
  )
}
export default ContactForm