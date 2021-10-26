import './styles.scss';


const Formation = () => {
  return (

  <div className="formation">
    <h2>Formation</h2>
    <div className="formation__formation1">
      <div className="formation__formation1__oclock">
        <h4>Développeur Web</h4>
        <div className="formation__formation1__oclock__container-nom">
          {/* <img src={logoOclock} alt="logo-Oclock" /> */}
          <h4>Ecole O'Clock</h4>
          <h5>Juillet - Novembre 2021 </h5>
        </div>
        <ul>
          <li>Spécialisation React.JS</li>
          <li>HTML - CSS</li>
          <li>Javascript</li>
          <li>Gestion de projet en méthode agile</li>
        </ul>
      </div>
    </div>
    <div className="formation__formation2">
      <div className="formation__formation2__mines">
        <h4>Ingénieur généraliste spécialisation informatique</h4>
        <div className="formation__formation1__oclock__container-nom">
          {/* <img src={logoMines} alt="logo-mines" /> */}
          <h4>Ecole des Mines de Douai</h4>
          <h5>2016 - 2019 </h5>
        </div>
        <ul>
          <li>SGBD: Requêtes SQL</li>
          <li>Java: Programmation orientée objet</li>
          <li>HTML - CSS</li>
          <li>Gestion de projet en méthode agile</li>
          <li>Electricité - Chimie - Mécanique ...</li>
        </ul>
      </div>
    </div>
    <div className="formation__formation3">
      <div className="formation__formation3__dut">
        <h4>DUT Mesures Physiques</h4>
        <h5>2013 - 2015 </h5>
        <div className="formation__formation1__oclock__container-nom">
          {/* <img src={logoRouen} alt="logo-rouen" /> */}
          <h4>Université de Rouen</h4>
        </div>
        <ul>
          <li>Architecture réseaux</li>
          <li>Programmation Labview</li>
          <li>Pack Office</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Formation;