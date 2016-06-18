import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  render() {
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-collapse collapse" id="footer">
              <ul className="nav navbar-nav">
                <Link to='/'><button className='btn btn-warning'>Home</button></Link>
              </ul>
              <ul className="nav navbar-right">
                <button onClick={this.props.addPiano} className='btn btn-success'>Add Piano</button>
                <button onClick={this.props.removePiano} className='btn btn-danger'>Remove Piano</button>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
