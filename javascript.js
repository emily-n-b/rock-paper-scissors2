function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomNumber) {
        case 0:
        computerChoice = 'rock';
        break;

        case 1:
        computerChoice = 'paper';
        break;

        case 2:
        computerChoice = 'scissors';
        break;
    }
    return computerChoice; 
}

let computerScore = 0;
let playerScore = 0;

let computerSelection;
let playerSelection;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', function() {playRound('rock', computerSelection)});
paper.addEventListener('click', function() {playRound('paper', computerSelection)});
scissors.addEventListener('click', function() {playRound('scissors', computerSelection)});

const results = document.querySelector('#results');

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("scoreContainer");
results.appendChild(scoreContainer);

const playerScoreTitle = document.createElement("p");
playerScoreTitle.classList.add('playerScoreTitle');
playerScoreTitle.textContent = `You`;
scoreContainer.appendChild(playerScoreTitle);
const playerScoreText = document.createElement("p");
playerScoreText.classList.add("scores");

const computerScoreTitle = document.createElement("p");
computerScoreTitle.classList.add('computerScoreTitle');
computerScoreTitle.textContent = `Computer`;
scoreContainer.appendChild(computerScoreTitle);
const computerScoreText = document.createElement("p");
computerScoreText.classList.add("scores");

const winnerContainer = document.createElement("div");
winnerContainer.classList.add("winnerContainer");
results.appendChild(winnerContainer);

const winner = document.createElement("p");
winner.classList.add("winner");
const playAgainButton = document.createElement("button");
playAgainButton.classList.add("playAgainButton");
playAgainButton.textContent = "Play again";

const playerChoiceText = document.getElementById("player-choice-text");
const computerChoiceText = document.getElementById("computer-choice-text");

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice(); 

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
    } 

    if (playerSelection === "rock") {
        playerChoiceText.textContent = "👊";
    } else if (playerSelection === "paper") {
        playerChoiceText.textContent = "✋";
    } else if (playerSelection === "scissors") {
        playerChoiceText.textContent = "✌";
    }

    if (computerSelection === "rock") {
        computerChoiceText.textContent = "👊";
    } else if (computerSelection === "paper") {
        computerChoiceText.textContent = "✋";
    } else if (computerSelection === "scissors") {
        computerChoiceText.textContent = "✌️";
    }
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    declareWinner();
}

playerScoreTitle.appendChild(playerScoreText);
computerScoreTitle.appendChild(computerScoreText);

function declareWinner() {

    if (playerScore == 5) {
        winner.textContent = "Congrats! You won!"
    }
    else if (computerScore == 5) {
        winner.textContent = "Sorry, you lost :("
    }

    if (playerScore == 5 || computerScore == 5) {
        winnerContainer.appendChild(winner);
        winnerContainer.appendChild(playAgainButton);
    }
}

playAgainButton.addEventListener("click", function() {
    computerScore = 0;
    playerScore = 0;

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    winnerContainer.removeChild(winner);
    winnerContainer.removeChild(playAgainButton);
});