import React, { Component } from 'react';

import Nav from './nav/nav';
import Piano from './piano/piano';

/* Renders each Piano within the application */
import store from './../reducers/index';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState();
    console.log(this.state); 

    this.addPiano = this.addPiano.bind(this);
    this.removePiano = this.removePiano.bind(this);
    this.chooseType = this.chooseType.bind(this);
  }

  addPiano() {
    //dispatch new piano to redux store
    store.dispatch({
      type: 'ADD_PIANO',
      piano: <Piano img={this.state.mugatuApp.img} 
                    pianoType={this.state.mugatuApp.type} 
                    audio={this.state.mugatuApp.audio} 
                    key={this.state.pianos.length}
                    />
    });
    //set state again to rerender
    this.setState({pianos: store.getState().pianos})
  }

  removePiano() {
    if(this.state.pianos.length === 0) {
      alert('No pianos to remove!');
    }
    //dispatch to redux store to remove piano 
    store.dispatch({
      type: 'REMOVE_PIANO'
    });
    //set state again to rerender
    this.setState({pianos: store.getState().pianos})
  }

  chooseType(newType, newImg, newAudio) {
    store.dispatch({
        type: 'CHOOSE_TYPE',
        mode: newType,
        img: newImg,
        audio: newAudio
    });
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
        <Nav addPiano={this.addPiano} 
             removePiano={this.removePiano}  
             chooseType={this.chooseType} 
             currentType={this.state.mugatuApp.type}
             />
        <div>{store.getState().pianos}</div>
      </div>
    );
  }
}
