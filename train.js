// // F - TASK
// function findDoublers(string){
//     let b = [...string];
//     return new Set(b).size !== b.length;
// }

// const a = findDoublers("hello");
// console.log(a);

const animal_list = ["fox", "ant", "bird", "cat", "dog"];
let a = [];

function findAnimals(txt){
    if(new Set(txt).size !== animal_list.length) {
        a.push(animal_list.size)

    }else {
       return console.log("Xato")
    }

}

const javob = findAnimals("dogcat");
console.log("javob: ", javob);