import React, { Component } from 'react';
import portrait from './portrait.png';
import './MenuLowRes.css';

class MenuLowRes extends Component {

  constructor({clickEventMenu}) {
    super();
    this.state = {
      x: 0,
      clickEventMenu: clickEventMenu
    }
  }

  calcProgress = () => {
    // console.log(this.lowRes.clientWidth);
    this.state.x === 0  ? this.setState({x: this.lowRes.clientWidth + window.innerWidth/25}) : this.setState({x: 0});
  }

  render() {
    return (
      <div className="menuLowRes">
        <div key={this.state.left} className="round" onClick={this.calcProgress.bind(this)} style={{transform: `translate3d(${this.state.x}px, 0, 0)`}}>
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
