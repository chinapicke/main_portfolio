import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/ContactForm.css';
import { useState } from 'react';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (
    <form className='contactForm' name="contact" netlify method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label htmlFor="name">
          Full Name
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
          Email address
          <input
            type="email"
            id="email"
            className='email'
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Share your thoughs 
          <input
            type="text"
            id="message"
            name="message"
            className='thoughts'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <Button className='submitForm btn btn-dark' size='lg' type="submit">Send</Button>
    </form>
  )
}
export default ContactForm