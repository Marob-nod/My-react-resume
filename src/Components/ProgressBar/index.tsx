import './styles.scss';
import React from 'react';
import { FC } from 'react';

interface ProgressBarProps {
    languages: {id: number; value: string; xp: number; logo: string}[];
    className: string;
    title: string;
}

const ProgressBar:FC<ProgressBarProps> = ({ languages, className, title }) => {

  return (
    <div className="progressBar-container">
        <h2>{title}</h2>
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
                            <img src={language.logo} alt={language.value}/>
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