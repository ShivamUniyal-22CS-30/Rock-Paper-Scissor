// 1 creating function getComputerChoice

function getComputerChoice() {
    let str = ['rock', 'paper', 'scissor'];
    //random index :-
    const randomIndex = Math.floor(Math.random() * str.length);
    //random corresponding string :-
    return str[randomIndex];
}

// 2 creating function playRound(); 

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        // Accounting for tie by recalling "playRound()"
        console.log("It's a Tie, Try again ");

        let playerSelection = prompt("enter after tie: ");
        let computerSelection = getComputerChoice(); 

        console.log(`tie player: ${playerSelection} \ntie comp: ${computerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
    }

    // playerSelection == rock
    else if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection == "rock" && computerSelection =="paper"){
        return "You Lose! Paper beats Rock";
    }

    //payerSelection = paper
    else if(playerSelection == "paper" && computerSelection =="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection == "paper" && computerSelection =="scissor"){
        return "You Lose! Scissor beats Paper";
    }

    //playerSelection = scissor
    else if(playerSelection == "scissor" && computerSelection=="rock"){
        return "You Lose! Rock beats scissor";
    }
    else if(playerSelection == "scissor" && computerSelection=="paper"){
        return "You Win! Scissor beats Paper"
    }
}


let playerSelection = prompt("enter : ");
let computerSelection = getComputerChoice();

console.log("player: ",playerSelection);
console.log("computer: ",computerSelection);
console.log(playRound(playerSelection.toLowerCase(),computerSelection))