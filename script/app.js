let playerScore = 0;
let computerScore = 0;
let roundDisplay = 1;
let roundCounter = 0;

function getComputerChoice() {
    let choiceOptions = ["rock", "paper", "scissors"];
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}

document.querySelector('#round').innerHTML = `Current round: ${roundDisplay}`;
document.querySelector('#result').innerHTML = 'MAKE YOUR SELECTION';

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = "";
    roundCounter++;
    roundDisplay++;

    if (playerSelection === computerSelection) {
        result = `IT'S A TIE! You both chose ${playerSelection}! No one gets points. Select again...`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `YOU WON! ${playerSelection} beats ${computerSelection}. Select again...`;
    } else {
        computerScore++;
        result = `YOU LOST! ${computerSelection} beats ${playerSelection}. Select again...`;
    }

    document.querySelector('#round').innerHTML = `Current round: ${roundDisplay}`;
    document.querySelector('#result').innerHTML = result;
    document.querySelector('#score').innerHTML = `You: ${playerScore} Computer: ${computerScore}`;

    if (playerScore === 3 || computerScore === 3 || roundCounter === 5) {
        endGame();
    }

    return;
}

function endGame() {
    const buttons = document.querySelectorAll('input');
    buttons.forEach(button => {
        button.disabled = true;
    });

    let gameResult = "";
    if (playerScore > computerScore) {
        gameResult = `YOU WON THE GAME!`;
    } else if (computerScore > playerScore) {
        gameResult = `YOU LOST. THE COMPUTER WON THE GAME!`;
    } else {
        gameResult = `YOU TIED THE GAME!`;
    }

    document.querySelector('#round').innerHTML = ``;
    document.querySelector('#result').innerHTML = gameResult;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', resetGame);

    const playAgainDiv = document.querySelector('#playAgain');
    playAgainDiv.innerHTML = '';
    playAgainDiv.appendChild(playAgainButton);
    playAgainDiv.style.display = 'block';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    roundDisplay = 1;

    document.querySelector('#result').innerHTML = '';

    const buttons = document.querySelectorAll('input');
    buttons.forEach(button => {
        button.disabled = false;
    });

    document.querySelector('#round').innerHTML = `Current round: ${roundDisplay}`;
    document.querySelector('#result').innerHTML = 'MAKE YOUR SELECTION';
    document.querySelector('#score').innerHTML = `You: ${playerScore} Computer: ${computerScore}`;

    const playAgainDiv = document.querySelector('#playAgain');
    playAgainDiv.style.display = 'none';
}

const buttons = document.querySelectorAll('input');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.id);
    });
});
