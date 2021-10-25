import React from 'react';
import './styles.scss';
import homeIcon from '../../assets/homepage.png'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="error">
      <div className="error__content">
        <h1>Désolé, cette page n'existe pas</h1>
        <NavLink exact to="/" activeClassName="navActive">
          <div className="button-container">
            <div className="button-content">
              <img src={homeIcon} className="sidebar__navigation-homeIcon" alt="home-Icon" />
              <span>Accueil</span>
            </div>
          </div>
          </NavLink>
      </div>
    </div>

  );
};

export default Error404;