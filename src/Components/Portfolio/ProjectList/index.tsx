import React, { useState } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import Project from '../Project';

const ProjectList = () => {

    const [projects, setProjects] = useState(portfolioData)
    return (
        <div className="portfolio__content">
            <ul className="radio-display">

            </ul>
            <div className="projects">
                {
                    projects.map(project => <Project 
                        key={project.id} 
                        name={project.name} 
                        languages={project.languages} 
                        languagesIcons={project.languagesIcons} 
                        source={project.source} 
                        info={project.info} 
                        picture={project.picture} />)
                }
            </div>
            
        </div>
    );
};

export default ProjectList;