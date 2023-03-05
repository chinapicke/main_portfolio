import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ProjectCards from '../jsonfiles/projects.json';
import '../styles/Projects.css';



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
                <Card className= "maincardBody me-2 mb-5" style={{ width: '40rem' }}>
                    <Row>
                        <Col className="leftSideCard mt-3 ms-3 mb-3">
                            <Card className="infoAndPicture" style={{ width: '25rem' }}>
                                <Card.Img className="projectImage"variant="top" alt={props.projectname} src={props.image} />
                                <Card.Body>
                                    <Card.Title className="projectTitle">{props.projectname}</Card.Title>
                                    <Card.Text className="projectDescription">{props.description}</Card.Text>
                                    <div className='projectButtons'>
                                    <Button onClick={handleClickUrl} className="deployedURL me-4">Deployed Site</Button>
                                    <Button onClick={githubRedirect} className="githubUrl">Github</Button>  
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="rightSideCard">
                            <h1 className='thingsUsed'>HTML</h1>
                            <img src='/images/html.png' className="iconsUsed"></img>
                            <hr></hr>
                            <p className='describeUsed'>Skeleton used for the creation of each webpage .</p>
                            <h1 className='thingsUsed'>CSS</h1>
                            <img src='/images/css.png' className="iconsUsed"></img>
                            <hr></hr>
                            <p className='describeUsed'>Used to help style webpages from the HTML. </p>
                            <h1 className='thingsUsed'>JavaScript</h1>
                            <img src='/images/js.png' className="iconsUsed"></img>
                            <hr></hr>
                            <p className='describeUsed'>Describes the behaviour of the webpage to encourage user interaction with the page.</p>
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