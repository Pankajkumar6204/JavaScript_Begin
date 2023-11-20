const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(btn) {
    btn.addEventListener('click', function(e){ 
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'green'
        }
        else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'red'
        }
        else{
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black'
        }
    })
})
