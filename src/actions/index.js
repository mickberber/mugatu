// ACTION TYPES

export const ADD_PIANO = 'ADD_PIANO';
export const REMOVE_PIANO = 'REMOVE_PIANO';
export const CHOOSE_TYPE = 'CHOOSE_TYPE';

import audio from './../helpers/audio';

export const PianoFilters = {
    img: './../assets/pknecktie5.png',
    type: 'NECKTIE',
    audio: audio.necktieAudio
}

export function addPiano() {
    return {
        type: ADD_PIANO
    }
}

export function removePiano() {
    return {
        type: REMOVE_PIANO
    }
}

export function setPianoFilter(index, filters) {
    return {
        type: CHOOSE_TYPE,
        index,
        filters
    }
}