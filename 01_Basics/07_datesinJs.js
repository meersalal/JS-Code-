let mydate = new Date()

// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())

// console.log(mydate.toLocaleTimeString())

//let myCreatedDate = new Date(2024,0,1)
//let myCreatedDate = new Date(2024,0,1,8,3)
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// //console.log(myTimeStamp.getTime())
// console.log(Math.floor(Date.now()/1000));

let date = new Date()
// console.log(date);
// console.log(date.getMonth() + 1);
// console.log(date.getDate());

console.log(date.toLocaleDateString('default', {
    //weekday: 'short',
    //timeStyle: 'short',
    month: '2-digit'
}) )