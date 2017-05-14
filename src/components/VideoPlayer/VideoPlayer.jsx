'use strict';

import React from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends React.Component {
  currentVideo

  getVideo(){
    this.currentVideo = this.props.playlist.first();
  }
  finishedVideo(){
    console.log('finished the current video');
  }
  render() {
    this.getVideo()
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (<div className="videoPlayer">
      <Youtube
       videoId={this.currentVideo.id}
       opts={opts}
       onEnd={this.finishedVideo}
     />
    </div>)
  }
}

export default VideoPlayer;
