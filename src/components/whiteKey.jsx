import React, { Component } from 'react';

export default class WhiteKey extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.changeClicked = this.changeClicked.bind(this);
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.changeClicked();
        this.props.colorChange(this.props.letter);
        setTimeout(this.changeClicked, 1000);
    }
    
    changeClicked() {
        if(this.state.clicked) {
            this.setState({clicked: false});
        } else {
            this.setState({clicked: true});
        }
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)} className='keyboard' style={{backgroundColor:(this.state.clicked ? 'blue': 'white'), bottom: '0px'}}>{this.props.letter}</div>
        )
    }
}