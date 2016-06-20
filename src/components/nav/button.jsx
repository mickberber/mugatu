import React, { Component } from 'react';

/* Renders Buttons that only utilize text */
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.props = props;    
    }

    render() {
        return (<button type='button' className='btn btn-warning'>{this.props.text}</button>)
    }

} 