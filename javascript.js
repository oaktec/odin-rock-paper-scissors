function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1,playerSelection.length)

    let winner = "tie";
    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                winner = "computer";
            } else if (computerSelection === "Scissors") {
                winner = "player";
            }
            break;
        case "Scissors":
            if (computerSelection === "Rock") {
                winner = "computer";
            } else if (computerSelection === "Paper") {
                winner = "player";
            }
            break;
        case "Paper":
            if (computerSelection === "Scissors") {
                winner = "computer";
            } else if (computerSelection === "Rock") {
                winner = "player";
            } break;
    }
    switch(winner) {
        case "player":
            lastResultPara.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case "computer":
            lastResultPara.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case "tie":
            lastResultPara.textContent = `You Tie! ${playerSelection} ties with ${computerSelection}`;
            break;
    }    
    processRound(winner);
}

function processRound(winner) {
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    totalScorePara.textContent = `Player ${playerScore} - ${computerScore} Computer`;

    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }
}

function gameOver() {
    totalScorePara.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    let result = "";
    if (playerScore > computerScore) {
        result = "YOU WIN!";
    } else {
        result = "YOU LOSE!";
    }
    finalResultPara.textContent = result;
    rockButton.removeEventListener("click", rockEventHandler);
    scissorsButton.removeEventListener("click", scissorsEventHandler);
    paperButton.removeEventListener("click", paperEventHandler);
}

function rockEventHandler() {
    playRound("rock");
}
function scissorsEventHandler() {
    playRound("scissors");
}
function paperEventHandler() {
    playRound("paper");
}

const rockButton = document.querySelector("button.rock");
rockButton.addEventListener("click", rockEventHandler);
const scissorsButton = document.querySelector("button.scissors");
scissorsButton.addEventListener("click", scissorsEventHandler);
const paperButton = document.querySelector("button.paper");
paperButton.addEventListener("click", paperEventHandler);

const lastResultPara = document.querySelector("div .lastResult");
const totalScorePara = document.querySelector("div .totalScore");
const finalResultPara = document.querySelector("div .finalResult");

let playerScore = 0;
let computerScore = 0;