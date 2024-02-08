let playerScore = 0, computerScore = 0, roundNumber = 0;

function getComputerChoice() {
    let str = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a Tie, Try again ");
    }

    else if (
        // all win condition
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")) {
        playerScore++;
        roundNumber++;
    }

    else if ((playerSelection == "scissor" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor")) {
        computerScore++;
        roundNumber++;
    }

    else {
        console.log("Invalid input");
    }
}

// 4 creating game(): put the playRound() inside it to play best of 5 & also count score





// 7-2-2024 => DOM MANIPULATION

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissor = document.querySelector('#btnScissor');

// 1)  addEventListener() to btns to call playRound() with correct playerSelection

let playerSelection = '';
let computerSelection = ' ';


const divResult = document.querySelector('#divResult');
divResult.style.marginTop = '10px';
// divResult.style.cssText = 'margin-top:15px; border:2px solid orange; border-radius:2px; ';




btnRock.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        divResult.textContent = `player : ${playerSelection}-${playerScore}, computer : ${computerSelection}-${computerScore}`;
    }
    else {
        if (playerScore > computerScore) {
            divResult.textContent = `YOU WON!-${playerScore} || comp-${computerScore}`
        }
        else {
            divResult.textContent = `COMPUTER WON-${computerScore} || player-${playerScore}`
        }
    }
})

btnPaper.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        divResult.textContent = `player : ${playerSelection}-${playerScore} , computer : ${computerSelection}-${computerScore}`;
    }
    else {
        if (playerScore > computerScore) {
            divResult.textContent = `YOU WON!-${playerScore} || comp-${computerScore}`
        }
        else {
            divResult.textContent = `COMPUTER WON-${computerScore} || player-${playerScore}`
        }
    }

})

btnScissor.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'scissor';
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        divResult.textContent = `player : ${playerSelection}-${playerScore} , computer : ${computerSelection}-${computerScore}`;
    }
    else {
        if (playerScore > computerScore) {
            divResult.textContent = `YOU WON!-${playerScore} || comp-${computerScore}`
        }
        else {
            divResult.textContent = `COMPUTER WON-${computerScore} || player-${playerScore}`
        }
    }
})

