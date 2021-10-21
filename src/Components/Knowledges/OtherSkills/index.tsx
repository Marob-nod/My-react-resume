import './styles.scss';

const OtherSkills = () => {

  return (
    <div className="otherskills">
        <div className="otherskills__frameworks">
            <h3>Librairies & Frameworks complémentaires</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>Git - GitHub</li>
                    <li><i className="fas fa-check-square"></i>Redux</li>
                    <li><i className="fas fa-check-square"></i>Axios</li>
                    <li><i className="fas fa-check-square"></i>Jest</li>
                    <li><i className="fas fa-check-square"></i>TypeScript</li>
                    <li><i className="fas fa-check-square"></i>SASS</li>
                    <li><i className="fas fa-check-square"></i>Babel</li>
                    <li><i className="fas fa-check-square"></i>Webpack</li>
                    <li><i className="fas fa-check-square"></i>Netlify</li>              
                </ul>
            </div>
        </div>
        <div className="otherskills__profil">
            <h3>Profil</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>Gestion de projet: Méthode agile</li>
                    <li><i className="fas fa-check-square"></i>Management: Accompagnement - Inclusion</li>
                    <li><i className="fas fa-check-square"></i>Experience UI/UX</li> 
                    <li><i className="fas fa-check-square"></i>Créatif</li>            
                </ul>
            </div>
        </div>
    </div>
  );
};

export default OtherSkills;
const [otherTechs, setOtherTechs] = useState(["Redux","Axios","Jest","TypeScript","SASS","Babel","Webpack","Git/GitHub","Netlify"])