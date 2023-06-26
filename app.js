let choiceOptions = ["Rock", "Paper", "Scissors"];
let userChoice = "";
let userScore = 0;
let computerScore = 0;
let cont = 'y';


console.log('Time to play ROCHAMBEAU!');

while (cont === 'y') {
    while (true) {
        try {
            let choiceNumber = parseInt(prompt('Type in the number of your choice: (1) Rock, (2) Paper, or (3) Scissors'));

            if (choiceNumber === 1) {
                userChoice = 'Rock';
                break;
            } else if (choiceNumber === 2) {
                userChoice = 'Paper';
                break;
            } else if (choiceNumber === 3) {
                userChoice = 'Scissors';
                break;
            } else {
                console.log('¯\\(°_o)/¯');
                console.log('Huh? Your choice must be a number 1-3.');
            }
        } catch (e) {
            console.log('¯\\(°_o)/¯');
            console.log('Huh? Your choice must be a number 1-3.');
        }
    }

    console.log(`You chose ${userChoice}.`);

    let computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];

    console.log(`The computer chose ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("IT'S A TIE!");
        console.log('***CURRENT SCORE***\n' +
            'You: ' + userScore + '\n' +
            'Computer: ' + computerScore + '\n');
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors' || userChoice === 'Paper' && computerChoice === 'Rock' || userChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log('YOU WON!');
        userScore++;
        console.log('***CURRENT SCORE***\n' +
            'You: ' + userScore + ' *\n' +
            'Computer: ' + computerScore + '\n');
    } else {
        console.log('THE COMPUTER WON!');
        computerScore++;
        console.log('***CURRENT SCORE***\n' +
            'You: ' + userScore + '\n' +
            'Computer: ' + computerScore + '*\n');
    }

    let cont;

    do {
        cont = prompt("Would you like to play again? (Y/N)").toLowerCase();

        if (cont === 'n') {
            console.log('Thanks for playing! Goodbye!');
            console.log('☉ ‿ ⚆');
            break;
        } else if (cont === 'y') {
            console.log('As you wish...');
            break;
        } else {
            console.log('¯\\(°_o)/¯');
            console.log("Huh? You must enter 'Y' for YES or 'N' for NO. ");
        }
    } while (true);

}