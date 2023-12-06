
console.log(addOne(4));
function addOne(num1){
    return num1 +1
}
// Notes:- function calling before declation run successfully in a Syntax!!


const addTwo = function(num2){
    return num2 +2
}
console.log(addTwo(5))
// Notes:- In this Syntax not calling function before declation they will give lexical declaration Error! 


// Arrow functions
let addThree = (num3) => {
    return num3 + 4
}
console.log(addThree(5));
// Notes:- They are using Arrow(=>) function not calling function before declaration!

