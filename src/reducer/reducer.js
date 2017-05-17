import {combineReducers} from 'redux-immutable';
import {reducer as form} from 'redux-form/immutable' // <--- immutable import

import {List, Map, isKeyed} from 'immutable';

function loadState(state, newState) {
  return state.merge(newState);
}

function playVideo(state, video) {
  let currentVideo = state.get('currentVideo');
  if (currentVideo) {
    return state.merge({currentVideo: video, playlist: state.get('playlist'), played: state.get('played').push(currentVideo)})
  } else {
    console.log(2);
    return {
      ...state,
      currentVideo: video,
      playlist: state.get('playlist').rest()
    }
  }
}

function defaultReducer(state = Map(), action) {
  //export default function(state = Map(), action) {
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

const reducers = {
  form: form,
  main: defaultReducer
}
export default combineReducers(reducers)
