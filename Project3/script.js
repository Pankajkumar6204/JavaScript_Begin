const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    clock.style.textAlign = 'center'

}, 1000)