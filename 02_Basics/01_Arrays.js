const myArr = [1,2,3,4,5]

//console.log(myArr);

//const myArr2 = new Array(9,8,7,6,5)

// myArr.push(6)
// myArr.push(7)

// console.log(myArr)

// myArr.pop()
// myArr.pop()
// console.log(myArr);

// myArr.unshift(0)

// console.log(myArr);

// myArr.shift()

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)    // string


//   slice,   splice

console.log("A ", myArr);

const newArr2 = myArr.slice(1, 3)
console.log(newArr2)
console.log("After slice Original Array ", myArr);

const newArr3 = myArr.splice(1, 3)
console.log(newArr3)
console.log("After splice Original Array ", myArr);