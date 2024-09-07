const weaponBtns = document.querySelectorAll("button");
const playerScoreDisp = document.getElementsByName("player-score")[0];
const computerScoreDisp = document.getElementsByName("computer-score")[0];
const resultText = document.querySelector(".round-result")
const resetBtn = document.createElement("button");
const game = document.querySelector(".game");

weaponBtns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice());
    });
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
        resultText.style.color = "black";
    } else if ((lowerComputerChoice === "rock" && lowerHumanChoice === "scissors")
        || (lowerComputerChoice === "paper" && lowerHumanChoice === "rock")
        || (lowerComputerChoice === "scissors" && lowerHumanChoice === "paper")) {
        resultText.textContent = `You lose! ${lowerComputerChoice.charAt(0).toUpperCase() +
            lowerComputerChoice.slice(1)} beats ${lowerHumanChoice}!`;
        resultText.style.color = "#f44336";
        computerScore++;
        computerScoreDisp.textContent = computerScore;
    } else {
        resultText.textContent = `You win! ${lowerHumanChoice.charAt(0).toUpperCase() +
            lowerHumanChoice.slice(1)} beats ${lowerComputerChoice}!`;
        resultText.style.color = "#04AA6D";
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
        resultText.textContent = "It's a tie!";
        resultText.style.color = "black";
    } else if (playerScore > computerScore) {
        resultText.textContent = "You win!";
        resultText.style.color = "#04AA6D";
    } else {
        resultText.textContent = 'You lose!';
        resultText.style.color = "#f44336";
    }
    toggleWeaponButtons(weaponBtns);
    createResetButton();
}

function toggleWeaponButtons(btns) {
    for (let btn of btns) {
        if (!btn.disabled) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
}


function createResetButton() {
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", resetGame);
    game.after(resetBtn);
}


function resetGame() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    computerScoreDisp.textContent = 0;
    playerScoreDisp.textContent = 0;
    resultText.textContent = "Hmm, what to choose..."
    resetBtn.remove();
    toggleWeaponButtons(weaponBtns);
    resultText.style.color = "black";
}
