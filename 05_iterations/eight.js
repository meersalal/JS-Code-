const myNum = [1,2,3]

// const myTotal = myNum.reduce( (acc,currval) => {
//     return acc + currval
// },0)

//console.log(myTotal);


const myTotal = myNum.reduce((acc,currVal) => acc + currVal,3)

//console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 8000
    },
    {
        itemName: "C++ course",
        price: 10000
    },
    {
        itemName: "data Science course",
        price: 15000
    },
]

const TotalBill = shoppingCard.reduce( (acc,item) => acc + item.price ,0  )

console.log(`Total Bill = ${TotalBill}`);