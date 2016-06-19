import React, { Component } from 'react';


/* Renders White Piano Keys */

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        //handles user input
        this.props.addToSequence(this.props.letter);
        //change piano key colors
        this.props.colorChangeCycle(this.props.letter);
        //play note
        this.playAudio(this.props.audio);
    }

    playAudio(mp3) {
        new Audio(mp3).play();
    }

    render() { 
        return (
            <div onClick={this.handleClick.bind(this)} className='keyboard' style={{backgroundColor: this.props.BGC}}>{this.props.letter}</div>
        )
    }
}