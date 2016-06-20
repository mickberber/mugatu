import React, { Component } from 'react';

import Nav from './nav/nav';
import Piano from './piano/piano';

import audio from './../helpers/audio';

/* Renders each Piano within the application */

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pianos: [],
      img: './../assets/pknecktie5.png',
      type: 'NECKTIE',
      audio: audio.necktieAudio
    };

    this.addPiano = this.addPiano.bind(this);
    this.removePiano = this.removePiano.bind(this);
    this.chooseType = this.chooseType.bind(this);
  }

  addPiano() {
    //using a pianos variable, as to not mutate state
    let pianos = this.state.pianos;
    pianos.push(<Piano img={this.state.img} pianoType={this.state.type} audio={this.state.audio} key={pianos.length}/>);
    this.setState({pianos: pianos});
  }

  removePiano() {
    if(this.state.pianos.length === 0) {
      alert('No pianos to remove!');
    }
    //using a pianos variable, as to not mutate state
    let pianos = this.state.pianos;
    pianos.pop();
    this.setState({pianos: pianos});
  }

  chooseType(newType, newImg) {
    //set new types' properties before creating a new piano  
    if(newType === 'MUGATUS_SILLY_MODE') {
      this.setState({type: newType, img: newImg, audio: audio.sillyAudio});
    } else if(newType === 'PIANO') {
      this.setState({type: newType, img: newImg, audio: audio.pianoAudio});
    } else {
      this.setState({type: newType, img: newImg, audio: audio.necktieAudio});
    }
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano} removePiano={this.removePiano} chooseType={this.chooseType} currentType={this.state.type}/>
        <div>{this.state.pianos}</div>
      </div>
    );
  }
}
