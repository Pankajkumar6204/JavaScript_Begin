
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;

// switch(month){
//     case 1:
//         console.log('jan');
//         break;
//     case 2:
//         console.log('feb');
//         break;
//     case 3:
//         console.log('march');
//         break;

//     default:
//         console.log('your key is false')
//         break;
// }

// const weekDay = 6;
// switch(weekDay){
//     case 1: 
//         console.log('monday')
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday')
//         break;
//     case 4:
//         console.log('thursday')
//         break;
//     case 5:
//         console.log('friday')
//         break;
//     case 6:
//         console.log('saturday')
//         break;
//     case 7:
//         console.log('sunday')
//         break;
//     default:
//         console.log('your key is incorrect')
//         break;

// }


// Truthy and falsy!!!!!!!!!!!

const userEmail = []

if(userEmail){
    // console.log('got user email');
}
else{
    // console.log('Dont have user email')
}

//!!!!!!! falsy values!!!!!!!!!!
// false, 0 ,-0, null, "", NaN, BigInt->0n, Undefined

// !!!!!!!!! Truthy values!!!!!!!!!!
// "0", true, 'false', " " , [] , {} , function(){}


//!!!!!!! Check Empty Array!!!!!!
if(userEmail.length === 0){
    // console.log('array is empty');
}

// !!1!!!!!!1 Check Empty Objectc !!!!!!!
const userObject = {}

if(Object.keys(userObject).length == 0){
    // console.log('Empty object')
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;  // value = 5
// val1 = null ?? 14    // value = 14
// val1 = undefined ?? 16  // value = 16
val1 = null ?? 10 ?? 20

// console.log(val1)

// Ternary operator!!!!
// condition ? true : false

let teaPriceOnMbaCafe = 100
teaPriceOnMbaCafe >=110 ? console.log('Tea Lowest Price') : console.log('Tea is very Expensive')