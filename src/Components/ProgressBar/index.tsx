import './styles.scss';
import React from 'react';

const ProgressBar = ({ languages, className, title }) => {

  return (
    <div className="progressBar">
        <h3>{title}</h3>
        <div className="years">
            <span>Années d'experience</span>
            <span>1 an</span>
            <span>2 ans</span>
        </div>

        <div>
            {
                languages.map(language => {
                    let xpYears =2;
                    let progressBar = language.xp / xpYears * 100 + '%';

                    return (
                        <div key={language.id} className="languages-list">
                            <li>{language.value}</li>
                            <div className="progressBar" style={{width:progressBar}}></div>
                        </div>
                    )

                })
            }
        </div>
    </div>
  );
};

export default ProgressBar;