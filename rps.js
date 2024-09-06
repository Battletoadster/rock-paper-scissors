const btns = document.querySelectorAll("button");
const playerScoreDisp = document.getElementsByName("player-score")[0];
const computerScoreDisp = document.getElementsByName("computer-score")[0];
const resultText = document.querySelector(".round-result")

btns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice());
    })

});

let playerScore = 0;
let computerScore = 0;
let round = 0;

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

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    if (lowerComputerChoice === lowerHumanChoice) {
        resultText.textContent = `Tie! You both chose ${lowerComputerChoice}`;
    } else if ((lowerComputerChoice === "rock" && lowerHumanChoice === "scissors")
        || (lowerComputerChoice === "paper" && lowerHumanChoice === "rock")
        || (lowerComputerChoice === "scissors" && lowerHumanChoice === "paper")) {
        resultText.textContent = `You lose! ${lowerComputerChoice.charAt(0).toUpperCase() +
            lowerComputerChoice.slice(1)} beats ${lowerHumanChoice}!`;
        computerScore++;
        computerScoreDisp.textContent = computerScore;
    } else {
        resultText.textContent = `You win! ${lowerHumanChoice.charAt(0).toUpperCase() +
            lowerHumanChoice.slice(1)} beats ${lowerComputerChoice}!`;
        playerScore++;
        playerScoreDisp.textContent = playerScore;
    }
    round++;
    if (round === 5) {
        endGame();
    }
}


function endGame() {
    if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log('You lose!')
    }
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
    resetGame();
}

function resetGame() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    computerScoreDisp.textContent = 0;
    playerScoreDisp.textContent = 0;
    resultText.textContent = "Another game?"
}
