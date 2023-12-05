
function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("j");
}
// sayMyName()


// !!!!!! addTwo Numbers functions

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// addTwoNumbers(4, 3)
// addTwoNumbers(4, 'a')

//!!!!!! Make functions!!!!!!!!!!
function subTwoNumbers(number1, number2){
    // console.log(number1+ number2);

    // let result = number1 + number2
    // return result
    // !!!!!!!!!!!
    // console.log('hello');  // before return statement code will compile success!
    return number1 + number2
    // console.log('hello')  // after return statement code will be not compile
}
// console.log(subTwoNumbers(3, 4));

const result = subTwoNumbers(6, 2)

// console.log("result:", result);

// !!!!!!!! UserLoggedInMessage !!!!!!!!!!!
function UserLoggedInMessage(username){
    return `${username} just logged in`
}
const userLogged = UserLoggedInMessage('pankaj')
console.log(userLogged);


// Takes Parameters using functions

function loginUserMessage(userFirstName = 'Pankaj', userLastName = 'Kushwaha'){
    // if(userFirstName === undefined && userLastName !== undefined){
    //     console.log("Please Enter Your First Name");
    //     return 
    // }
    // !!!!!!!!!!!!! Short condition
    if(!userFirstName){
        console.log("Please Enter Your First Name");
        return
    }
    // else if(userFirstName !== undefined && userLastName === undefined){
    //     console.log("Please Enter Your Last Name");
    //     return
    // }

    else if(!userLastName){
        // console.log("Please Enter Your last name");
        return 
    }
    else{
        return `${userFirstName} ${userLastName} just logged In`
    }
}
// console.log(loginUserMessage());

const login  = loginUserMessage("Pankaj", "kushwaha")
// console.log(login);


// !!!!!!!!!!!!!!!!!!! spread

function calcCartPrice(value1, value2, ...num1) {
    return num1
}
// console.log(calcCartPrice(412, 323, 22));



// const user = {
//     // name: 'Pankaj',
//     // id: 'google@123',
//     // price: 998
// }
function handleObject(anyObject){
    //  console.log(`user name: ${anyObject.name} , goods id: ${anyObject.id} and Price :${anyObject.price}`);
}
// handleObject(user)
handleObject({
    name: 'Pankaj',
    id: 'bkid123',
    price: 999
})


// const newArray = [200, 400, 300, 500];
function returnSecondValue(getValue){
    return getValue[2]
}
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([400, 434, 3546, 35467]));


//~~~~~~~~~~~~~~~ Arrow Functions ~~~~~~~~~~~~~~~~~~~~~~~

const user = {
    username: 'Pankaj',
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'Sammy'
// user.welcomeMessage()
// console.log(this);


function one(){
    const username = 'Pankaj'
    // console.log(this.username)  // output undefined show in window
}
one()

const two = function(){
    const username = 'kumar'
    // console.log(this.username)  // output undefined show in window
}
two()

const three = () => {
    const username = 'pankaj'
    // console.log(this.username);   // output undefined show in window
}
three()


// !!!!!!!!!!!!!!!!! Arrow function
// Explicit arrow function
const addnum = (num1, num2) => {
    // {} ke ander return keyword likhana hoga ,and if without {} breces not declared return keyword
    return num1 + num2
}
// console.log(addnum(4, 5))

// !!!!!!!!!!!! Implicit arrow function
// this method most usuable in React.js
const sum = (num1, num2) =>  ( num1 + num2 )

// console.log(sum(4,8))
 
// @@@@@@@@@@@ Object return @@@@@@@@@@@@
const usrname = (num1, num2) => ({username: 'pankaj'});

// console.log(usrname(4, 7))


// Immediately Invoked Functions Expressions (IIFE)

//many times global scope ke polusion(varible) se jo problem hoti hai, uss global scope ke variable ya jo bhi declaration  hai uske polusion ko hatane ke liye (IIFE) ka use kiya jata hai !!!!!!!!!!!!!!!!!!!!!!!!!
// (function immediately(){
//     // it is named IIFE
//     console.log(`database is connected`)
// })();   // semicolon mendatary hai kyuki eske bina next IIFE print nhi hoga

// named IIFE
// (function chai() {
//     console.log(`database return value`)
// })();

// ........... without named IIFE
// ( (name) => {
//     console.log(`that is your database ${name}`)
// })('Pankaj');

// !!!!!!!!!!!!!!!!!! IIFE declared in a single line

// ( (fee) => {
//     console.log(`your current fees Rs: ${fee}`)
// })(2999)

let val1 = 10
let val2 = 20
function addNum(num1, num2){
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 3)
// console.log(result1, result2)
// console.log(result2)