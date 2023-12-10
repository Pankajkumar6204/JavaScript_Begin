
const body = document.querySelector('body')
const btn = document.querySelector('button')

const randomColor = function() {
    let hex = '123456789ABCDEF'
    let color = '#'
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 10+1)]
    }
    return color
}
// console.log(randomColor())

btn.addEventListener('click', function(){
    body.style.backgroundColor = randomColor()
    body.style.color = 'white'
})