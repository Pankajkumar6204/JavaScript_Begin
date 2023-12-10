
// console.log(addOne(4));
function addOne(num1){
    return num1 +1
}
// Notes:- function calling before declation run successfully in a Syntax!!


const addTwo = function(num2){
    return num2 +2
}
// console.log(addTwo(5))
// Notes:- In this Syntax not calling function before declation they will give lexical declaration Error! 


// Arrow functions
let addThree = (num3) => {
    return num3 + 4
}
// console.log(addThree(5));
// Notes:- They are using Arrow(=>) function not calling function before declaration!

const names = (num1, num2) => (num1 + num2)
// console.log(names(12,3))
// Notes:- if in Arrow(=>) function use brackets then not using return keyword

const naam = (num1, num2) => { return num1 + num2}
// console.log(naam(23,3))
// Notes:- if in Arrow(=>) function use parenthesis then most important of using return keyword

let chai = () => (console.log('DB connected'))
// chai()

function chhai(){
    console.log(this)
}
// chhai()

// Immediately Invoked Function Expressions (IIFE)

(function aurCode(){
    // console.log(`DB Connected`)
} ) ();
// Notes:- if in this function after calling use semocolon(;) then write same other function and execute successfully!!!

// !!! Named IIFE
(function cheirs(){
    // console.log(`DB Connected 2`)
} ) ();

// !!! Without named IIFE
( (name, id) => {
    // console.log(`Your Name is: ${name} and Id: ${id}`)
}) ('Pankaj',234598);


let val1= 10;
let val2= 5;
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(15, 3)
// console.log(result1)
// console.log(result2)


const score = 200

if(score != 100){
    var power = 'fly'
    console.log(`User power: ${power}`)
}
console.log(`User power: ${power}`)



// const submit = ducument.querySelector('.submit')
// const btn = document.querySelector('.container')

// const body = ducument.querySelector('body')
let randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 10 +1)]
    }
    return color
    
}
// console.log(randomColor());


const body = document.querySelector('body')
const btn = document.querySelector('button')
btn.addEventListener('click', function(){
    body.style.backgroundColor = randomColor()
    body.style.color = 'white'
})

