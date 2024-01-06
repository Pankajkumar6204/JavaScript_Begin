
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


// !!!! random color change logic !!!!!!!!!!!!!!!

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
// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     body.style.backgroundColor = randomColor()
//     body.style.color = 'white'
// })


// setTimeout(() => {
//     body.style.backgroundColor = randomColor()
//     // console.log('heloo')
// }, 100);


setInterval(() => {
    body.style.backgroundColor = randomColor()
    body.style.color = 'white'
}, 1000);


// !!!!!!!!  forOf function calling !!!!!!!!!!!
const arr = [ 1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings = 'HelloPankaj'
for (const greet of greetings) {
    // console.log(`Each Char is:${greet}`)
}


// !!!!!!! Map() ITERABLE function !!!!!!!!!!
const map = new Map()
map.set('IND', "HINGLISH")
map.set('USA', 'English')
map.set('CHINA', 'Chinease')
map.set('JAPAN', 'Japanease')

for (const [key, value] of map) {
    // console.log(key,':-', value)
}

// !!!!!!!! Map() ke Uper Iteration nhi ho sakta hai
for (const key in map) {
  console.log(key)
}

// !!!!! Iterable on Object
const myObject = {
    Cpp: 'c++',
    java: 'Java',
    javascript: '.Js'
}
for (const key in myObject) {
    // console.log(key ,'of Extension is:', myObject[key])
}


const YourObject = ['p', 'A', 'n', 'K', 'j']
for (const key in YourObject) {
//    console.log(YourObject[key])
}


// !!!!!!!! forEach function()

const coding = ['js', 'rubi', 'phy', 'java', 'cpp']

coding.forEach( (item) =>{
    // console.log(item)
})

const values = coding.forEach( (item, arr, index) =>{
    // console.log(item, arr, index)
    return item;
})
// console.log(values)


const myCoding = [
    {
        languageName: 'JavaScript',
        lanFileName: 'js'
    },
    {
        languageName: 'Java',
        lanFileName: '.java'
    },
    {
        languageName: 'C++',
        lanFileName: 'cpp'
    }
]

myCoding.forEach( (item) => {
    // console.log(item.lanFileName)
})


const myNums = [1,2,3,4,5,6,7,8,9, 10]

const numsValues = myNums.filter( (nums) => nums > 4 )
// console.log(numsValues);

const numsValue = myNums.filter( (num) => {
    return num < 6
}) 
// console.log(numsValue)


// !!!!!! Chainning in function
const newNums = myNums
               .map( (num) => num *10)
               .map((num) => num + 1)
               .filter( (item) => item > 32)
            //    .forEach( (index) => index)
// console.log(newNums)               