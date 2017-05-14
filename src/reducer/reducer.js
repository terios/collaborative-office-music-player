import {List, Map} from 'immutable';

function loadState(state, newState){
  return state.merge(newState);
}
function nextVideo(state){
  let currentVideo = state.get('currentVideo');
  if (currentVideo) {
    return state.set('played'. state.push(currentVideo)).rest().set('currentVideo', state.playlist.first());
  }else {
    return state.set('currentVideo', state.playlist.first());
  }
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'NEXT_VIDEO':
            return nextVideo(state);
        case 'LOAD_STATE':
            return loadState(state, action.state);
    }
    return state;
}
