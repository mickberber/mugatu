import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/app';
import Splash from './components/splash';

import Reducers from './reducers';
let store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Splash}/>
      <Route path='/app' component={App}/>
    </Router>
  </Provider>
  , document.querySelector('.attach'));
