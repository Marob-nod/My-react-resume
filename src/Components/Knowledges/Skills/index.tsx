import './styles.scss';
import React from 'react';
import { useState } from 'react';
import ProgressBar from '../../ProgressBar';

const Skills = () => {

    const [languages, setLanguages] = useState([
        {id: 1, value: "React", xp: 1.0},
        {id: 1, value: "Javascript", xp: 1.5},
        {id: 2, value: "CSS", xp: 2},
        {id: 3, value: "HTML", xp: 2},
        {id: 4, value: "C/C++", xp: 0.5},
    ]);
    const [otherTechs, setOtherTechs] = useState(["Redux","Axios","Jest","TypeScript","SASS","Babel","Webpack","Git/GitHub","Netlify"])

  return (
    <div className="skills">
        <ProgressBar languages={languages} className="languages-display" title="Languages"/>
    </div>
  );
};

export default Skills;