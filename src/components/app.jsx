import React, { Component } from 'react';

import Nav from './nav';
import Piano from './piano';

/* Renders each Piano within the application */

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pianos: [],
      img: './../assets/pknecktie5.png',
      type: 'NECKTIE'
    };
    this.addPiano = this.addPiano.bind(this);
    this.removePiano = this.removePiano.bind(this);
    this.chooseType = this.chooseType.bind(this);
  }

  addPiano() {
    //using a pianos variable, as to not mutate state
    let pianos = this.state.pianos;
    pianos.push(<Piano img='./../assets/pknecktie5.png' pianoType={this.state.type} />);
    this.setState({pianos: pianos});
  }

  removePiano() {
    //using a pianos variable, as to not mutate state
    let pianos = this.state.pianos;
    pianos.pop();
    this.setState({pianos: pianos});
  }

  chooseType(newType) {
    this.setState({type: newType});
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano} removePiano={this.removePiano} chooseType={this.chooseType}/>
        <Piano img='./../assets/pknecktie5.png' pianoType={this.state.type} />
        <div style={{display: 'inline'}}>{this.state.pianos}</div>
      </div>
    );
  }
}
