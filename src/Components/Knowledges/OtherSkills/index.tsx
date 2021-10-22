import './styles.scss';

const OtherSkills = () => {

  return (
    <div className="otherskills">
        <div className="container-otherskills">
                <div className="otherskills__frameworks">
                    <h3>Techs</h3>
                    <div className="framework-list">
                        <ul className="framework-list-1">
                            <li><i className="fas fa-check-square"></i>Git - GitHub</li>
                            <li><i className="fas fa-check-square"></i>Redux</li>
                            <li><i className="fas fa-check-square"></i>Axios</li>
                            <li><i className="fas fa-check-square"></i>Jest</li>
                            <li><i className="fas fa-check-square"></i>TypeScript</li>            
                        </ul>
                        <ul className="framework-list-2">
                            <li><i className="fas fa-check-square"></i>SASS</li>
                            <li><i className="fas fa-check-square"></i>Babel</li>
                            <li><i className="fas fa-check-square"></i>Webpack</li>
                            <li><i className="fas fa-check-square"></i>Netlify</li>              
                        </ul>
                    </div>
                </div>
                <div className="otherskills__profil">
                    <h3>Profil</h3>
                    <div className="otherskills-list">
                        <ul>
                            <li><i className="fas fa-check-square"></i>Gestion de projet: Méthode agile</li>
                            <li><i className="fas fa-check-square"></i>Management: Accompagnement - Inclusion</li>
                            <li><i className="fas fa-check-square"></i>Experience UI/UX</li> 
                            <li><i className="fas fa-check-square"></i>Créatif</li>
                            <li><i className="fas fa-check-square"></i>Anglais - TOEIC 920</li>
                            <li><i className="fas fa-check-square"></i>Espagnol - 6 mois Chili</li>            
                        </ul>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default OtherSkills;