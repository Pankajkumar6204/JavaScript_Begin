const buttons = document.querySelectorAll('.btn')
const body = document.querySelector('body')
const form = document.querySelector('form')

// For Dark-mode On/of
buttons.forEach( function (btn){
    btn.addEventListener('click',function(e){
        if(e.target.id === 'dark-mode'){
            body.style.backgroundColor = '#212121'
            body.style.color = '#ffff'
        }
        else{
            body.style.backgroundColor = '#ffff'
            body.style.color = 'black'
        }
    })
})

// form submit
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter a valid height! ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter a valid weight! ${weight}`
    } else{
       const bmi = (weight / ((height * height) /10000)).toFixed(2)
       result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
           result.innerHTML = `You are Under Weight:- ${bmi}`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `Your Normal Range:- ${bmi}`
        }
        else{
            result.innerHTML = `OverWeight:- ${bmi}`
        }
    }
})