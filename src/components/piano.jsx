import React, { Component } from 'react';
import WhiteKey from './whiteKey';

export default class Piano extends Component {
    constructor(props){
        super(props);
        this.keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
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
        //run on user input
        let userInput = this.state.text.split(',');
        let index = 0;
        // userInput.forEach((letter, i) => {
        //     this.colorChangeCycle(letter.toUpperCase());
        // });
        function run() {
            this.colorChangeCycle(userInput[index].toUpperCase());
            index++;
            if(index >= userInput.length) {
                return;
            } else {
                setTimeout(run.bind(this), 1000);
            }
        }
        this.colorChangeCycle(userInput[index].toUpperCase());
        index++;
        setTimeout(run.bind(this), 1000);
    }

    colorChangeCycle(letter) {
        //used to change colors
        let newState = {};
        newState[letter] = this.colorChange(this.state[letter]);
        this.setState(newState);
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
            return <WhiteKey colorChangeCycle={this.colorChangeCycle.bind(this)} BGC={this.state[letter]} addToSequence={this.addToSequence.bind(this)} letter={letter} key={i}/> })
        return (
            <div>
                <div className="piano">
                    <div className="white">
                        {whiteKeys}
                    </div>
                    <div className="black">
                        <div className="keyboard"></div>
                        <div className="keyboard"></div>
                        <div className="keyboard" style={{visibility:"hidden"}}></div>
                        <div className="keyboard"></div>
                        <div className="keyboard"></div>
                        <div className="keyboard"></div>
                    </div>
                    <div>
                        <img src='./../assets/mugatu-o.gif' style={{height: '400px', width: '500px', float: 'right'}}/>
                        <img src='./../assets/pknecktie.png' style={{height: '400px', width: '250px', float: 'right'}}/>
                    </div>
                    <br />
                </div>
                <div>
                    <div>Keys Pressed: {this.state.sequence}</div>
                    <form>
                        <button onClick={this.handleSequence.bind(this)} className='btn btn-primary'>Play a necktie sequence</button>
                        <input onChange={this.handleChangeText.bind(this)} placeholder='input string'></input>
                    </form>
                </div>
            </div>
        )
    }
}