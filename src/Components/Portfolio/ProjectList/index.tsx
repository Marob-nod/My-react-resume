import Project from '../Project';

const ProjectList = () => {

    return (
        <div className="portfolioContent">
            <div className="projects">
                   <Project 
                        name="LBF - Page d'accueil" 
                        languages="Javascript React Redux CSS" 
                        source="https://letsbefriends.netlify.app/" 
                        info="Application Web pour rencontrer ses amis et faire de nouvelles connaissances tout en apprenant une nouvelle langue ! Projet collaboratif avec 4 autres développeurs." 
                        picture='/media/LBF-Project.png'
                        github="https://github.com/Marob-nod/Lets-Be-Friends/"
                        features="Modals avec formulaire de Login/Signup - Carroussel - Style CSS Ombres coulissantes - Menu navigation coulissant"
 
                    />
                     <Project 
                        name="LBF - Recherche Evenement" 
                        languages="Javascript React Redux CSS Leaflet " 
                        github="https://github.com/Marob-nod/Lets-Be-Friends/"
                        info="Une page pour pouvoir rechercher puis participer à des évènements culturels/sportifs autour de chez soi" 
                        picture='/media/search-event-lbf.png'
                        features="Composants customisés (cartes évènements) - Recherche Geolocalisation - Recherche API avec filtres"
                    /> 
                     <Project 
                        name="Contribution au site Web d'ACM de l'UCLA" 
                        languages="CSS HTML React" 
                        github="https://github.com/Marob-nod/Snake-Nokia" 
                        source="https://www.uclaacm.com"
                        info="L'ACM, Association for Computing Machinery, est la plus grande organisation informatique étudiante de l'université de Californie à Los Angeles, USA. Leur site internet propose un très latge contenu sur les activités étudiantes, à savoir: ateliers, conférences, compétitions de programmation, hackatons, ..." 
                        picture='/media/ucla-website.png'
                        features=" Actualisation du menu de la version mobile du site - Media Queries - CSS"
                    /> 
                    <Project 
                        name="O'Recipes" 
                        languages="React Redux CSS Semantic UI" 
                        source="https://github.com/Marob-nod/Snake-Nokia" 
                        info="Blog Recettes de Cuisine" 
                        picture='/media/resultat.png'
                        features="Syteme de recettes favorites - Collecter puis afficher données de l'API"
                    />
                    <Project 
                        name="Contribution au projet GSOC Analyzer" 
                        languages="Javascript React" 
                        source="https://sparsh1212.github.io/gsocanalyzer/" 
                        github="https://github.com/Marob-nod/gsocanalyzer"
                        info="Site d'analyse de l'utilisation des technologies de programmation dans différentes organisations" 
                        picture='/media/gsoc-website.png'
                        features="Refactorisation du Footer de HomePage en composant customisé"
                    />
                    <Project 
                        name="Projet 3D - Système solaire" 
                        languages="Javascript ThreeJS HTML" 
                        github="https://github.com/Marob-nod/Space-website/tree/master"
                        info="Projet introductif à la librairie ThreeJS pour animations 3D - Planètes gravitationnant autour du soleil" 
                        picture='/media/gsoc-website.png'
                        features="Caméra/Scene/Renderer - Texture Mapping - Animation following the scroll - Canvas"
                    />
            </div>
            
        </div>
    );
};

export default ProjectList;