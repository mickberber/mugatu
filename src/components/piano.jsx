import React, { Component } from 'react';
import WhiteKey from './whiteKey';

export default class Piano extends Component {
    constructor(props){
        super(props);
        this.keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    }
    colorChange() {
        console.log('clicked');
    }
    render() {
        let whiteKeys = this.keys.map((letter, i) => { return <WhiteKey letter={letter} key={i}/> })
        return (
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
            </div>
        )
    }
}