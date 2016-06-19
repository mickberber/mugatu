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
    }

    addToSequence(val) {
        this.setState({sequence: this.state.sequence + val});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleSequence() {
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
            index++;
            if(index >= userInput.length) {
                return;
            } else {
                setTimeout(createVisibleSync.bind(this), 1000);
            }
        }
        //run call on first item in sequence
        this.colorChangeCycle(userInput[index].toUpperCase());
        index++;
        //delays subsequent calls
        setTimeout(createVisibleSync.bind(this), 1000);
    }

    colorChangeCycle(letter) {
        //create new object to reset state with dynamic key value
        let newState = {};
        newState[letter] = this.colorChange(this.state[letter]);
        this.setState(newState);
        //setTimeout to revert to original color
        setTimeout(
            () => { 
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

    render() {
        let whiteKeys = this.keys.map((letter, i) => { 
            return <WhiteKey colorChangeCycle={this.colorChangeCycle.bind(this)} BGC={this.state[letter]} addToSequence={this.addToSequence.bind(this)} letter={letter} key={i} audio={this.audio[i]}/> });
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
                        <button onClick={this.handleSequence.bind(this)} className='btn btn-warning'>Play a necktie sequence</button>
                        <input onChange={this.handleChangeText.bind(this)} className='form-control' placeholder='input string'></input>
                    </fieldset>
                </div>
            </div>
        )
    }
}