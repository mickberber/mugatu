import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory } from 'react-router';

import reducers from './reducers';
import App from './components/app';
import Splash from './components/splash';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path='/' component={Splash}/>
      <Route path='/app' component={App}/>
    </Router>
  </Provider>
  , document.querySelector('.attach'));
