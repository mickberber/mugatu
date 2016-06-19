import React, { Component } from 'react';

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.props.addToSequence(this.props.letter);
        this.props.colorChangeCycle(this.props.letter);
    }

    render() { 
        return (
            <div onClick={this.handleClick.bind(this)} className='keyboard' style={{backgroundColor: this.props.BGC}}>{this.props.letter}</div>
        )
    }
}