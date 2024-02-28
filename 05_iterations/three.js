const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    //console.log(greet);
}

// Map

const map = new Map()

map.set("Pak", "Pakistan")
map.set("USA", "United States of America")
map.set("Fr", "France")

//console.log(map);

for (const [key,value] of map) {
   // console.log(key, ":" ,value);
}


// object 


const obj = {
    'game1': "NFS",
    'game2': "Free Fire"
}

for (const [key,value] of obj) {
     //console.log(key, ":" ,value);
 }


 // object is not iterable in forof loop