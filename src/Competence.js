import React, { Component } from 'react';

class Competence extends Component {
  constructor({langage, niveau}){
    super();
    this.state = {
      langage: langage,
      niveau: niveau,
      width: 100,
      radius: 20
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollComp);
  }

  onScrollComp = () => {
    if(this.lang.getBoundingClientRect().y < window.innerHeight && this.lang.getBoundingClientRect().y > -window.innerHeight/20){
      this.setState({width: 100 - this.state.niveau, radius: 0});
    }
  }

  render() {
    return (
      <div className="grid-lang" ref={ (section) => { this.lang = section; }}>
        <p className="lang">{this.state.langage}</p>
        <div className="progress">
          <div key={this.state.width} className="blanck"  style={{width:`${this.state.width}%`, borderTopLeftRadius: `${this.state.radius}px`, borderBottomLeftRadius: `${this.state.radius}px`}}></div>
        </div>
      </div>
    );
  }
}

export default Competence;
