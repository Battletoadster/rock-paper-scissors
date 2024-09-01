let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors");
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    if (lowerComputerChoice === lowerHumanChoice) {
        console.log(`Tie! You both chose ${lowerComputerChoice}`)
    } else if ((lowerComputerChoice === "rock" && lowerHumanChoice === "scissors")
        || (lowerComputerChoice === "paper" && lowerHumanChoice === "rock")
        || (lowerComputerChoice === "scissors" && lowerHumanChoice === "paper")) {
        console.log(`You lose! 
        ${lowerComputerChoice.charAt(0).toUpperCase() +
        lowerComputerChoice.slice(1)} beats ${lowerHumanChoice}!`);
        computerScore++;
    } else {
        console.log(`You win! 
            ${lowerHumanChoice.charAt(0).toUpperCase() + 
            lowerHumanChoice.slice(1)} beats ${lowerComputerChoice}!`);
        playerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
}

playGame();

if (playerScore === computerScore) {
    console.log("It's a tie!");
} else if (playerScore > computerScore) {
    console.log("You win!")
} else {
    console.log('You lose!')
}
console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
