/**
 * Created by terios on 5/10/17.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import io from 'socket.io-client';
import reducer from './reducer/reducer';
import {setState} from './action_creator';
//import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import {ApplicationContainer} from './components/Application/Application';

import './app.less';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
  type: 'LOAD_STATE',
  state: {
    playlist: [{
      id: 'QAOMIH7cgh0',
      owner: 'Groot',
      title:'Mr blue sty song'
    },{
      id: 'leC5WE7P2To',
      owner: 'The father',
      title:'cat steven Father and son'
    }],
    currentVideo:[],
    played:[]
  }
});

const routes = <Route component={App}>
  <Route path="/" component={ApplicationContainer}/>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
   document.getElementById('app'));
