//  {}  this is called scope 

let a = 10
const b = 20
var c = 30          // not use var bacause var work outside the scope

if(true){
    let a = 50
    const b = 60
    var c = 70
}

// console.log(a)                  // return  a => 10
// console.log(b);                 // return  b => 20
// console.log(c);                 // return  c => 70       


if(true){
    const username = "Meer Salal"
    if(username === "Meer Salal"){
        let email = "meer@gmail.com"
      //  console.log(`Name: ${username} Email: ${email} `)
    }
    //console.log(email)

}


console.log(addOne(9));
function addOne(num) {
    return num + 1
}
console.log(addOne(9));

//console.log(addTwo(4));
const addTwo = function(num){
    return num + 2
}


console.log(addTwo(4));