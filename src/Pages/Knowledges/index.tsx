import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Sidebar />
      <div className="knowledges__content">
        Voici le contenu de la page Knowledges
      </div>
    </div>
  );
};

export default Knowledges;