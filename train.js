// E - TASK

function getReverse(a) {
    let b = [...a];
    let c = b.reverse();
    let d = c.join("");
    return d;
}

const h = getReverse("hello");
console.log(h);