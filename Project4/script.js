
let randomValue = parseInt(Math.random()*100 + 1);
const submitBtn = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loweOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    } else if(guess < 1){
        alert('Please Enter a number more than 1')
    } else if(guess > 100){
        alert('Please Enter a number less than 100')
    }
    else {
        preGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number Was: ${randomValue}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomValue){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomValue){
        displayMessage(`Number is TOO Low`)
    } else if(guess > randomValue){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, ` 
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    loweOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button'); 
    p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
 
function endGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomValue = parseInt(Math.random()*100 + 1);
        preGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}

