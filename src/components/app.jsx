import React, { Component } from 'react';

import Nav from './nav/nav';
import Piano from './piano/piano';

import store from './../reducers/index';
import { addPianoAction, removePianoAction, chooseTypeAction } from './../actions/index';
/* Renders each Piano within the application */

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState();

    this.addPiano = this.addPiano.bind(this);
    this.removePiano = this.removePiano.bind(this);
    this.chooseType = this.chooseType.bind(this);
  }

  addPiano() {
    //dispatch new piano to redux store
    store.dispatch(
      addPianoAction(<Piano store={store} index={this.state.pianos.length} key={this.state.pianos.length} />)
    );
    //set state again to rerender
    this.setState({pianos: store.getState().pianos})
  }

  removePiano() {
    if(this.state.pianos.length === 0) {
      alert('No pianos to remove!');
    }
    //dispatch to redux store to remove piano 
    store.dispatch(removePianoAction());
    //set state again to rerender
    this.setState({pianos: store.getState().pianos})
  }

  chooseType(newType, newImg, newAudio) {
    store.dispatch(chooseTypeAction(newType, newImg, newAudio));
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
