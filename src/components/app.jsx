import React from 'react';
import { Component } from 'react';
import Nav from './nav';
import Piano from './piano';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pianos: [],
      img: './../assets/pknecktie5.png',
      type: 'NECKTIE'
    };
  }

  addPiano() {
    this.state.pianos.push(<Piano img='./../assets/pknecktie5.png' pianoType={this.state.type} />);
    this.setState({pianos: this.state.pianos});
  }

  removePiano() {
    this.state.pianos.pop();
    this.setState({pianos: this.state.pianos});
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano.bind(this)} removePiano={this.removePiano.bind(this)}/>
        <Piano img='./../assets/pknecktie5.png' pianoType={this.state.type} />
        <div style={{display: 'inline'}}>{this.state.pianos}</div>
      </div>
    );
  }
}
