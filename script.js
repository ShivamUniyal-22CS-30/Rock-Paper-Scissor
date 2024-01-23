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
    if(playerSelection.toLowerCase() === computerSelection){
        // 3 Accounting for tie by recalling "playRound()"
        console.log("It's a Tie, Try again "); 
        return playRound(prompt("Enter after tie: ").toLowerCase(), getComputerChoice());
    }

    // all win condition
    else if(
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissor" && computerSelection == "paper")){ 
            return 1;
    }
    else{ 
        return 0;
    }
}



