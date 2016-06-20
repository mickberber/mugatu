import React, { Component } from 'react';

/* Black Keys */

export default class BlackKeys extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='black'>
                <div className='keyboard'></div>
                <div className='keyboard'></div>
                <div className='keyboard' style={{visibility:"hidden"}}></div>
                <div className='keyboard'></div>
                <div className='keyboard'></div>
                <div className='keyboard'></div>
            </div>
        );
    }
}