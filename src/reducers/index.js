import { createStore, combineReducers } from 'redux';
import { ADD_PIANO, REMOVE_PIANO, CHOOSE_TYPE, PianoFilters } from './../actions/index';

function pianos(state = [], action) {
    switch(action.type) {
        case ADD_PIANO:
            return [
                ...state,
                action.piano
            ]
        case REMOVE_PIANO:
            return state.slice(0, (state.length - 1))
        default:
            return state
    }
}

function mugatuApp(state = PianoFilters, action) {
    switch(action.type) {
        case CHOOSE_TYPE:
            return Object.assign({}, state, {
                img: action.img,
                type: action.mode,
                audio: action.audio
            })
        default:
            return state
    }
}

const Reducers = combineReducers({
    mugatuApp,
    pianos
})

const store = createStore(Reducers);

export default store; 

