export function loadState(state) {
    return {
        type: 'LOAD_STATE',
        state
    };
}


export function selectVideo(video) {
    return {
        type: 'SELECT_VIDEO',
        video
    };
}


export function nextVideo() {
    return {
        type: 'NEXT_VIDEO',
        state
    };
}
