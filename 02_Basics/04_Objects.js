const tinderUser = {}

tinderUser.name = "Meer",
tinderUser.email = "meer@gmail.com"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "someone@gamil.com",
    fullName: {
        UserFullName: {
            firstName: "Meer",
            lastName: "Salal"

        }
    }
}

//console.log(`Hello Mr ${regularUser.fullName.UserFullName.firstName} ${regularUser.fullName.UserFullName.lastName}`)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)  // {} all the objects save in 

//console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3}

//console.log(obj5)


const User = [
    {
        id: 1,
        email: "abc12@gmail.com"
    },
    {
        id: 2,
        email: "abc13@gmail.com"
    },
    {
        id: 3,
        email: "abc14@gmail.com"
    }
]

//console.log(User[1].email);


// console.log(tinderUser);
// console.log(Object.entries(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('email'));


 const course = {
    coursename: "Javascript",
    prices: "999",
    courseInstructor: "Salal"
 }

//  console.log(course.courseInstructor)

const {courseInstructor: Instructor} = course

console.log(Instructor)

