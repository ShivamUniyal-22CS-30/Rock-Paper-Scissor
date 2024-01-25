let playerScore = 0, computerScore = 0, roundNumber = 0;

function getComputerChoice() 
{
    let str = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection.toLowerCase() === computerSelection) 
    {
        console.log("It's a Tie, Try again ");
    }

    else if (
        // all win condition
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper"))
    {
        playerScore++;
        roundNumber++;
    }

    else if ((playerSelection == "scissor" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor")) 
    {
        computerScore++;
        roundNumber++;
    }

    else
    {
        console.log("Invalid input");
    }
}

// 4 creating game(): put the playRound() inside it to play best of 5 & also count score

function game()
{
    while (roundNumber < 5)
    {
        console.log(`ROUND-${roundNumber + 1}`);
        //user input
        let playerSelection = prompt("enter : ").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection); // function call

        console.log(`Player: ${playerSelection}-${playerScore} || Computer: ${computerSelection}-${computerScore}`);
    }
    console.log('FINAL SCORES : Player ', playerScore, ' - ', computerScore, ' Computer');
}

game();


