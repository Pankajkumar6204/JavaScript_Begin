
const b = 20
const name = 'pankaj'

if(true){
    // let a = 10
    console.log(name);
    var c = 30
    // const b = 40
    console.log('Inner', b);
    // that is an block scope it can be declared in { } quets  
}

// !!!!! that is a global scope it initilize only 'let' and 'const' keyword!!!!!!!!!

// console.log(a);
// console.log('outer',b);
// console.log(c);


// function one(){
//     const username = 'Pankaj'

//     function two(){
//         console.log(username);
        
//         const websiteName = 'google.com'
//         console.log(websiteName);
//     }
//     two()
// }
// one()


// if(true){
//     const userName = "Pankaj"

//     if(userName === "Pankaj"){
//         const websiteName = "@google.com"
//         console.log(userName  +  websiteName);
//     }
// }


console.log(addone(4));
function addone(num){
    return num + 1
}


const addTwo = function(value){
    return value + 2
}
console.log(addTwo(3))