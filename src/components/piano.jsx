import React, { Component } from 'react';
import WhiteKey from './whiteKey';

export default class Piano extends Component {
    constructor(props){
        super(props);
        this.keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        this.state = {
            sequence: [],
            text: ''
        }
    }

    colorChange(val) {
        console.log(this.state.sequence);
        this.state.sequence.push(val);
        this.setState({sequence: this.state.sequence});
    }

    handleChangeText(event) {
        console.log(event.target.value);
        //this.setState({text: event.target.value});
    }

    render() {
        let whiteKeys = this.keys.map((letter, i) => { return <WhiteKey colorChange={this.colorChange.bind(this)} letter={letter} key={i}/> })
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
                    <div>{this.state.sequence}</div>
                    <form>
                        <button className='btn btn-primary'>Play a necktie sequence</button>
                        <input onChange={this.handleChangeText} placeholder='input string'></input>
                    </form>
                </div>
            </div>
        )
    }
}