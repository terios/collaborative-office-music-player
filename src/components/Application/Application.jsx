'use strict';

import React from 'react';
import {connect} from 'react-redux';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Playlist from '../Playlist/Playlist';
import Contribute from '../Contribute/Contribute';
import * as actionCreators from '../../action_creator';

class Application extends React.Component {

  render() {
    return <div className="container">
      <VideoPlayer {...this.props}/>
      <Playlist {...this.props}/>
      <Contribute {...this.props}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {playlist: state.get('main').get('playlist'), currentVideo: state.get('main').get('currentVideo'), played: state.get('main').get('played')};
}

export const ApplicationContainer = connect(mapStateToProps, actionCreators)(Application);
