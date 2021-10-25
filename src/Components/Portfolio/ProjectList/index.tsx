import React, { useState } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import Project from '../Project';

const ProjectList = () => {

    const [projects, setProjects] = useState(portfolioData)
    console.log(projects)
    return (
        <div className="portfolio__content">
            <ul className="radio-display">

            </ul>
            <div className="projects">
                   <Project 
                        name="Lets Be Friends" 
                        languages="Javascript, React, Redux, NodeJS, MongoDB, Leaflet, ..." 
                        source="https://letsbefriends.netlify.app/" 
                        info="Application Web pour renconter ses amis tout en apprenant une nouvelle langue ! Projet collaboratif avec 4 autres développeurs. N'hésitez pas à me contacter pour d'amples détails." 
                        picture='/media/LBF-Project.png'
                        github="https://github.com/Marob-nod/Lets-Be-Friends/"
 
                    />)
                    <Project 
                        name="My React CV" 
                        languages="Javascript, React, TypeScript, SASS" 
                        source="https://letsbefriends.netlify.app/" 
                        info="Un CV dynamique pour en apprendre plus." 
                        picture='/media/mycv.png'
                    />)
                    <Project 
                        name="Snake Game" 
                        languages="Javascript Vanilla, Canvas" 
                        source="https://github.com/Marob-nod/Snake-Nokia" 
                        info="Un jeu d'arcade intemporel avec différents niveaux" 
                        picture='/media/LBF-Project.png'
                    />
                    <Project 
                        name="O'Recipes" 
                        languages="React Redux" 
                        source="https://github.com/Marob-nod/Snake-Nokia" 
                        info="Blog Recettes de Cuisine" 
                        picture='/media/resultat.png'
                    />
            </div>
            
        </div>
    );
};

export default ProjectList;