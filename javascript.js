console.log(Math.floor(10 / 4))
function getComputerChoice() {
    value = Math.floor((Math.random() * 10) / 4)
    if (value === 0) {
        result = 'Rock'
    }
    if (value === 1) {
        result = 'Scissors'
    }
    if (value === 2) {
        result = 'Paper'
    }
    return result;
}

function playRound(playerSelection, computerSelection) {

    let player;
    let c;

    if (playerSelection.toUpperCase() == 'ROCK') {

        if (computerSelection.toUpperCase() == 'ROCK') {
            player = 0;
            c = 0;
        } else if (computerSelection.toUpperCase() == 'PAPER') {
            player = 0;
            c = 1;
            console.log(player)
        } else if (computerSelection.toUpperCase() == 'SCISSORS') {
            player = 1;
            c = 0;
            console.log(player)
        }
    } else if (playerSelection.toUpperCase() == 'SCISSORS') {
        if (computerSelection.toUpperCase() == 'ROCK') {
            player = 0;
            c = 1;
        } else if (computerSelection.toUpperCase() == 'PAPER') {
            player = 1;
            c = 0;
        } else if (computerSelection.toUpperCase() == 'SCISSORS') {
            player = 0;
            c = 0;
        }
    } else if (playerSelection.toUpperCase() == 'PAPER') {
        if (computerSelection.toUpperCase() == 'ROCK') {
            player = 1;
            c = 0;
        } else if (computerSelection.toUpperCase() == 'PAPER') {
            player = 0;
            c = 0;
        } else if (computerSelection.toUpperCase() == 'SCISSORS') {
            player = 0;
            c = 1;
        }
    }

    if (player == 1 && c == 0) {
        return 'You won'
    } else if (player == 0 && c == 1) {
        return 'You lost'
    } else if (player == 0 && c == 0) {
        return 'No one won'
    }

}
let playerScore = 0;
let computerScore = 0;

console.log(playerScore, computerScore)

const btnRock = document.querySelector('#RockButton');
btnRock.addEventListener('click', () => {

    computerSelection = getComputerChoice();
    let textOutput;
    textOutput = playRound("Rock", computerSelection) + ". Computer Seection:" + computerSelection;

    const container = document.querySelector('#container');
    container.innerHTML = "";

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = textOutput;

    container.appendChild(content);

    if (playRound("Rock", computerSelection) === "You won") {
        playerScore++;
    } else if (playRound("Rock", computerSelection) === 'You lost') {
        computerScore++;
    }

    console.log("Player Score: ", playerScore, " Computer Score: ", computerScore)

    const scores = document.createElement('div');
    scores.classList.add('scores')
    if (playerScore === 5){
        score = 'You won the game!';
        playerScore = 0; 
        computerScore = 0;
    } else if (computerScore === 5){
        score = 'You lost the game';
        playerScore = 0; 
        computerScore = 0;
    } else {
        score = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore
    }
    scores.textContent = score
    container.appendChild(scores)
});

console.log(playerScore, computerScore)


const btnPaper = document.querySelector('#PaperButton');
btnPaper.addEventListener('click', function () {
    computerSelection = getComputerChoice();

    let textOutput;
    textOutput = playRound("Paper", computerSelection) + ". Computer Selection:" + computerSelection;
    const container = document.querySelector('#container');
    container.innerHTML = "";

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = textOutput;

    container.appendChild(content);

    if (playRound("Paper", computerSelection) === "You won"){
        playerScore ++;
    } else if (playRound("Paper", computerSelection) === "You lost"){
        computerScore ++;
    }

    const scores = document.createElement('div');
    scores.classList.add('scores')
    if (playerScore === 5){
        score = 'You won the game!';
        playerScore = 0; 
        computerScore = 0;
    } else if (computerScore === 5){
        score = 'You lost the game';
        playerScore = 0; 
        computerScore = 0;
    } else {
        score = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore
    }
    scores.textContent = score
    container.appendChild(scores)

});

const btnScissors = document.querySelector('#ScissorsButton');
btnScissors.addEventListener('click', function () {
    computerSelection = getComputerChoice();

    let textOutput;
    textOutput = playRound("Scissors", computerSelection) + ". Computer Selection:" + computerSelection;
    const container = document.querySelector('#container');
    container.innerHTML = "";

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = textOutput;

    container.appendChild(content);

    if (playRound("Scissors", computerSelection) === "You won"){
        playerScore ++;
    }else if (playRound("Scissors", computerSelection) === "You lost"){
        computerScore ++;
    }

    console.log("Player Score: ", playerScore, " Computer Score: ", computerScore)


    const scores = document.createElement('div');
    scores.classList.add('scores')
    if (playerScore === 5){
        score = 'You won the game!';
        playerScore = 0; 
        computerScore = 0;
    } else if (computerScore === 5){
        score = 'You lost the game';
        playerScore = 0; 
        computerScore = 0;
    } else {
        score = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore
    }
    scores.textContent = score
    container.appendChild(scores)
});



