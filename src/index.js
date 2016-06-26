import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import Splash from './components/splash';


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Splash}/>
      <Route path='/app' component={App}/>
    </Router>
  , document.querySelector('.attach'));
