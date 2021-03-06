import React, { Component } from 'react';

import WhiteKey from './whiteKey';
import BlackKeys from './blackKeys';
import verify from './../../helpers/verify.js';

/* Piano Component */

export default class Piano extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

        this.state = this.props.store.getState().mugatuApp;
        console.log(this.props.store.getState())

        this.handleSequence = this.handleSequence.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.colorChangeCycle = this.colorChangeCycle.bind(this);
        this.addToSequence = this.addToSequence.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.colorChange = this.colorChange.bind(this);
    }

    /* USER INPUT WORKERS */

    addToSequence(val) {
        this.setState({sequence: this.state.sequence + val});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleSequence() {
        //Break out of sequence handling if userInput is formatted incorrectly
        if(!verify(this.state.text)) {
            return;
        }
        //runs on user inputted string
        let userInput = this.state.text.split(',');
        //use index as flag for recursion
        let index = 0;

        function createVisibleSync() {
            // runs subsequent calls, returns out of recursion if index has increased past last index in sequence
            this.colorChangeCycle(userInput[index].toUpperCase());
            let mp3 = './../assets/sounds/' + '/' + this.state.type + '/' + userInput[index].toUpperCase() + '.wav';
            this.playAudio(mp3);
            index++;
            if(index >= userInput.length) {
                return;
            } else {
                setTimeout(createVisibleSync.bind(this), 1000);
            }
        }
        //run call on first item in sequence
        this.colorChangeCycle(userInput[index].toUpperCase());
        let mp3 = './../assets/sounds/' + '/' + this.state.type + '/' + userInput[index].toUpperCase() + '.wav';
        this.playAudio(mp3);
        index++;
        //delays subsequent calls
        setTimeout(createVisibleSync.bind(this), 1000);
    }

    /* COLOR CHANGE WORKERS */

    colorChangeCycle(letter) {
        //create new object to reset state with dynamic key value
        let newState = {};
        newState[letter] = this.colorChange(this.state[letter]);
        this.setState(newState);
        //setTimeout to revert to original color
        setTimeout(
            () => { 
                //colorChange needs 'this' to be bound here in the iffe
                let color = (this.colorChange.bind(this, this.state[letter]))();
                newState[letter] = color;
                this.setState(newState);
            }, 
         1000);
    }

    colorChange(color) {
        if(color === 'white') {
            return 'blue';
        } else {
            return 'white';
        }
    }

    /* SOUND WORKER */

    playAudio(mp3) {
        new Audio(mp3).play();
    }

    render() {
        let whiteKeys = this.keys.map((letter, i) => { 
            return <WhiteKey playAudio={this.playAudio} 
                             colorChangeCycle={this.colorChangeCycle} 
                             BGC={this.state[letter]} 
                             addToSequence={this.addToSequence} 
                             letter={letter} key={i} audio={this.state.audio[i]}
                             /> 
                            });
            
        return (
            <div>
                <div>{this.state.pianoType}</div>
                <div className='piano'>
                    <div className='white'>
                        {whiteKeys}
                    </div>
                    <BlackKeys />
                    <div>
                        <img src={this.state.img} style={{height: '400px', width: '750px', float: 'right'}}/>
                    </div>
                    <br />
                </div>
                <div>
                    <div>Keys Pressed: {this.state.sequence}</div>
                    <fieldset className='form-group'>
                        <button onClick={this.handleSequence} className='btn btn-warning'>Play a key sequence</button>
                        <input onChange={this.handleChangeText} className='form-control' placeholder='input key sequence'></input>
                    </fieldset>
                </div>
            </div>
        )
    }
}