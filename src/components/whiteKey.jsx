import React, { Component } from 'react';

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.clicked = false;
    }

    handleClick() {
        this.clicked = true;
        this.props.colorChange(this.props.letter);
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)} className='keyboard' style={{backgroundColor:(this.clicked ? 'blue': 'white'), bottom: '0px'}}>{this.props.letter}</div>
        )
    }
}