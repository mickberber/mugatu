import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.textColor = props.textColor;
  }
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-collapse collapse" id="footer">
              <ul className="nav navbar-nav">
                <li><a href='/'><div style={{color: this.textColor }}><i className="fa fa-home" aria-hidden="true"></i> home</div></a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
