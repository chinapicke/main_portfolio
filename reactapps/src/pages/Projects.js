import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProjectCards from '../jsonfiles/projects.json';
import '../styles/Projects.css';
import '../assets/html-5.png'
import '../assets/css-3.png'
import '../assets/js.png'


function ProjectCard(props) {
    const githubRedirect = () => {
        window.open(props.githubUrl, '_blank');
        console.log('github redirect')
    }


    const handleClickUrl = () => {
        window.open(props.deployedURL, '_blank');
        console.log('clicked')
    }
    
   

    return (
                <Card className= "maincardBody me-2 mb-5" style={{ width: '35rem' }}>
                    <Row>
                        <Col className="leftSideCard">
                            <Card className="infoAndPicture" style={{ width: '20rem' }}>
                                <Card.Img className="projectImage"variant="top" alt={props.projectname} src={props.image} />
                                <Card.Body>
                                    <Card.Title className="projectTitle">{props.projectname}</Card.Title>
                                    <Card.Text className="projectDescription">{props.description}</Card.Text>
                                    <Button onClick={handleClickUrl} className="deployedURL me-4">Deployed Site</Button>
                                    <Button onClick={githubRedirect} className="deployedURL">Github</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="rightSideCard">
                            <h1>HTML</h1>
                            <img src='../assets/html-5.png'></img>
                            <p></p>
                            <hr></hr>
                            <h1>CSS</h1>
                            <img src='../assets/css-3.png'></img>
                            <p></p>
                            <hr></hr>
                            <h1>JavaScript</h1>
                            <img src='../assets/js.png'></img>
                            <p></p>
                            <hr></hr>
                        </Col>
                    </Row>
                </Card>
    )
}


function Projects() {
    return (
        <div className="projectsAll">
            <div className="projectsTitle">
                <h1>Projects</h1>
                <p>Here are a few of the projects that have been create based on the client's requirements and design ideas</p>
            </div>
            <div className="bigcard">
                {ProjectCards.map((project) => (
                    <ProjectCard
                        projectname={project.projectname}
                        image={project.image}
                        description={project.description}
                        deployedURL={project.deployedURL}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div >

    )
}



export default Projects