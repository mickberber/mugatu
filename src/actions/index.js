// ACTION TYPES

// App State 
export const ADD_PIANO = 'ADD_PIANO';
export const REMOVE_PIANO = 'REMOVE_PIANO';
export const CHOOSE_TYPE = 'CHOOSE_TYPE';

//Individual Piano States
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const ADD_TO_SEQUENCE = 'ADD_TO_SEQUENCE';
export const CHANGE_TEXT = 'CHANGE_TEXT';


import audio from './../helpers/audio';

// App default state for piano props
export const PianoState = {
    img: './../assets/pknecktie5.png',
    type: 'NECKTIE',
    audio: audio.necktieAudio,
    initialPianoState: {
        sequence: [],
        text: '',
        'C': 'white',
        'D': 'white',
        'E': 'white',
        'F': 'white',
        'G': 'white',
        'A': 'white',
        'B': 'white'
    }
}


//Action Creators
export function addPianoAction(piano) {
    return {
        type: ADD_PIANO,
        piano: piano
    }
}

export function removePianoAction() {
    return {
        type: REMOVE_PIANO
    }
}

export function chooseTypeAction(newType, newImg, newAudio) {
    return {
        type: 'CHOOSE_TYPE',
        mode: newType,
        img: newImg,
        audio: newAudio
    }
}


export function changeColor(letter, index) {
    return {
        type: CHANGE_COLOR,
        letter: letter,
        index: index
    }
}

export function changeText(text, index) {
    return {
        type: CHANGE_TEXT,
        text: text,
        index: index
    }
}

export function addToSequence(letter, index) {
    return {
        type: ADD_TO_SEQUENCE,
        letter: letter,
        index: index
    }
}