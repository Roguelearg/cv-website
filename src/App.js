import React, { Component } from 'react';
import Anime from 'react-anime';
import test from './portrait.png';
import MenuLowRes from './MenuLowRes';
import EF from './EF';
import Competences from './Competences';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      x: 0
    }
  }

  clickEventMenu = (e) => {
    switch(e.target.id){
      case 'content':
        scrollToComponent(this.content, { offset: 0, align: 'top', duration: 1500})
        break;
      case 'eF':
        scrollToComponent(this.eF, { offset: 0, align: 'top', duration: 1500})
        break;
      case 'comp':
        scrollToComponent(this.comp, { offset: 0, align: 'top', duration: 1500})
        break;
      default:
    }
  }

  render() {
    return (
      <div className="global">
        <MenuLowRes clickEventMenu={this.clickEventMenu} />
        <div className="menu">
          <div className="photo">
            <img src={test} alt="portrait" style={{width:'45%', height:'auto'}}/>
          </div>
          <div className="prenom">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 400 150">
              <Anime easing="easeOutCirc"
                     direction="alternate"
                     duration={7500}
                     loop={true}
                     delay={200}
                     strokeDashoffset={ (el) => {
                        var pathLength = 0;
                        if (el.getTotalLength) {
                          pathLength = el.getTotalLength();
                          el.setAttribute('stroke-dasharray', pathLength);
                        }
                        return [pathLength, 0];
              }}>
              <path className="st1" d="M100 110 V30 C100 30 130 20 130 50 C130 50 130 73 103 70 C105 70 130 69 130 90 C130 90 130 120 100 110"/>
              <path className="st1" d="M150 110 V70 C150 70 165 65 165 80 C165 80 165 92 155 90 L165 110"/>
              <path className="st1" d="M205 110 H185 V90 H200 H185 V70 H205"/>
              <path className="st1" d="M225 110 V70 C225 75 232 90 240 109 C240 110 240 90 240 73"/>
              <path className="st1" d="M260 110 V70 C260 70 275 65 275 90 C275 90 275 115 260 110"/>
              <path className="st1" d="M302.5 110 C302.5 110 295 115 295 90 C295 90 295 65 302.5 70 C302.5 70 310 65 310 90 C310 90 310 115 302.5 110"/>
              <path className="st1" d="M330 110 V70 C330 75 337 90 345 109 C345 110 345 90 345 73"/>

              </Anime>
            </svg>
          </div>
          <div className="nom">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 400 150">
              <Anime easing="easeOutCirc"
                     direction="alternate"
                     duration={7500}
                     loop={true}
                     delay={200}
                     strokeDashoffset={ (el) => {
                        var pathLength = 0;
                        if (el.getTotalLength) {
                          pathLength = el.getTotalLength();
                          el.setAttribute('stroke-dasharray', pathLength);
                        }
                        return [pathLength, 0];
              }}>
              <path className="st1" d="M100 110 V40 C100 40 107.5 40 130 40 C130 40 100 40 70 40"/>
              <path className="st1" d="M142.5 110 C142.5 110 135 115 135 90 C135 90 135 65 142.5 70 C142.5 70 150 65 150 90 C150 90 150 115 142.5 110"/>
              <path className="st1" d="M170 110 V70 C170 70 185 65 185 80 C185 80 185 92 175 90 L185 110"/>
              <path className="st1" d="M205 110 V70 C205 70 220 65 220 80 C220 80 220 92 210 90 L220 110"/>
              <path className="st1" d="M260 110 H240 V90 H255 H240 V70 H260"/>
              </Anime>
            </svg>
          </div>
          <nav>
            <p id="content" onClick={this.clickEventMenu}>Accueil</p>
            <p id="eF" onClick={this.clickEventMenu}>E&F</p>
            <p id="comp" onClick={this.clickEventMenu}>Compétences</p>
          </nav>
        </div>
        <div className="App" ref={ (section) => { this.content = section; }}>
          <div className="content" style={{top: window.innerHeight/2 - window.innerHeight/9}}>
            <h2>Je suis</h2>
            <div className="caroussel" style={{transform: `translate3d(${this.state.x}px, 0, 0)`}}>
              <h2 id="un">exemple 1</h2>
              <h2 id="deux">exemple 2</h2>
              <h2 id="trois">exemple 3</h2>
            </div>
          </div>
        </div>
        <div className="eF" ref={ (section) => { this.eF = section; }}>
          <EF />
        </div>
        <div className="comps" ref={ (section) => { this.comp = section; }}>
          <Competences/>
        </div>
      </div>
    );
  }
}

export default App;
