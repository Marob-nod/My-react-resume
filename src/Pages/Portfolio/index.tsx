import React from 'react';
import ProjectList from '../../Components/Portfolio/ProjectList';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Sidebar />
      <ProjectList />
    </div>
  );
};

export default Portfolio;