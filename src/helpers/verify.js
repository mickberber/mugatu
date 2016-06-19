export default verify;


/* Verify User Input Formatting */
function verify(string) {
    //check type
    if(typeof string !== 'string') {
        return false;
    }
    for(var i = 0; i < string.length; i++) {
        //check index 1 for comma
        if(i === 1 && string[i] !== ',') {
            alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            return false;
        }
        //check odd indexes for commas
        if(i % 2 !== 0) {
            if(string[i] !== ',') {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        } else {
            //check even indexes for valid keys
            if(!checkAgainstKeys(string[i])) {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        }
    }
    return true;
}

//verify letters are keys on the piano
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
