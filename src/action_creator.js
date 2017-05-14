export function loadState(state) {
    return {
        type: 'LOAD_STATE',
        state
    };
}

export function nextVideo() {
    return {
        type: 'NEXT_VIDEO',
        state
    };
}
