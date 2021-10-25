import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName, IconProp } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';


interface projectProps {
    name: string;
    languages: string;
    source: string;
    info: string;
    picture: string;
    github?: string
}

const Project:FC<projectProps> = ({ name, languages, source, github, info, picture }) => {

    return (
        <div className="project">
            <h3>{name}</h3>
            <img src={picture} alt="photo-projet" />
            <h4>{languages}</h4>
            <span className="infos">{info}</span>
        </div>
    );
};

export default Project;