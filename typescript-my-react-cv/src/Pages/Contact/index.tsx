import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Contact = () => {
  return (
    <div className="contact">
      
      <Sidebar />
      <div className="contact__content">
      Voici le contenu de la page contacts
      </div>
    </div>
  );
};

export default Contact;