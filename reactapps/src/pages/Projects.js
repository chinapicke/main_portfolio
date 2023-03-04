import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import button from 'react-bootstrap/Button';
import ProjectCards from '../jsonfiles/projects.json';
import '../styles/Projects.css';


function ProjectCard(props) {
    return (
                <Card className= "maincardBody" style={{ width: '35rem' }}>
                    <Row>
                        <Col className="leftSideCard">
                            <Card className="infoAndPicture" style={{ width: '20rem' }}>
                                <Card.Img className="projectImage"variant="top" alt={props.projectname} src={props.image} />
                                <Card.Body>
                                    <Card.Title className="projectTitle">{props.projectname}</Card.Title>
                                    <Card.Text className="projectDescription">{props.description}</Card.Text>
                                    <button className="deployedURL">Deployed Site{props.deployedURL}</button>
                                    <button className="githubURL">Github{props.githubUrl}</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="rightSideCard">
                            <h1>HTML</h1>
                            <p></p>
                            <hr></hr>
                            <h1>CSS</h1>
                            <p></p>
                            <hr></hr>
                            <h1>JavaScript</h1>
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