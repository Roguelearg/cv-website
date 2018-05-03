import React, { Component } from 'react';
import portrait from './portrait.png';
import './MenuLowRes.css';

class MenuLowRes extends Component {

  constructor({clickEventMenu}) {
    super();
    this.state = {
      x: 0,
      menu: 'close',
      clickEventMenu: clickEventMenu
    }
  }

  calcProgress = () => {
    // console.log(this.lowRes.clientWidth);
    this.state.x === 0  ? this.setState({x: this.lowRes.clientWidth + window.innerWidth/25}) : this.setState({x: 0});
    this.state.menu === 'close' ? this.setState({menu: 'open'}) : this.setState({menu: 'close'});
  }

  // _menuOpen = () => {
  //   this.state.menu === 'close' ? this.setState({menu: 'open'}) : this.setState({menu: 'close'});
  // }

  render() {
    return (
      <div className="menuLowRes">
        <div key={this.state.left} className="round" onClick={this.calcProgress.bind(this)} style={{transform: `translate3d(${this.state.x}px, 0, 0)`}}>
          <svg viewBox="0 0 850 650" width="60" height="60" className={`mlr ${this.state.menu}`} >
            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar" />
            <path d="M300,320 L540,320" className="middle_bar" />
            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
          </svg>
        </div>
        <div className="lowRes" style={{transform: `translate3d(${this.state.x}px, 0, 0)`}} ref={ (section) => { this.lowRes = section; }}>
          <div className="photo">
            <img src={portrait} alt="portrait" style={{width:'45%', height:'auto'}}/>
          </div>
          <nav>
            <p id="content" onClick={this.state.clickEventMenu}>Accueil</p>
            <p id="eF" onClick={this.state.clickEventMenu}>E&F</p>
            <p id="comp" onClick={this.state.clickEventMenu}>Compétences</p>
          </nav>
        </div>
      </div>
    );
  }
}


export default MenuLowRes;
