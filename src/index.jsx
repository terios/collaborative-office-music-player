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
//import reducer from './reducer';
//import {setState} from './action_creators';
//import remoteActionMiddleware from './remote_action_middleware';
//import App from './components/App';
//import {VideoPlayerContainer} from './components/VideoPlayerContainer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';



ReactDOM.render(
  <VideoPlayer/>,
  document.getElementById('app')
);


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
