const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScorePara = document.querySelector('#comp-score')
const userScorePara = document.querySelector('#user-score')
const comptxt = document.querySelector('#comptxt')
const youtxt = document.querySelector('#youtxt')
let userScore = 0
let compScore = 0

const drawGame = () =>{
    console.log('Game was draw');
    msg.innerText = 'Game draw'
    msg.style.backgroundColor = '#754043'
}

const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin === true){
    console.log('you won')
    msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`
    youtxt.innerText =`You- ${userChoice}`
    comptxt.innerText = `Computer- ${compChoice}`
    msg.style.backgroundColor = 'green'
    userScore++;
    userScorePara.innerText = userScore
    }
    else{
        console.log('you lose');
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
        compScore++;
        compScorePara.innerHTML = compScore;
        youtxt.innerText =`You- ${userChoice}`
        comptxt.innerText = `Computer- ${compChoice}`
    }
}
  
const gameResult = (userChoice) => {
    console.log('You - ',userChoice);
    const compChoice = genCompChoice();
    console.log('Computer -', compChoice);
    if(userChoice == compChoice){
        drawGame()
    }else{
        let userWin = false;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false: true 
        }else if(userChoice == "paper"){
            userWin = compChoice == "rock"?true:false
        }else{
            userWin = compChoice == "rock"?false:true
        }
        showWinner(userWin, compChoice, userChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        gameResult(userChoice);
    }) 
})


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber];
}