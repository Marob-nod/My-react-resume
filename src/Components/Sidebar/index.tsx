import React from 'react';
import './styles.scss';
import profilPicture from '../../assets/photo_robin.jpg'
import { NavLink } from 'react-router-dom'
import homeIcon from '../../assets/homepage.png'
import contactIcon from '../../assets/contact.png'
import projectIcon from '../../assets/production.png'
import knowledgeIcon from '../../assets/une-analyse.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__id">
        <div className="sidebar__id__content">
          <img src={profilPicture} className="sidebar__id__content-photo" alt="profil" />
          <h1>Robin Marien</h1>

        </div>
      </div>
      <div className="sidebar__navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <img src={homeIcon} className="sidebar__navigation-homeIcon" alt="home-Icon" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <img src={knowledgeIcon} className="sidebar__navigation-knowledgeIcon" alt="knowledge-Icon" /> 
              <span>Compétences</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <img src={projectIcon} className="sidebar__navigation-projectIcon" alt="project-Icon" /> 
              <span>Mes projets</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <img src={contactIcon} className="sidebar__navigation-contactIcon" alt="contact-Icon" /> 
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="sidebar__socialnetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/robin-marien-64a571135/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="linkedin-Icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Marob-nod" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="github-Icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar__signature">
        <p>fromReact - 2021</p>
      </div> 
      
    </div>
  );
};

export default Sidebar;