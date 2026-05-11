//console.log("Hello, World!")

const buttons = document.querySelectorAll("button");

const results = document.querySelector("#results");

const humanScoreDisplay = document.querySelector("#humanScore");

const computerScoreDisplay = document.querySelector("#computerScore");

const choiceDisplay = document.querySelector('#choice');

const roundResult = document.querySelector("#roundResult");

const winner = document.querySelector("#winner");

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) { return "rock";} 
    else if (random == 2) { return "paper"; } 
    else if (random == 3) { return "scissors";}

    return;
}

function getHumanChoice() {

    let choice = null;

    buttons.forEach ((button) => {
        button.addEventListener('click', () => {
            choice = button.id;

                playRound(choice, getComputerChoice());
                /*
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
                */

        });
    });
    

}

    let humanScore = 0;
    let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    winner.textContent = "";

    choiceDisplay.textContent = "You: " + humanChoice +
                                ", Computer: " + computerChoice;

    if (humanChoice === "rock" && 
        computerChoice === "scissors") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "You Win! Rock Smashes Scissors.";
        
    } else if (humanChoice === "scissors" &&
               computerChoice === "paper") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "You Win! Scissors Cuts Paper.";

    } else if (humanChoice === "paper" && 
              computerChoice === "rock") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "You Win! Paper Wraps Rock.";
        
    } else  if (computerChoice === "rock" && 
              humanChoice === "scissors") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "You Lose! Rock Smashes Scissors.";
        
    } else if (computerChoice === "scissors" && 
               humanChoice === "paper") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "You Lose! Scissors Cuts Paper.";

    } else if (computerChoice === "paper" && 
               humanChoice === "rock") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = " You Lose! Paper Wraps Rock.";
        
    } else if (humanChoice === computerChoice) { 
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
    
                roundResult.textContent = "It's a Tie!";
    }   

    if (humanScore === 5 ) {
        //You Win

        winner.textContent = "You Win!";

    }
    
    if (computerScore === 5) {
        //You Lose
        winner.textContent = "You Lose!";    
    }

    if (computerScore > 5 || humanScore > 5) {
        location.reload();
    }


}
 



  




console.log(getHumanChoice());

