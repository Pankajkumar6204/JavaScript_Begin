const books = [
    {booksName:'whatTalks', genre:'English', public:1999 , edition: 2003},
    {booksName:'bookTwo', genre:'History', public:1967, edition:2006},
    {booksName:'bookThree', genre:'Science', public:1867, edition:2008},
    {booksName:'learnExtra', genre:'English', public:1999, edition:2012},
    {booksName:'bookFour', genre:'Hindi', public:1987, edition:2002},
    {booksName:'bookHis', genre:'History', public:1999, edition:2009},
    {booksName:'bookFive', genre:'Math', public:2000, edition:2010},
]

// !!!!!!!! find value using filter function 1st method

// const newBooks = books.filter( (bk) => bk.genre === 'English')
// console.log(newBooks);

//!!!!! 2nd method
// const newBooks = books.filter( (bk) => {
//     return bk.edition >= 2005
// })
// console.log(newBooks);


//!!!!!!!!! find value using forEach() function

const newBooks =[]
books.forEach( (bk) => {
    if(bk.public >= 2000){
        newBooks.push(bk)
    }
})  
// console.log(newBooks);


const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = numbers.map( (num) =>{
//     return num + 10
// })
// console.log(newNums);

// let newNums = []
// numbers.forEach( (num) =>{
//     if(num >= 1 ){
//         newNums.push(num+10)
//     }
// })
// console.log(newNums);


//!!!!!!!! Chainning !!!!!!!!!
const newNums = []
numbers.map( (num) => num * 10).map( (val) => val + 1).filter( (item) => item > 40).forEach( (num) =>{
    if(num >=41){
        newNums.push(num + 2)
    }
})

// console.log(newNums); 


// !!!!!!!!! Reduce Method
const myNumbers = [1,4,5,6,8,9,11]

const totalNumbers = myNumbers.reduce(function (accumulator, currentval){
    console.log(`acc: ${accumulator} and currentval: ${currentval}`);
    return accumulator + currentval
}, 0)

// const totalNumbers = myNumbers.reduce( (acc, curval) =>acc + curval, 0)
console.log(totalNumbers);



const shoppingCart = [
    {
        courseName: 'web developer',
        cousePrice: 2999
    },
    {
        courseName: 'java developer',
        cousePrice: 6999
    },
    {
        courseName: 'phython developer',
        cousePrice: 1999
    },
    {
        courseName: 'DSA',
        cousePrice: 6999
    }
]

const yourTotalPrice = shoppingCart.reduce( (accumulator, currentval) => accumulator + currentval.cousePrice , 0)
console.log(`you are pay total:- ${yourTotalPrice}`)