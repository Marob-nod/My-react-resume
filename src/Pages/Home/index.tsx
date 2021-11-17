import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__content">
        <div className="home__content__text">
          <h1>Robin Marien</h1>
          <h2>Développeur Frontend</h2>
          <div className="home__content__text__description"></div>
            <p>🚀 Récemment diplômé de mon école d'ingénieur des Mines de Douai et fort d'une première experience professionnelle, je suis à présent spécialisé dans le domaine du développement Web. 
              <br></br><br></br>Grâce à une formation de qualité de l'Ecole O'Clock ainsi qu'un apprentissage autonome, j'ai développé de nombreuses compétences dans le domaine du frontend notamment. <br></br><br></br>Ma technologie préférée: le framework React.JS !</p> <p>

              💡 Après avoir participé à plusieurs projets "open-source" collectifs et individuels, je suis à la recherche d'un challenge professionnel mettant mon savoir-faire en pratique tout en développant de nouvelles compétences. 
            </p>
        </div>
      </div>

    </div>
  );
};

export default Home;