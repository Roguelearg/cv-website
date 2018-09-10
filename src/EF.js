import React from 'react';

const EF = () => {
  return (
    <div>
      <h1>Expériences <span className="et">&</span> Formations</h1>
      <div className="container font-content">
        <ul>
          <li>
            <span></span>
            <div>
              <div className="title">Baccalauréat Scientifique</div>
              <div className="info font-content">Lycée Jean Prévost</div>
              <div className="type font-content" id="tac">Montivilliers</div>
            </div>
            <span className="number font-content">
              <span>09/2005</span>
              <span>07/2009</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Licence Informatique</div>
              <div className="info font-content">Université du Havre</div>
              <div className="type font-content">Unité de formation et de recherche Sciences et Techniques</div>
            </div>
            <span className="number font-content">
              <span>09/2012</span>
              <span>07/2015</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Stage 3ème année Licence Informatique <span className="et">&</span> CDD été</div>
              <div className="info font-content">Data Concept</div>
              <div className="type font-content">Développement d’un logiciel de reconaissance de caractères
                pour des containers en utilisant Windev et son langage WLangage, Opencv et
                Tesseract.
              </div>
            </div>
            <span className="number font-content">
              <span>04/2015</span>
              <span>08/2015</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Master d'Informatique</div>
              <div className="info font-content">Université du Havre</div>
              <div className="type font-content">Unité de formation et de recherche Sciences et Techniques</div>
            </div>
            <span className="number font-content">
              <span>09/2015</span>
              <span>12/2017</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Stage 2ème Année Master d'Informatique</div>
              <div className="info font-content">Data Transition</div>
              <div className="type font-content">Développement d’outils en Ruby et avec le Framework
                Ruby on Rails sur la manipulation de MindMaps, ainsi que la création
                d’une grammaire logique à l’aide d’une librairie. Utilisation de l’API
                Twitter afin de construire un outil de veille et l’API Messenger pour
                la création d’un chatbot. Utilisation de Bitbucket pour facilité le
                travail en équipe.
              </div>
            </div>
            <span className="number font-content">
              <span>04/2015</span>
              <span>10/2017</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EF;
