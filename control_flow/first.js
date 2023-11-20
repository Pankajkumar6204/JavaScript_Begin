
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log('Executed');
}
else{
    console.log('not Executed')
}

// <, >, <=, >=, ==, !=, === 


const score = 200

// if(score > 110){
//     const power = 'fly'
//     console.log(`power is: ${power}`)
// }

//!!!!!!!!!!!! All condition true then output will be true!
// const userLoggedIn = true;
// const debitCard = true ;
// if(userLoggedIn && debitCard && 2===2 ){
//     console.log('user by this course')
// } 

//!!!!!!!!!! One condition true then output will be true!
const userLoggedInFromGoogle = false
const userLoggeedInFromEmail = false
const user = 3
if(userLoggedInFromGoogle || userLoggeedInFromEmail || 3==user){
    console.log('you are login')
}

