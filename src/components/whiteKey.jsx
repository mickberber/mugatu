import React, { Component } from 'react';

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let letter = this.props.letter;
        return (
            <div className="keyboard" style={{bottom: '0px'}}>{letter}</div>
        )
    }
}