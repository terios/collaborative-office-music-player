'use strict';

import React from 'react';

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
      <div className="playlist">
        {this.getPlaylist().map(entry =>
          <div key={entry.get('id')} className="videobox" onClick={() => this.selectVideo(entry)}>
          <img src={this.getThumbnail(entry.get('id'))}/>
          <div className="videoDetails">
            <span className="title">{entry.get('title')}</span>
            <span className="owner">{entry.get("owner")}</span>
          </div>
        </div>)}
      </div>
    )
  }
}

export default Playlist;
