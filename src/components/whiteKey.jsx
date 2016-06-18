import React, { Component } from 'react';

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleClick() {
        this.props.colorChange(this.props.letter);
    }
    
    render() {
        return (
            <div onClick={this.handleClick.bind(this)} className="keyboard" style={{bottom: '0px'}}>{this.props.letter}</div>
        )
    }
}