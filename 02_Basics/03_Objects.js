const mySym  =  Symbol("Key1") 

const User = {
    name: "Meer Salal",
    "Full name": "Meer Salal Gurmani",
    age: 25,
    [mySym]: "Key",
    Email: "meersalal1@gmail.com",
    location: "Punjab"
}

// console.log(User.name)                 // Type of User is String
// console.log(User["name"])              // This is the right way 
// console.log(User["Full name"])

// console.log(typeof User[mySym])

// User.Email = "meersalal2@gmail.com"
// //Object.freeze(User)
// User.Email = "meersalal3@gmail.com"
// console.log(User);

User.greeting = function(){
    console.log("Hello Js User");
}
User.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(User.greeting())
console.log(User.greetingTwo())