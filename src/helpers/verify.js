export default verify;

function verify(string) {
    if(typeof string !== 'string') {
        return false;
    }
    for(var i = 0; i < string.length; i++) {
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
            if(!checkAgainstKeys(string[i])) {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
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
