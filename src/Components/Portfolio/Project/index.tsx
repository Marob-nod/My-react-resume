import { FC, useEffect, useState } from 'react';

interface projectProps {
    name: string;
    languages: string;
    source?: string;
    info: string;
    picture: string;
    github?: string;
    features: string
    video?: string
}

const Project:FC<projectProps> = ({ video, features, name, languages, source, github, info, picture }) => {

    const [showInfos, setShowInfos] = useState(false);
    const [showSiteButton, setShowSiteButton] = useState(false)
    const [showGithubButton, setShowGithubButton] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    const handleInfo = () => {
        setShowInfos(!showInfos)
    }

    const sourceTest = () => {
        if (source !== undefined) {
            setShowSiteButton(true)
        }
        if (video !== undefined) {
            setShowVideo(true)
        }
        if (github !== undefined) {
            setShowGithubButton(true)
        }
    }

    useEffect(() => {
        sourceTest()
    },);

    return (
        <div className="project">
            <h3>{name}</h3>
            {showVideo ? <video controls autoPlay muted loop src={video} /> : <img src={picture} alt="projet" onClick={handleInfo}/>}
            <h4>{languages}</h4>
            <div className="infos">
                <span className="more-button" onClick={handleInfo}>
                    <img src="/media/button-infos.png" alt="more-infos" />
                </span>
            </div>
            {showInfos && 
            <div className="showInfos">
                <div className="infosContent">
                    <div className="head">
                        <h2>{name}</h2>
                            {showGithubButton && <div className="sourceCode">
                                <a href={github} rel="noopener_noreferrer" className="button" target="_blanck" >Code Source</a>
                            </div>}
                            {showSiteButton && <div className="siteWeb">
                                <a href={source} rel="noopener_noreferrer" className="button" target="_blanck" >Site web</a>
                            </div>}    
                    </div>
                    <h4>Descriptif projet</h4>
                    <div className="infos-text">{info}</div>
                    <h4>Fonctionnalit??s</h4>
                    <div className="infos-text">{features}</div>
                    <div className="button" onClick={handleInfo}>Retourner sur la page</div>
                </div>
            </div>}
        </div>
    );
};

export default Project;