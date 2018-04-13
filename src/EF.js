import React from 'react';

const EF = () => {
  return (
    <div>
      <h1>Expériences & Formations</h1>
      <div className="container">
        <ul>
          <li>
            <span></span>
            <div>
              <div className="title">Baccalauréat Scientifique</div>
              <div className="info">Lycée Jean Prévost</div>
              <div className="type">Montivilliers</div>
            </div>
            <span className="number">
              <span>2005</span>
              <span>2009</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Licence Informatique</div>
              <div className="info">Université du Havre</div>
              <div className="type">Unité de formation et de recherche Sciences et Techniques</div>
            </div>
            <span className="number">
              <span>2012</span>
              <span>2015</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Stage 3ème année Licence Informatique & CDD été</div>
              <div className="info">Data Concept</div>
              <div className="type">Développement d’un logiciel de reconaissance de caractères
                pour des containers en utilisant Windev et son langage WLangage, Opencv et
                Tesseract.
              </div>
            </div>
            <span className="number">
              <span>04/15</span>
              <span>08/15</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Master d'Informatique</div>
              <div className="info">Université du Havre</div>
              <div className="type">Unité de formation et de recherche Sciences et Techniques</div>
            </div>
            <span className="number">
              <span>2015</span>
              <span>2017</span>
            </span>
          </li>
          <li>
            <div>
              <span></span>
              <div className="title">Stage 2ème Année Master d'Informatique</div>
              <div className="info">Data Transition</div>
              <div className="type">Développement d’outils en Ruby et avec le Framework
                Ruby on Rails sur la manipulation de MindMaps, ainsi que la création
                d’une grammaire logique à l’aide d’une librairie. Utilisation de l’API
                Twitter afin de construire un outil de veille et l’API Messenger pour
                la création d’un chatbot. Utilisation de Bitbucket pour facilité le
                travail en équipe.
              </div>
            </div>
            <span className="number">
              <span>2015</span>
              <span>2017</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EF;
