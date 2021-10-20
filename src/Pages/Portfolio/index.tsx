import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Sidebar />
      <div className="portfolio__content">
        Voici le contenu de la page Mes projets
      </div>
    </div>
  );
};

export default Portfolio;