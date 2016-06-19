import React from 'react';
import { Component } from 'react';
import Nav from './nav';
import Piano from './piano';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pianos: []
    };
  }

  addPiano() {
    this.state.pianos.push(<Piano />);
    this.setState({pianos: this.state.pianos});
  }

  removePiano() {
    this.state.pianos.pop(<Piano />);
    this.setState({pianos: this.state.pianos});
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano.bind(this)} removePiano={this.removePiano.bind(this)}/>
        <Piano color='white' />
        <div style={{display: 'inline'}}>{this.state.pianos}</div>
      </div>
    );
  }
}
