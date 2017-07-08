'use strict';

import React from 'react';
import { Link } from 'react-router';

class Playlist extends React.Component {
  getThumbnail(videoId) {
    return `http://img.youtube.com/vi/${videoId}/1.jpg`
  }
  getPlaylist() {
    return this.props.playlist || [];
  }
  selectVideo(video) {
    this.props.selectVideo(video);
  }
  render() {
    return (
      <div>
        <Link to="/home"><img src={require('../../img/logo.png')}></img> Share_IT</Link>
      </div>
    )
  }
}

export default Playlist;
