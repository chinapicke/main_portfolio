import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Row>
    <Col sm={4} className='skills'>
        <h3>Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>node.js</li>
            <li>jQuery</li>
            <li>React</li>
            <li>bootstrap</li>
        </ul>
    </Col>
  </Row>
  )
}

export default AboutMe