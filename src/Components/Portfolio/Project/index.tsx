import React, { FC } from 'react';

interface projectProps {
    name: string;
    languages: string[];
    languagesIcons: string[];
    source: string;
    info: string;
    picture: string;
}

const Project:FC<projectProps> = ({ name, languages, languagesIcons, source, info, picture }) => {
    return (
        <div className="project">
            <div className="icons">
                {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt="erreur" />
            <h4>{languages.map(language => <ul><li key={language}>{language}</li></ul>)}</h4>
            <span className="infos">
                <i className="fas fa-plus-circle"></i>
            </span>

        </div>
    );
};

export default Project;