'use strict';

import React from 'react';
import {connect} from 'react-redux';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Playlist from '../Playlist/Playlist';
import ContributeForm from '../ContributeForm/ContributeForm';
import * as actionCreators from '../../action_creator';
import {isKeyed} from 'immutable';

class Application extends React.Component {

  submit(values) {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return <div className="container">
      <VideoPlayer {...this.props}/>
      <Playlist {...this.props}/>
      <ContributeForm onSubmit={this.submit} />
      </div>
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.get('main').get('playlist'),
    currentVideo: state.get('main').get('currentVideo'),
    played: state.get('main').get('played')};
}

export const ApplicationContainer = connect(mapStateToProps, actionCreators)(Application);
