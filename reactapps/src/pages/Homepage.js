import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyPicture from './me.png';

function Homepage() {
  return (
    <div className='heroBanner'>
       <Container>
      <Row>
        <Col sm={8} className='heroInfo'>
            <h1 className='name'>China Pickering</h1>
            <h2>Learning the new world of software development whilst travelling the world</h2>
            <button>About Me</button>
            <button>Contact Me</button>
        </Col>
        <Col sm={4} className='heroPicture'>
            <img src={MyPicture} />  
        </Col>
      </Row>
      </Container>
      
    </div>
  )
}

export default Homepage