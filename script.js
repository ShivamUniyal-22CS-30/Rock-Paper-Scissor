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


// 4 creating game(): put the playRound() inside it to play best of 5 & also count score

function game(){
    let playerScore=0, compScore = 0;

    for(let i=0; i<5; i++){
        //user input
        let playerSelection = prompt("enter : ").toLowerCase();
        let computerSelection = getComputerChoice();
        
        console.log(`Attempt ${i + 1}\nPlayer: ${playerSelection} & Computer: ${computerSelection}`);

        //Updating scores based on the result
        let roundResult=playRound(playerSelection, computerSelection);

        if(roundResult == 1){
            playerScore++;
        }
        else{
            compScore++;
        }

        // Score after each round
        console.log(`Player Score: ${playerScore}, Computer Score: ${compScore}`);
    }
    // FINAL score displayed after loop completion
    console.log('Final Scores: Player ', playerScore, ' - ', compScore, ' Computer');
}

game();


