const mysym = Symbol("key1");

const jsUser = {
    name: "pankaj",
    "full name": "pankaj kushwaha",
    [mysym]: "mykey1",
    age: 15,
    location: "New Delhi",
    email: "pankaj@google.com",
    isLoggeedIn: false,
    lastLoginDate: ["monday", "saturday"]    
}

// console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// console.log(typeof jsUser[mysym]);

jsUser.email = "pankaj@chatgpt.com"
// Object.freeze(jsUser)
// console.log(jsUser['email'])

jsUser.email = "pankaj@microsoft.com"
// console.log(jsUser)

// jsUser.greetings = function(){
//     console.log('hello Js');
// }
// jsUser.greetings2 = function(){
//     console.log(`Hello Js User mr. ${this.name}`);
// }
// console.log(jsUser.greetings());
// console.log(jsUser.greetings2());



// !!!!!!!!!!!!!!!!!!!!!!!!

const tinderUser = {
    Id: "903d03",
    lastname: "kushwaha"
}

tinderUser.id = 'dfid35'
tinderUser.name = 'Pankaj'
tinderUser.isLoggeedIn = false

console.log(tinderUser);
console.log(tinderUser.ida);

tinderUser.cards = function(){
    console.log(`your id: ${this.ida}`);
}

// console.log(tinderUser.cards());

const reguralUser = {
    email: "pankaj@google.com",
    id: "pankaj998",
    fullname: {
        userfullName:{
            firstName: "Pankaj",
            lastName: "kushwaha"
        }
    }
}

// console.log(reguralUser.fullname?.userfullName?.lastName);
// console.log(reguralUser.fullname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "p"}
let obj4 = {5: "pankaj", 6: "kumar", 9: "kushwaha"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// !!!!!! Using Spread method !!!!!!!!!!!!!
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: '123b',
        email: "P@gmail.com",
        name: "pankaj"
    },
    {
        id: '123b',
        email: "P@gmail.com",
        name: "pankaj"
    },
    {
        id: '123b',
        email: "P@gmail.com",
        name: "pankaj"
    }
]

// !!!!!!! Takes Database value and keys!!!!!!!!!!! 
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('lastname'))  // true
// console.log(tinderUser.hasOwnProperty('greetings'))  // false


const course = {
    courseName: "js in Hindi",
    fees: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor:Instructor, fees} = course
// console.log(Instructor);
// console.log(fees);
   
// {
//     name: 'pankaj',
//     id: '2324bv',
//     fee: "freee"
// }

