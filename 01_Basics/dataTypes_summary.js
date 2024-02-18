// primitive dataTpye

// primitive: String, Number, Null, Undefine, BigInt, Symbol,Boolean

// Reference(non primitive dataType)
// Array, objects, Function

// JavaScript is Dynamic Type language
const Value = "123"  // Cannot define dataTypes in 

let variable1 = String("345")
let variable2 = Number(1234)
let variable3 = null
let variable4;

let Id = Symbol("999")
let anotherId = Symbol("999")

console.log(Id === anotherId ) // false beacuse two different unique variable


/***************************************************************/

// Stack and Heap Memory 

// Primitive (Stack memory)                                        Non Primirtive (Heap memory)
// Stirng, Number, Boolean, BigInt, Symbol, Null, Undefine            Array, Object, Function 


 /******** Stack Memory **********/

 let Email = "meer@gmail.com"
 
 let anotherEmail = Email

 console.log(anotherEmail);
 
 anotherEmail = "Salal@gmail.com"

 console.log(Email);
 console.log(anotherEmail);

 /************* Heap Memory *************/

 let user1 = {
    name : "Meer",
    age: 25
 }

 let user2 = user1

 user2.name = "Salal"

 console.log(user1);
 console.log(user2);