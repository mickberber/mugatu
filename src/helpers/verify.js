export default verify;
function verify(string) {
    for(var i = 0; i < string.length - 1; i++) {
        if(i % 2 !== 0 && i !== 1) {
            if(string[i] !== ',') {
                return alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            }
        } else {
            if(!checkAgainstKeys(string[i])) {
                return alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            }
        }
    }
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