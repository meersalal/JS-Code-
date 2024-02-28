const coding = ['js','java','ruby','python']

// coding.forEach(function (item,index,arr) {
//     console.log(item,index,arr);
// })

// arrow Callbackfunction

coding.forEach( (item,index) => {
    //console.log(item,index);
} )

const user = [
    {
        name: "Meer",
        age: 25
    },
    {
        name: "Ali",
        age: 26
    },
    {
        name: "Yasir",
        age: 24
    }

]

user.forEach( (item,index) => {
    if (index === 0) {
        let count = "first User"  
        console.log(`${count} ${item.name}`); 
    }else if (index === 1) {
        let count = "Second User"  
        console.log(`${count} ${item.name}`);
    }else {
        let count = "Third User"  
        console.log(`${count} ${item.name}`);
    }
} )