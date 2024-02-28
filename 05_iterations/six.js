const coding = ['js','java','ruby','python']

const val = coding.forEach( (item) => {
     return item == 'js'
} )


//************* filter **************


const newNums = [1,2,3,4,5,6,7,8,9,10]

const greaterthen5 = newNums.filter( (number) => { return number > 5} )

console.log(greaterthen5);




