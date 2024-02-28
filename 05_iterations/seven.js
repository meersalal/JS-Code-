//********* map ***********

const numb = [1,2,3,4,5,6,7,8,9,10]

// const newNums = numb.map( (num) => num + 10 )

//console.log(newNums);

const newNums = numb.map( (num) => num +10 ).map( (num) => num *10 ).filter( (num) => num > 150)

console.log(newNums);