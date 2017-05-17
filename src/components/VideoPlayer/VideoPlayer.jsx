'use strict';

import React from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends React.Component {

  finishedVideo(){
    console.log('finished the current video');
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (<div className="videoPlayer">
      <Youtube
       videoId={this.props.currentVideo.get('id')}
       opts={opts}
       onEnd={this.finishedVideo}
     />
    </div>)
  }
}

export default VideoPlayer;
