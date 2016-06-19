import React, { Component } from 'react';
import WhiteKey from './whiteKey';
import verify from './../helpers/verify.js';

export default class Piano extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        this.audio = [
            './../assets/sounds/C.wav',
            './../assets/sounds/D.wav',
            './../assets/sounds/E.wav',
            './../assets/sounds/F.wav',
            './../assets/sounds/G.wav',
            './../assets/sounds/A.wav',
            './../assets/sounds/B.wav'
        ];
        this.state = {
            sequence: [],
            text: '',
            'C': 'white',
            'D': 'white',
            'E': 'white',
            'F': 'white',
            'G': 'white',
            'A': 'white',
            'B': 'white'
        };

        this.handleSequence = this.handleSequence.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.colorChangeCycle = this.colorChangeCycle.bind(this);
        this.addToSequence = this.addToSequence.bind(this);
        this.playAudio = this.playAudio.bind(this);
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
            let mp3 = './../assets/sounds/' + userInput[index].toUpperCase() + '.wav';
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
        let mp3 = './../assets/sounds/' + userInput[index].toUpperCase() + '.wav';
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

    /* Sound Helper */
    playAudio(mp3) {
        new Audio(mp3).play();
    }

    render() {
        let whiteKeys = this.keys.map((letter, i) => { 
            return <WhiteKey playAudio={this.playAudio} colorChangeCycle={this.colorChangeCycle} BGC={this.state[letter]} addToSequence={this.addToSequence} letter={letter} key={i} audio={this.audio[i]}/> });
        return (
            <div>
                <div>{this.props.pianoType}</div>
                <div className='piano'>
                    <div className='white'>
                        {whiteKeys}
                    </div>
                    <div className='black'>
                        <div className='keyboard'></div>
                        <div className='keyboard'></div>
                        <div className='keyboard' style={{visibility:"hidden"}}></div>
                        <div className='keyboard'></div>
                        <div className='keyboard'></div>
                        <div className='keyboard'></div>
                    </div>
                    <div>
                        <img src={this.props.img} style={{height: '400px', width: '750px', float: 'right'}}/>
                    </div>
                    <br />
                </div>
                <div>
                    <div>Keys Pressed: {this.state.sequence}</div>
                    <fieldset className='form-group'>
                        <button onClick={this.handleSequence} className='btn btn-warning'>Play a necktie sequence</button>
                        <input onChange={this.handleChangeText} className='form-control' placeholder='input string'></input>
                    </fieldset>
                </div>
            </div>
        )
    }
}