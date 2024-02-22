
const parent = document.querySelector('.parent')
// const btn = document.querySelector('.btn')

console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);


for(let i = 0; i< parent.children.length; i++){
    const element = parent.children[i].innerHTML
    console.log(element);
}

// parent.children[2].style.color = 'red';
// console.log(parent.secondElementChild.innerHTML);
// console.log(parent.lastElementChild);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
// console.log(dayOne.parentElement.innerHTML)
// console.log(dayOne.nextElementSibling.innerHTML)

console.log('NODES:',parent.childNodes);

 

