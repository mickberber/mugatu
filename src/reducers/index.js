import { createStore } from 'redux';

import audio from './../helpers/audio';

const initialState = {
    pianos: [],
    img: './../assets/pknecktie5.png',
    type: 'NECKTIE',
    audio: audio.necktieAudio
}

function AppReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_PIANO':
            return Object.assign({}, state, {
                pianos: [
                    ...state.pianos,
                    action.piano
                ]
            })
        case 'REMOVE_PIANO':
            return Object.assign({}, state, {
                pianos: state.pianos.slice(0, (state.pianos.length - 1))
            })
        case 'CHOOSE_TYPE':
            return Object.assign({}, state, {
                img: action.img,
                type: action.mode,
                audio: action.audio
            })
        default:
            return state
    }
}

const store = createStore(AppReducer);

export default store; 

