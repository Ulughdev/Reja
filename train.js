// F - TASK
function findDoublers(string){
    let b = [...string];
    return new Set(b).size !== b.length;
}

const a = findDoublers("hello");
console.log(a);

