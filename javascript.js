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

function playRound(playerSelection, computerSelection) {
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
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            break;
        case "computer":
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            break;
        case "tie":
            console.log(`You Tie! ${playerSelection} ties with ${computerSelection}`);
            break;
    }    
    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        if (i > 0) {
            printRoundInfo(playerScore, computerScore)
        }
        let winner = playRound(getPlayerChoice(), getComputerChoice())
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        // Break loop if deficit is greater than number of rounds left
        if (Math.abs(playerScore - computerScore) > 4 - i) {
            break;
        }
    }
    printWinner(playerScore, computerScore)
}

function getPlayerChoice() {
    return prompt("Rock/Paper/Scissors?")
}

function printRoundInfo(playerScore, computerScore) {
    console.log(`Current score : ${playerScore} - ${computerScore}`)
}

function printWinner(playerScore, computerScore) {
    console.log("--------")
    console.log("Game finished!")
    console.log(`Final score : ${playerScore} - ${computerScore}`)
    if (playerScore > computerScore) {
        console.log("YOU WIN!")
    } else if (computerScore > playerScore) {
        console.log("YOU LOSE!")
    } else {
        console.log("TIE!")
    }
}