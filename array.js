
let naam = 'pankaj';
naam[0]= 'pk';
naam[1] = 'jk'

console.log(naam);
// string value will be not change!

// Array start!!!!!!!!!!!!!!!

const myArray = [0,1,2,3,4,5];
const myHero = ['shaktiman','spider','monkey'];

console.log(myHero[0]);


// myArray.push(9);
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(12)
// console.log(myArray);
// myArray.shift()
// console.log(myArray.includes(3));
// console.log(myArray);
// console.log(myArray.includes(12));
// console.log(myArray.indexof(4));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// Slice  Splice 

// console.log('A', myArray)

// const myn1 = myArray.slice(2, 4);
// console.log(myn1);

// console.log("B", myArray);

// const myn2 = myArray.splice(2, 4);
// console.log(myn2);

// console.log("C", myArray)



// !!!!!!!!!!!!!!!!!!!!!!! Array

const marvel_heros = ['Thor', 'Ironman', 'Spiderman'];
const dc_heros = ['Superman', 'Flash', 'Batman'];
const realName = ['monkey', 'spider ', 'many']

marvel_heros.push(dc_heros);
dc_heros.push(realName)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// console.log(dc_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7, [8, 9]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray('pankaj'));
console.log(Array.from('pankaj'))

console.log(Array.from({name: "pankaj"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))