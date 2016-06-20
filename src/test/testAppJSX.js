var tests = require('mc-testing');
var write = tests.write;

var audio = require('./audioCopy');
let pianoObject = {thisis: 'adummyPianoObject'};
//this.state has been replaced with a local version of state
let state = { pianos: [], type: 'NECKTIE', audio: audio.necktieAudio };


function addPiano() {
    //using a pianos variable, as to not mutate state
    let pianos = state.pianos;
    pianos.push(pianoObject);

    //this.setState has also been removed for testing
    //this.setState({pianos: pianos});
    state.pianos = pianos;
}

function removePiano() {
    //using a pianos variable, as to not mutate state
    let pianos = state.pianos;
    pianos.pop();

    //this.setState has also been removed for testing    
    //this.setState({pianos: pianos});
    state.pianos = pianos;
}

function chooseType(newType, newImg) {
    //set new types' properties before creating a new piano  
    if(newType === 'MUGATUS_SILLY_MODE') {
        //this.setState has also been removed for testing
        state.type = newType;
        state.img = newImg;
        state.audio = audio.sillyAudio;
    } else if(newType === 'PIANO') {
        //this.setState has also been removed for testing
        state.type = newType;
        state.img = newImg;
        state.audio = audio.pianoAudio;
    } else {
        //this.setState has also been removed for testing
        state.type = newType;
        state.img = newImg;
        state.audio = audio.necktieAudio;
    }
}

module.exports = write.testFile(
    write.description('Add Piano should push a React Piano object into state.pianos')(
        tests.compareYield(
            (() => { addPiano(); return state.pianos.length; })(), 1
        )
    ),
    write.description('Add Piano should push a second React Piano object into state.pianos')(
        tests.compareYield(
            (() => { addPiano(); return state.pianos.length; })(), 2
        )
    ),
    write.description('Add Piano should push a third React Piano object into state.pianos')(
        tests.compareYield(
            (() => { addPiano(); return state.pianos.length; })(), 3
        )
    ),
    write.description('Remove Piano should pop a React Piano object off of state.pianos')(
        tests.compareYield(
            (() => { removePiano(); return state.pianos.length; })(), 2
        )
    ),
    write.description('Remove Piano should pop a React Piano object off of state.pianos')(
        tests.compareYield(
            (() => { removePiano(); return state.pianos.length; })(), 1
        )
    ),
    write.description('Remove Piano should pop a React Piano object off of state.pianos')(
        tests.compareYield(
            (() => { removePiano(); return state.pianos.length; })(), 0
        )
    ),
    write.description('Choose Type should change state.type to MUGATUS_SILLY_MODE when passed MUGATUS_SILLY_MODE')(
        tests.compareYield(
            (() => { chooseType('MUGATUS_SILLY_MODE', './../assets/mugatu-o.gif'); return state.type; })(), 
            'MUGATUS_SILLY_MODE'
        )
    ),
    write.description('Choose Type should change state.img to ./../assets/mugatu-o.gif when passed MUGATUS_SILLY_MODE')(
        tests.compareYield(
            (() => { return state.img; })(), 
            './../assets/mugatu-o.gif'
        )
    ),
    write.description('Choose Type should change state.audio to audio.sillyAudio when passed MUGATUS_SILLY_MODE')(
        tests.compareArrays(
            (() => { return state.audio; })(), 
            audio.sillyAudio
        )
    ),
    write.description('Choose Type should change state.type to PIANO when passed PIANO')(
        tests.compareYield(
            (() => { chooseType('PIANO', './../assets/piano.jpg'); return state.type; })(), 
            'PIANO'
        )
    ),
    write.description('Choose Type should change state.img to ./../assets/piano.jpg when passed PIANO')(
        tests.compareYield(
            (() => { return state.img; })(), 
            './../assets/piano.jpg'
        )
    ),
    write.description('Choose Type should change state.audio to audio.pianoAudio when passed PIANO')(
        tests.compareArrays(
            (() => { return state.audio; })(), 
            audio.pianoAudio
        )
    ),
    write.description('Choose Type should change state.type to NECKTIE when passed NECKTIE')(
        tests.compareYield(
            (() => { chooseType('NECKTIE', './../assets/pknecktie5.png'); return state.type; })(), 
            'NECKTIE'
        )
    ),
    write.description('Choose Type should change state.img to ./../assets/pknecktie5.png when passed NECKTIE')(
        tests.compareYield(
            (() => { return state.img; })(), 
            './../assets/pknecktie5.png'
        )
    ),
    write.description('Choose Type should change state.audio to audio.necktieAudio when passed NECKTIE')(
        tests.compareArrays(
            (() => { return state.audio; })(), 
            audio.necktieAudio
        )
    )
);