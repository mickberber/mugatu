import React, { Component } from 'react';

/* White Piano Keys */

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
        this.props.playAudio(this.props.audio);
    }

    render() { 
        return (
            <div onClick={this.handleClick.bind(this)} className='keyboard' style={{backgroundColor: this.props.BGC}}>{this.props.letter}</div>
        )
    }
}