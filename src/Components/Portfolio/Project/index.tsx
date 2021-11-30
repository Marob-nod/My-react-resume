import { FC, useState } from 'react';

interface projectProps {
    name: string;
    languages: string;
    source: string;
    info: string;
    picture: string;
    github?: string
}

const Project:FC<projectProps> = ({ name, languages, source, github, info, picture }) => {

    const [showInfos, setShowInfos] = useState(false);

    const handleInfo = () => {
        setShowInfos(!showInfos)
    }
    return (
        <div className="project">
            <h3>{name}</h3>
            <img src={picture} alt="projet" onClick={handleInfo}/>
            <h4>{languages}</h4>
            <div className="infos">
                <span className="" onClick={handleInfo}>
                    <img src="/media/button-infos.png" alt="more-infos" />
                </span>
            </div>
            {showInfos && 
            <div className="showInfos">
                <div className="infosContent">
                    <div className="head">
                        <h2>{name}</h2>
                    </div>
                    <div className="infos-text">{info}</div>
                    <div className="button" onClick={handleInfo}>Retourner sur la page</div>
                </div>
            </div>}
        </div>
    );
};

export default Project;