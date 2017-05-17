'use strict';

import React from 'react';
import {connect} from 'react-redux';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Playlist from '../Playlist/Playlist';
import * as actionCreators from '../../action_creator';
import {isKeyed} from 'immutable';


class Application extends React.Component {
  render() {
    return <div className="container">
      <VideoPlayer {...this.props} />
      <Playlist {...this.props} />
    </div>
  }
}

function mapStateToProps(state) {
  console.log(isKeyed(state));
  return {
    playlist: state.get('playlist'),
    currentVideo: state.get('currentVideo'),
    played: state.get('played')};
}

export const ApplicationContainer = connect(mapStateToProps, actionCreators)(Application);
