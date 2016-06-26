let PIANOID = 0;

export const addPiano = (piano) => {
    return {
        type: 'ADD_PIANO',
        id: PIANOID++,
        piano
    }
}

export const removePiano = () => {
    return {
        type: 'REMOVE_PIANO',
        id: PIANOID--
    }
}