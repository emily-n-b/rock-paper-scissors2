// Computer choice: randomly choose from rock, paper, and scissors

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

/*function playRound(playerSelection, computerSelection) {
    
    let roundResults;
    if (playerSelection === computerSelection) {
        roundResults = "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResults = "You lose! Paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResults = "You win! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResults = "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResults = "You lose! Scissors beat paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResults = "You win! Scissors beat paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResults = "You lose! Rock beats scissors"
    } else if (playerSelection === null) {
        roundResults = "You didn't enter anything"
    } else {
        roundResults = "something went wrong";
    }
    return roundResults;
    
}
*/

/* const computerSelection = getComputerChoice();
const playerSelection = prompt('choose rock, paper, or scissors', ' ').toLowerCase();

console.log(computerSelection);
console.log(playerSelection);
*/

// Initialize scores

let computerScore = 0;
let playerScore = 0;

// the roundResults variable seems irrelevant; need to figure out what else to return in the playRound function

function playRound(playerSelection, computerSelection) {
    
    let roundResults;
    if (playerSelection === computerSelection) {
        roundResults = 0;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResults = 1
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You lose! Paper beats rock");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResults = 2;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You win! Rock beats scissors");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResults = 2;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You win! Paper beats rock");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResults = 1;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You lose! Scissors beat paper");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResults = 2;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You win! Scissors beat paper");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResults = 1
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You lose! Rock beats scissors");
        computerScore++;
    } else if (playerSelection === null) {
        roundResults = 0;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("You didn't enter anything");
    } else {
        roundResults = 0;
        console.log(`You chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log("something went wrong");
    }
    console.log('Computer score: ' + computerScore + ' & Your Score: ' + playerScore);
    
    return roundResults;
    
}

// Loop the game to play 5 rounds
// Determine & return the winner

function game() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('choose rock, paper, or scissors', ' ').toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    let winner;

    if (playerScore > computerScore) {
        winner = "You won! :)"
    }
    else if (computerScore > playerScore) {
        winner = "You lost :("
    }

    return winner;
}

 console.log(game());



