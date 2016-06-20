var tests = require('mc-testing');
var write = tests.write;

function verify(string) {
    if(typeof string !== 'string') {
        return false;
    }
    if(string === '') {
        //REMOVE ALERTS FOR TESTING
        //alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
        return false;
    }
    for(var i = 0; i < string.length; i++) {
        if(i === 1 && string[i] !== ',') {
            //REMOVE ALERTS FOR TESTING
            //alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            return false;
        }
        if(i % 2 !== 0) {
            if(string[i] !== ',') {
                //REMOVE ALERTS FOR TESTING
                //alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        } else {
            if(!checkAgainstKeys(string[i])) {
                //REMOVE ALERTS FOR TESTING
                //alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        }
    }
    return true;
}

function checkAgainstKeys(val) {
    val = val.toUpperCase();
    let keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    for(var i = 0; i < keys.length; i++) {
        if(val === keys[i]) {
            return true;
        }
    }
    return false;
}

module.exports = write.testFile(
    write.description('verify should return false when passed an empty string')(
        tests.compareYield(
            verify(''), false
        )
    ),
    write.description('verify should return false when passed an object')(
        tests.compareYield(
            verify({}), false
        )
    ),
    write.description('verify should return false when passed a number')(
        tests.compareYield(
            verify(42), false
        )
    ),
    write.description('verify should return false when passed an Array')(
        tests.compareYield(
            verify([]), false
        )
    ),
    write.description('verify should return false when passed a undefined')(
        tests.compareYield(
            verify(undefined), false
        )
    ),
    write.description('verify should return true when passed a correct sequence')(
        tests.compareYield(
            verify('a,b,c'), true
        )
    ),
    write.description('verify should return true when passed a correct sequence of UPPERCASE letters')(
        tests.compareYield(
            verify('A,B,C'), true
        )
    ),
    write.description('verify should return false when passed an incorrect sequence')(
        tests.compareYield(
            verify('a,b,x'), false
        )
    ),
    write.description('verify should return false when passed an correct sequence with spaces')(
        tests.compareYield(
            verify('a, b, c'), false
        )
    ),
    write.description('checkAgainstKeys should return true when passed a correct character')(
        tests.compareYield(
            checkAgainstKeys('a'), true
        )
    ),
    write.description('checkAgainstKeys should return false when passed an incorrect character')(
        tests.compareYield(
            checkAgainstKeys('x'), false
        )
    ),
    write.description('checkAgainstKeys should return true when passed a different correct character')(
        tests.compareYield(
            checkAgainstKeys('b'), true
        )
    )
);

