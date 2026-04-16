//console.log("Hello, World!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return "rock";
        
    } else if (random == 2) {
        return "paper";
    } else if (random == 3) {
        return "scissors";
    }

    return;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper Or Scissors", "sCisSoRs");

    return choice.toLowerCase();
}

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("humanChoice: " + humanSelection + ", Computer: " + computerSelection);


function playRound(humanChoice, computerChoice) {


    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Win! Rock Smashes Scissors.";
        
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Win! Scissors Cuts Paper.";

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Win! Paper Wraps Rock.";
        
    }     if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Lose! Rock Smashes Scissors.";
        
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Lose! Scissors Cuts Paper.";

    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". You Lose! Paper Wraps Rock.";
        
    } 
    
    return "Your Score: " + humanScore + ", Computer Score: " + computerScore + ". It's a Tie!";

}

return playRound(humanSelection, computerSelection);

}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
