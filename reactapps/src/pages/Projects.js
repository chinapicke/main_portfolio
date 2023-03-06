import React from 'react'
import '../styles/Projects.css';
import ProjectCard from './Project';
import ProjectCards from '../jsonfiles/projects.json';



function Projects() {
    return (
        <div className="projectsAll">
            <div className="projectsTitle">
                <h1>Projects</h1>
                <p>Here are a few of the projects that have been create based on the client's requirements and design ideas.</p>
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