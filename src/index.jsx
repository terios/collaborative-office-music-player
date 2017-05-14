/**
 * Created by terios on 5/10/17.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//import io from 'socket.io-client';
import reducer from './reducer/reducer';
import {setState} from './action_creator';
//import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
//import {VideoPlayerContainer} from './components/VideoPlayerContainer';
import {ApplicationContainer} from './components/Application/Application';
import {List} from 'immutable';

import './app.less';


const store = createStore(reducer);
store.dispatch({
  type: 'LOAD_STATE',
  state: {
    playlist: [{
      id: 'QAOMIH7cgh0',
      owner: 'Groot'
    },{
      id: 'leC5WE7P2To',
      owner: 'The fater'
    }],
    currentVideo:{},
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

//const socket = io(`${location.protocol}//${location.hostname}:8090`);
/*socket.on('state', state =>
    store.dispatch(setState(state))
);*/
/*const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

const routes = <Route component={App}>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
*/
