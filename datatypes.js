/*
Primitive datatypes 
There are 7 types of datatypes!
-----> String, Number, Boolean, null, undefined, symbol, BigInt.
*/

// Examples:
// const score = 3445  //Number
// const scoreValue = 1.2  // Number
// let name = "pankaj" // String
// const isLoggedIN = false  // Boolean

// const outsideTemp = null  // null
// console.log(typeof outsideTemp) // object

// let userEmail;  // undefined

// const id = Symbol('124')  // Symbol
// const anotherId = Symbol('124') // Symbol
// console.log(id === anotherId);

// const bigNumber = 324356745345n  // bigInt
// console.log(typeof bigNumber);

/*
Reference(Non primitive) datatypes
-----> Array, Objects, Functions
*/
// Examples:

// Array 
// const heros = ["shaktiman","naagraj", "doga"];
// let myObj = {
//     name:"pankaj",
//     age: 22,
// }

// Functions
// const myFunctions = function(){
//     console.log('my name is pankaj');
// }
// console.log(typeof myFunctions); // functions

// ********* Stack (Primitive) -> esme copy milta hai, Heap (Non-Primitive) -> esme reference milta hai ************

// let myYoutubeName = "pankajsahi.com"

// let anotherName = myYoutubeName
// console.log(anotherName);
// anotherName = "code with pankaj"
// console.log(anotherName);


/*
let userOne = {
    email: "pankaj@google.com",
    upi: "user@pytm"
}
let userTwo = userOne
userTwo.email = "meet_pankaj@google.com"
console.log(userOne.email);
console.log(userTwo.email);
*/