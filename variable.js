"use strict"; // for treat all js code as newer version


//  variables
const accountId = 7447474
var accountEmail = "pankaj@google.com"
let accountPassword = "435244"
let accountCity = "New Delhi"
let accountState;
// accountId = 3 , //not change const value
console.log('!!!!!!!!!!!!!!!!!!!!!');
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);


// alert( 4 + 4) // show alert on windows



// let score = "3jdfh4"
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// !!!!!!! check value convert number to String 
// let valueInString = String(valueInNumber)
// console.log(typeof valueInString)
// console.log(valueInString)



// convert in boolean
/*
let isLoggedIn = "pankaj"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
*/


// convert in Number 
/*
let someNumber = 3435
let stringNumber= Number(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/

// **************** Operations ******************

// let value = 4
// let negValue = -value
// console.log(negValue);

//**************** Avoid this conversion and write clean code ********************
// console.log("2" > 1);  //true
// console.log("02" > 1);    //true
// console.log("2" === 2);  //false

// console.log(null > 0);   //false
// console.log(null == 0);  // false
// console.log(null >= 0);   // true


// console.log(undefined == 0);   // false
// console.log(undefined > 0);    // false
// console.log(undefined <= 0);     // false 


// console.log('3' + 4);   //!!!!   ans:- 34 
// console.log(3 + '4');    //!!!!   ans:- 34 
// console.log('4' + 3 + 2);   // !!!!  ans:- 432 
// console.log(3 + 2 + '4');    //!!!!   ans:- 54 