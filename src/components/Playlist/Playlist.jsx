'use strict';

import React from 'react';

class Playlist extends React.Component {
  currentVideo

  getThumbnail(videoId){
    return `http://img.youtube.com/vi/${videoId}/1.jpg`
  }
  render() {
    console.log('=-===> ',this.props.playlist);
    return (<div className="playlist">
      {
        this.props.playlist.map(entry =>
          <div key={entry.id} className="videobox">
            <img src={this.getThumbnail(entry.id)}/>
          </div>
        )}
    </div>)
  }
}

export default Playlist;
