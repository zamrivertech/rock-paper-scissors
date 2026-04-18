//console.log("Hello, World!")

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) { return "rock";} 
    else if (random == 2) { return "paper"; } 
    else if (random == 3) { return "scissors";}

    return;
}

function getHumanChoice() {

    let choice = prompt("Rock, Paper Or Scissors", "sCisSoRs");

    return choice.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    console.log("You: " + humanChoice + 
            ", Computer: " + computerChoice);

    if (humanChoice == "rock" && 
        computerChoice == "scissors") {

        humanScore++;

        console.log("Your Score: " + humanScore + 
           ", Computer Score: " + computerScore + 
           ". You Win! Rock Smashes Scissors.");
        
    } else if (humanChoice == "scissors" &&
               computerChoice == "paper") {

        humanScore++;

        console.log("Your Score: " + humanScore + 
           ", Computer Score: " + computerScore + 
           ". You Win! Scissors Cuts Paper.");

    } else if (humanChoice == "paper" && 
              computerChoice == "rock") {

        humanScore++;

        console.log("Your Score: " + humanScore + 
           ", Computer Score: " + computerScore +
           ". You Win! Paper Wraps Rock.");
        
    }     if (computerChoice == "rock" && 
              humanChoice == "scissors") {

        computerScore++;

        console.log("Your Score: " + humanScore + 
           ", Computer Score: " + computerScore + 
           ". You Lose! Rock Smashes Scissors.");
        
    } else if (computerChoice == "scissors" && 
               humanChoice == "paper") {

        computerScore++;

        console.log("Your Score: " + humanScore +
           ", Computer Score: " + computerScore +
           ". You Lose! Scissors Cuts Paper.");

    } else if (computerChoice == "paper" && 
               humanChoice == "rock") {

        computerScore++;

        console.log("Your Score: " + humanScore + 
           ", Computer Score: " + computerScore +
           ". You Lose! Paper Wraps Rock.");
        
    } else { 
    
    console.log("Your Score: " + humanScore + 
       ", Computer Score: " + computerScore + 
       ". It's a Tie!");
    }   


}


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

   if (humanScore > computerScore) {
    console.log("Your Final Score: " + humanScore + " times, "   
                   + " Congratulations!");
   } else {
    console.log("Computer Final Score: " + computerScore + " times, "   
                   + " Better Luck Next Time!");
   }

}

playGame();


