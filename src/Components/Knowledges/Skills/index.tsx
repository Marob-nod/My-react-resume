import './styles.scss';

import { useState } from 'react';
import ProgressBar from '../../ProgressBar';

import logoCSS from '../../../assets/logo-css.png';
import logoHtml from '../../../assets/logo-html.png';
import logoJs from '../../../assets/logo-js.png';
import logoReact from '../../../assets/logo-react.png';


const Skills = () => {

    const [languages, setLanguages] = useState([
        {id: 1, value: "React", xp: 1.0, logo: logoReact},
        {id: 1, value: "Javascript", xp: 1.5, logo: logoJs},
        {id: 2, value: "CSS", xp: 2, logo: logoCSS},
        {id: 3, value: "HTML", xp: 2, logo: logoHtml}
    ]);
    const otherTechs = ["Redux","Axios","Jest","TypeScript","SASS","Babel","Webpack","Git/GitHub","Netlify"];

  return (
    <div className="skills">
      <ProgressBar languages={languages} className="languages-display" title="Languages"/>
    </div>
  )
};

export default Skills;