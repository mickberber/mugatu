import React, { Component } from 'react';

import Nav from './nav/nav';
import Piano from './piano/piano';

/* Renders each Piano within the application */

export default class App extends Component {
  constructor(props) {
    super(props)
    this.necktieAudio = [
            './../assets/sounds/NECKTIE/C.wav',
            './../assets/sounds/NECKTIE/D.wav',
            './../assets/sounds/NECKTIE/E.wav',
            './../assets/sounds/NECKTIE/F.wav',
            './../assets/sounds/NECKTIE/G.wav',
            './../assets/sounds/NECKTIE/A.wav',
            './../assets/sounds/NECKTIE/B.wav'
    ];
    this.sillyAudio = [
            './../assets/sounds/MUGATUS_SILLY_MODE/C.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/D.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/E.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/F.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/G.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/A.wav',
            './../assets/sounds/MUGATUS_SILLY_MODE/B.wav'
    ];
    this.pianoAudio = [
            './../assets/sounds/PIANO/C.wav',
            './../assets/sounds/PIANO/D.wav',
            './../assets/sounds/PIANO/E.wav',
            './../assets/sounds/PIANO/F.wav',
            './../assets/sounds/PIANO/G.wav',
            './../assets/sounds/PIANO/A.wav',
            './../assets/sounds/PIANO/B.wav'
    ];
    

    this.state = {
      pianos: [],
      img: './../assets/pknecktie5.png',
      type: 'NECKTIE',
      audio: this.necktieAudio
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
    //using a pianos variable, as to not mutate state
    let pianos = this.state.pianos;
    pianos.pop();
    this.setState({pianos: pianos});
  }

  chooseType(newType, newImg) {
    //set new types' properties before creating a new piano  
    if(newType === 'MUGATUS_SILLY_MODE') {
      this.setState({type: newType, img: newImg, audio: this.sillyAudio});
    } else if(newType === 'PIANO') {
      this.setState({type: newType, img: newImg, audio: this.pianoAudio});
    } else {
      this.setState({type: newType, img: newImg, audio: this.necktieAudio});
    }
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano} removePiano={this.removePiano} chooseType={this.chooseType} currentType={this.state.type}/>
        <div style={{display: 'inline'}}>{this.state.pianos}</div>
      </div>
    );
  }
}
