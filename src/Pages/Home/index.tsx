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
            <p>🚀 Freshly graduated from my engineering school, I specialized in the Web development field. Integration addict, passionate and self-taught, I am tireless when it comes to coding </p> <p>

              💡 I am currently looking for assignments on web application development, front-end part principaly. I remain at your disposal for any questions or proposals.
            </p>
        </div>
      </div>

    </div>
  );
};

export default Home;