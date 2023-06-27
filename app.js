let choiceOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}

function playRound() {
    let playerSelection = parseInt(prompt('Type in the number of your choice: (1) Rock, (2) Paper, or (3) Scissors'));

    while (true) {
        if (isNaN(playerSelection)) {
            console.log('You must choose a number corresponding to your choice...');
            playerSelection = parseInt(prompt('Type in the number of your choice: (1) Rock, (2) Paper, or (3) Scissors'));

        } else if (playerSelection === 1) {
            playerSelection = 'Rock';
            break;
        } else if (playerSelection === 2) {
            playerSelection = 'Paper';
            break;
        } else if (playerSelection === 3) {
            playerSelection = 'Scissors';
            break;
        } else {
            console.log('Huh? Your choice must be a number 1-3.');
            playerSelection = parseInt(prompt('Type in the number of your choice: (1) Rock, (2) Paper, or (3) Scissors'));
        }
    }

    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log(`IT'S A TIE! ${playerSelection} ties with ${computerSelection}`);
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        console.log(`YOU WON! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        console.log(`YOU LOST! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        roundCounter++;
        playRound();
    }

    if (playerScore > computerScore) {
        return `Your score: ${playerScore}. Computer's score: ${computerScore}. YOU WON THE GAME!`;
    } else if (computerScore > playerScore) {
        return `Your score: ${playerScore}. Computer's score: ${computerScore}. YOU LOST. THE COMPUTER WON THE GAME!`;
    } else {
        return `Your score: ${playerScore}. Computer's score: ${computerScore}. YOU TIED THE GAME!`;
    }
}

console.log(game());
