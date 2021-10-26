import React from 'react';
import Experience from '../../Components/Knowledges/Experience';
import Formation from '../../Components/Knowledges/Formation';
//import Languages from '../../Components/Knowledges/Languages';
import OtherSkills from '../../Components/Knowledges/OtherSkills';
import Skills from '../../Components/Knowledges/Skills';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Sidebar />
      <div className="knowledges__content">
        <div className="skills-container">
          <Skills />
          <OtherSkills />
        </div>
        <Experience />
        <Formation />
        
      </div>
    </div>
  );
};

export default Knowledges;