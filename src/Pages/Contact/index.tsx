import Sidebar from '../../Components/Sidebar';
import './styles.scss';
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'


const Contact = () => {
  return (
    <div className="contact">
      <Sidebar />
      <div className="contactContent">
        <div>
        <div className="header"></div>
          <div className="contactBox">
            <h1>Contactez moi</h1>
            <ul>
              <li>
                <div>Paris</div>
              </li>
              <li>
                <div>robin.marien@hotmail.fr</div>
              </li>
              <li>
                <div className='phoneNumber'>06 48 70 67 28</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/robin-marien-64a571135/" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://github.com/Marob-nod" target="_blank" rel="noopener noreferrer">
              <h4>GitHub</h4>
              <img src={githubLogo} alt="" />
            </a>
          </ul>
          </div>
        </div>
    </div>
  );
};

export default Contact;