var tests = require('mc-testing');
var write = tests.write;

let pianoObject = {thisis: 'adummyPianoObject'}
let state = { pianos: [] }
// FOR TESTING
//this.state has been replaced with a local version of state
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
    )
);