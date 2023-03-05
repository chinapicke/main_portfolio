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
                <Card className= "maincardBody me-2 mb-5 pb-0" style={{ width: '40rem', height:'30rem' }}>
                    <Row>
                        <Col className="leftSideCard pt-3 ms-3 pb-1 mb-2">
                            <Card className="infoAndPicture d-flex flex-column" style={{ width: '25rem', height:'28rem' }}>
                                <Card.Img className="projectImage"variant="card-img-top" alt={props.projectname} src={props.image} />
                                <Card.Body>
                                    <Card.Title className="projectTitle">{props.projectname}</Card.Title>
                                    <Card.Text className="projectDescription text-justify">{props.description}</Card.Text>
                                    <div className='projectButtons'>
                                    <Button onClick={handleClickUrl} className="deployedURL me-5 ms-5 mt-auto">Deployed Site</Button>
                                    <Button onClick={githubRedirect} className="githubUrl mt-auto">Github Link</Button>  
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="rightSideCard">
                            <h1 className='thingsUsed'>HTML</h1>
                            <img src='/images/html.png' className="iconsUsed"></img>
                            <p className='describeUsed'>Skeleton used for the creation of each webpage .</p>
                            <h1 className='thingsUsed'>CSS</h1>
                            <img src='/images/css.png' className="iconsUsed"></img>
                            <p className='describeUsed'>Used to help style webpages from the HTML. </p>
                            <h1 className='thingsUsed'>JavaScript</h1>
                            <img src='/images/js.png' className="iconsUsed"></img>
                            <p className='describeUsed'>Describes the behaviour of the webpage<br></br>encourage user interaction with the page.</p>
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