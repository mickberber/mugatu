var tests = require('mc-testing');
var write = tests.write;

function colorChange(color) {
    if(color === 'white') {
        return 'blue';
    } else {
        return 'white';
    }
}

module.exports = write.testFile(
    write.description('Color change should return "white" when passed "blue"')(
        tests.compareYield(
            colorChange('blue'), 'white'
        )
    ),
    write.description('Color change should return "blue" when passed "white"')(
        tests.compareYield(
            colorChange('white'), 'blue'
        )
    )
);