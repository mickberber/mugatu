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
                <Link to='/'><button className='btn btn-danger'>Home</button></Link>
              </ul>
              <ul className="nav navbar-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-danger">pick-a-piano</button>
                  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                  </ul>
                </div>
                <button onClick={this.props.addPiano} className='btn btn-danger'>Add Piano</button>
                <button onClick={this.props.removePiano} className='btn btn-danger'>Remove Piano</button>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
