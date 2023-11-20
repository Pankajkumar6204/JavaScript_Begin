// for loop

for(let i = 1; i<= 10; i++){
    let element = i;
    if(element == 5){
        // console.log('5 is best number');
    }
    // console.log(element);
}


for(let i = 1; i<=5; i++){
    // console.log(`Table of: ${i}`)
    for(let j = 1; j<=10; j++){
        // console.log(`inner Loop is: ${j} and Outer loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j)
    }
}

let myArray = ['superman', 'spiderman', 'batman', 'monkey']

for(let i = 0; i< myArray.length; i++){
    let element = myArray[i];
    // console.log(element)
}


// Break method
for(let i  = 1; i<=10; i++){
    if(i == 5){
        // console.log(`vlue ${i} detected`);
        break;
    }
    // console.log(`value of i is ${i}`);
}

// Continue method
// for(let i  = 1; i<=10; i++){
//     if(i == 5){
//         console.log(`vlue ${i} detected`);
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }


//!!!!!!!!!!! while and do-while Loop !!!!!!!!!!!!!!!!!

let i = 0;
while(i <= 10){
    // console.log(`value of i is : ${i}`);
    i = i + 2;
}

let myHero = ['Batman', 'Rohit Sharma', 'Modi', 'superman', 'batman']
let j = 0;
while(j < myHero.length){
    // console.log(`Heros is: ${myHero[j]}`)
    j++;
}


// !!!!!! do while Loop !!!!!!!
let score = 30;
do{
    // console.log(`score is ${score}`);
    score++;
}
while(score <= 10)


//!!!!!!!! for of Loop !!!!!!!!!!
// ["", "", ""]  ---- for of loop on Array

const arr = [1, 2, 3, 4, 5]
// let arr = ['p', 'a', 'n', 'k', 'a', 'j']
for(const num of arr){
    // console.log(num);
}

// [{}, {}, {}] ----- for of loop on Object!!!!!!

const greetings = "Hello world"

for (const value of greetings) {
    // console.log(`Each character is ${value}`);
}

// for of loop on Map() function!!!!!!!!

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr', 'France')
map.set('UK', 'Ukraine')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}



// !!!!!!! for in Loop !!!!!!!!!!!

//[{}, {}, {}, {}] for in loop on Object!!!!!!!
const myObject = {
    js: 'JavaScript',
    cpp: 'Object Oriented Programming(C++)',
    c: 'C Language',
    java: 'Java'
}
for (const keys in myObject) {
    // console.log(keys);   
    // console.log(`${keys} shortcuts is for ${myObject[keys]}`);
}


// ["", "", ""]  ---- for in loop on Array

const Programming = ['js', 'cpp', 'ruby', 'java', 'phython', 'c'];

for (const key in Programming) {
    // console.log(`${key}. language is:- ${Programming[key]}`);
}

// for (const keys of Programming) {
//      console.log(keys);
// }

// for in loop on map() function
const maps = new Map()
map.set('IN', 'INdia')
map.set('USA', 'United states of America')
map.set('Uk', 'Ukraine')
map.set('Rs', 'Russia')

for (const key in map) {    
    // console.log(key)
}


// ------ forEach function

const greet = ['js', 'phython', 'MongoDB','java', 'c++', 'ruby', 'mySQl']

// greet.forEach(function (val) {
//     // console.log(val);
// })

greet.forEach( (val) => {
    // console.log(val);
})


// const myNums = [1,2,3,4,5,6,7,8,9,]

// const newNums = myNums.filter( (nums) => nums<=4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//      return num > 5
// })
// console.log(newNums);


// const myNums = [5,6,7,8,9,9,7,6,5,]
// const newNums = []

// myNums.forEach( (nums) => {
//     if(nums >4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);


// !!!!!!!!!!!!!!!!!!!!!!!!

const books = [
    {booksName:'whatTalks', genre:'English', public:1999 , edition: 2003},
    {booksName:'bookTwo', genre:'History', public:1967, edition:2006},
    {booksName:'bookThree', genre:'Science', public:1867, edition:2008},
    {booksName:'learnExtra', genre:'English', public:1999, edition:2012},
    {booksName:'bookFour', genre:'Hindi', public:1987, edition:2002},
    {booksName:'bookHis', genre:'History', public:1999, edition:2009},
    {booksName:'bookFive', genre:'Math', public:2000, edition:2010},
]

const userBooks = books.forEach( (book) =>
     book.public === 1999
)
console.log(userBooks);

//!!!!! find value using forEach() function

const newBooks = []
books.forEach( (bk) => {
    if(bk.edition > 2000 ){
        newBooks.push(bk)
    }
})
// console.log(newBooks)

//!!!!!!! find value using filter() function

// const findBooks = books.filter( (bk) => {
//     return bk.public > 1998
// })
// console.log(findBooks);