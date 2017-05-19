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

function extractVideoId(videoLink) {
  if (videoLink && videoLink.match(/v=(\w*)/g)[0]) {
    return videoLink.match(/v=(\w*)/g)[0].split('v=')[1];
  }
  return '';
}
function postVideo(state, video) {
  console.log(video.set('id', extractVideoId(video.get('id'))));
  return state.merge({
    ...state,
    playlist: state.get('playlist').push(video.set('id', extractVideoId(video.get('id'))))
  })
}

function defaultReducer(state = Map(), action) {
  //export default function(state = Map(), action) {
  switch (action.type) {
    case 'NEXT_VIDEO':
      return nextVideo(state);
    case 'SELECT_VIDEO':
      return playVideo(state, action.video);
    case 'POST_VIDEO':
      return postVideo(state, action.video);
    case 'LOAD_STATE':
      return loadState(state, action.state);
    default:
      return state;
  }
  return state;
}

const reducers = {
  form: form.plugin({
    account: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case 'CLEAR_CONTRIBUTE_FORM':
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  }),
  main: defaultReducer
}
export default combineReducers(reducers)
