import React from 'react';
import Competence from './Competence';
import './Competences.css';


const Competences = () => {
  return (
    <div>
      <h1>Compétences</h1>
      <h3>Languages</h3>
      <div className="competences">
        <div className="langs">
          <Competence langage="HTML/CSS" niveau="95"/>
          <Competence langage="Ruby" niveau="90"/>
          <Competence langage="Javascript" niveau="90"/>
          <Competence langage="Java" niveau="80"/>
          <Competence langage="Bash" niveau="80"/>
          <Competence langage="PostgreSQL" niveau="70"/>
          <Competence langage="C/C++" niveau="60"/>
        </div>
      </div>
      <p className="come"> À venir : PHP, C#</p>
      <h3>Technologies</h3>
      <div className="competences">
        <div className="langs">
          <Competence langage="Git/Bitbucket" niveau="90"/>
          <Competence langage="Ruby on Rails" niveau="90"/>
          <Competence langage="Linux" niveau="85"/>
          <Competence langage="React" niveau="85"/>
          <Competence langage="Docker" niveau="80"/>
          <Competence langage="Heroku" niveau="80"/>
          <Competence langage="Android" niveau="65"/>
        </div>
      </div>
      <p className="come">À venir : Unity</p>
    </div>
  );
}

export default Competences;
