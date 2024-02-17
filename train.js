


//Task - D

function checkCounter(string1, string2) {
    let a = [...string1];
    let b = [...string2];
    if(a.length == b.length) {
        return true ;
    } else {
        return false ;
    }

};

const a = checkCounter("mitgdoup", "gmtiprou");

console.log(a);

