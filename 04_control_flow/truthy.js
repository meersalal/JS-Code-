const username = []

// if (username) {
//     console.log("Got user email");
// }else {
//     console.log("Don't got user email");
// }

// falsy values
// false, 0 , -0 ,"",bigIn 0n, null,undefine, NAN

// truthy values
// true, '0', 'false', " ", {}, [], function(){}


// if (username.length === 0) {
//     console.log('Array is Empty');
// }

// const obj = {}

// if (Object.keys(obj).length === 0) {
//     console.log("Objetc is empty");
// }

// const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("Empty Object");
// }

// Nullish Coalescing Operator(??) : null undefined

let val1 = 5 ?? 10       // return 5
val1 = null ?? 15        // return 15  
val1 = undefined ?? 20   // return 20


//console.log(val1);

// Terniary operator (?)

const score = 100

score == 90 ? console.log("Score is more than 100 ") : console.log("Score is less than 100");