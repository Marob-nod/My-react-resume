import React from 'react';
import Experience from '../../Components/Knowledges/Experience';
import Formation from '../../Components/Knowledges/Formation';
import Hobbies from '../../Components/Knowledges/Hobbies';
import Languages from '../../Components/Knowledges/Languages';
import Skills from '../../Components/Knowledges/Skills';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Sidebar />
      <div className="knowledges__content">
        <Skills />
        <Experience />
        <Formation />
        <Languages />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;