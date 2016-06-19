var tests = require('mc-testing');
var write = tests.write;

function verify(string) {
    for(var i = 0; i < string.length - 1; i++) {
        if(i === 1 && string[i] !== ',') {
            alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            return false;
        }
        if(i % 2 !== 0) {
            if(string[i] !== ',') {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        } else {
            if(!checkAgainstKeys(string[i].toUpperCase())) {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        }
    }
    return true;
}

function checkAgainstKeys(val) {
    let keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    for(var i = 0; i < keys.length; i++) {
        if(val === keys[i]) {
            return true;
        }
    }
    return false;
}

module.exports = write.testFile(
    write.description('verify should return false when passed and object')(
        tests.compareYield(
            verify({}), false
        )
    )
);

