import React, { Component } from 'react';
import { Link } from 'react-router';

/* Simple NavBar page */

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-collapse collapse' id='footer'>
              <ul className='nav navbar-nav'>
                <Link to='/'><button className='btn btn-warning'>Home</button></Link>
              </ul>
              <ul className='nav navbar-right'>
                <div className='btn-group'>
                  <button type='button' className='btn btn-warning'>pick-a-piano</button>
                  <button type='button' className='btn btn-warning dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    <span className='caret'></span>
                    <span className='sr-only'>Toggle Dropdown</span>
                  </button>
                  <ul className='dropdown-menu'>
                    <li onClick={this.props.chooseType}>NeckTie</li>
                    <li onClick={this.props.chooseType}>Piano</li>
                    <li onClick={this.props.chooseType}>Silly Mode</li>
                  </ul>
                </div>
                <button onClick={this.props.addPiano} className='btn btn-warning'>Add Piano</button>
                <button onClick={this.props.removePiano} className='btn btn-warning'>Remove Piano</button>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
