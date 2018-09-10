import React, { Component } from 'react';

class Competence extends Component {
  constructor({langage, niveau}){
    super();
    this.state = {
      langage: langage,
      niveau: niveau,
      width: 0,
      class: ""
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollComp);
  }

  onScrollComp = () => {
    if(this.lang.getBoundingClientRect().y < window.innerHeight && this.lang.getBoundingClientRect().y > -window.innerHeight/20){
      this.setState({width: this.state.niveau, class: "opacity-anim"});
    }
  }

  render() {
    return (
      <div className="grid-lang font-content" ref={ (section) => { this.lang = section; }}>
        <p className="lang">{this.state.langage}</p>
        <div className="progress">
          <div key={this.state.width} className="blue" style={{width:`${this.state.width}%`}}>
          </div>

          <p id="niveau" className={this.state.class} style={{opacity:`${this.state.opacity}`}}>{this.state.niveau}%</p>
        </div>
      </div>
    );
  }
}

export default Competence;
