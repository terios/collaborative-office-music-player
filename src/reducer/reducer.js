import {List, Map, isKeyed} from 'immutable';

function loadState(state, newState) {
  console.log('loaded the state', newState);
  return state.merge(newState);
}

function playVideo(state, video) {
  let currentVideo = state.get('currentVideo');
  if (currentVideo) {
    return state.merge({
      currentVideo: video,
      playlist: state.get('playlist'),
      played: state.get('played').push(currentVideo)
    })
  } else {
    console.log(2);
    return {
      ...state,
      currentVideo: video,
      playlist: state.get('playlist').rest()
    }
  }
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'NEXT_VIDEO':
      return nextVideo(state);
    case 'SELECT_VIDEO':
      return playVideo(state, action.video);
    case 'LOAD_STATE':
      return loadState(state, action.state);
    default:
      return state;
  }
  return state;
}
