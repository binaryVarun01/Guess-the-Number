let randomNumber=parseInt(Math.random()*100+1)
const guessedField=document.querySelector('#guessedNumber');
const submit=document.querySelector('#submit')
const result=document.querySelector('#result')
const prevGuess=document.querySelector('#prevGuess')
const remGuess=document.querySelector('#remGuess')
// let prevGuess=[]
let remainingGuess=1
submit.addEventListener('click',function(event){
    event.preventDefault()
    validateGuess()
})

function validateGuess(){
    // To check the no. is valid or not
    guessedNumber=parseInt(guessedField.value)
    if(guessedNumber===''||guessedNumber<0||guessedNumber>=100)
    {
        console.log('hello')
        // alert('Please Enter valid number according to conditions given')
    }
    else{
        checkGuess()
    }
}

function checkGuess(){
    //Check the guessed number is equal to random no. or not
    if(guessedNumber===randomNumber){
        result.innerHTML='<h4>Congratulations you guessed right no. 😀🎉</h4>'
    }else{
        lowHigh()
    }
}

function lowHigh(){
    //Display guessed no. is low or high to random no.
    if(guessedNumber<randomNumber){
        guessedField.value=''
        result.innerHTML='<h4>Guessed no. is low</h4>'
        prevGuess.innerHTML+=`${guessedNumber}  `
        remainingGuess++
        remGuess.innerHTML=`${11-remainingGuess}`
        endGame()
    }else{
        guessedField.value=''
        result.innerHTML='<h4>Guessed no. is high</h4>'
        prevGuess.innerHTML+=`${guessedNumber}  `
        remainingGuess++
        remGuess.innerHTML=`${11-remainingGuess}`
        endGame()
    }
}

function endGame(){
    if(remGuess===11){
        guessedField.setAttribute('disabled','')
        const res=document.createElement('<h2>Game Ended</h2>')
        result.appendChild(res)
    }
}