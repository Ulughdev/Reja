// C- Task
const moment = require('moment');
const time = moment().format('h:mm');
class Shop {
    #non;
    #lagmon;
    #cola;


    constructor(non, lagmon, cola){
        this.#non = non;
        this.#lagmon = lagmon;
        this.#cola = this.cola;
    };
    
    qoldiq(a, b, c){
        console.log(`Salom Jonibek hozir ${time} ${this.#non}ta non, ${this.#lagmon}ta lagmon, mavjud!`)

    };

    sotish(prodact, sell){
        if(prodact='non'){
            this.#non -= sell;
        }if(prodact='lagmon'){
            this.#lagmon -= sell;
        } if(prodact = 'cola') {
            this.#cola -= sell;

        } else {
            console.log("bizda bunday mahsulot yoq")
        }

    };

    qabul(prodact, buy){
     if(prodact='non'){
            this.#non += buy;
        }if(prodact='lagmon'){
            this.#lagmon += buy;
        } if(prodact = 'cola') {
            this.#cola += buy;

        } else {
            console.log("bizda bunday mahsulot yoq")
        }
    };
}

const shop = new Shop(4,5,2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('lagmon', 10)
shop.qoldiq()
//console.log(shop.remainder());



// B- TASk
// function Num(value){
//     let x = 0;
//     for(let i=0; i<value.length; i++){
//         if(!isNaN(value[i])){
//             x++;
//         }
//     }
//     return x;
// }
// console.log(Num("hdhd7d77dygd7"))

// function Num(a) {
//     let count = 0;
//     for(let i=0; i < a.length; i++){
//         if((a[i]) = Number){
//             count++;
//         }
//     }
//     return count;
// };

// console.log(Num("3hegge7dhh77d8dd"))
// A-TASK
// function countLetter(x, y) {
//     let a = [...y];
//     const b = a.filter(count);
//     function count(value){
//         return value === x;
//     }
//     //console.log(b.length);
//     return b.length;
// }
// const c = countLetter("p", "pablo");
// console.log(c);


// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", //0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// Callback functions
// function maslahatBering(a, callback) {
// if (typeof a !== "number") callback("insert a number", null); 
// else if (a <= 20) callback(null, list[0]); 
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]); 
// else if (a > 50 && a <= 60) callback(null, list[4]);
// else {

//     setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000);
    
//     // setInterval(function () {
//     //     callback(null, list[5]);
//     //  }, 5000);
    
//   }
// }

// console.log("passed here 0");
// maslahatBering(61, (err, data) => { 
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });

// console.log("passed here 1");


//ASYNC functions 
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number"); 
//     else if (a <= 20) return list[0]; 
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3]; 
//     else if (a > 50 && a <= 60) return list[4];
//     else {
        
//         // return new Promise((resolve, reject) => {
//         //     setTimeout(() => {                            
//         //         resolve(list[5]);
//         //     }, 5000); 
//         // });

//         return new Promise((resolve, reject) => {                        //keyin tushuntiriladi.     
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 5000); 
//         });
       
//     }
// }


    
// call via then/catch 
// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");


// call via async/ await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// async function run() {
//     let javob = await maslahatBering(65);          
//     console.log(javob);
// }
// run();







