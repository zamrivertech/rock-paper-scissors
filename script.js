//console.log("Hello, World!")

const buttons = document.querySelectorAll("button");

const results = document.querySelector("#results");

const humanScoreDisplay = document.querySelector("#humanScore");

const computerScoreDisplay = document.querySelector("#computerScore");

const humanChoiceDisplay = document.querySelector('#human_choice_display');

const computerChoiceDisplay = document.querySelector('#computer_choice_display');

const roundResult = document.querySelector("#round_result");

const winner = document.querySelector("#winner");

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) { return "✊";} 
    else if (random == 2) { return "✋"; } 
    else if (random == 3) { return "✌️";}

    return;
}

function getHumanChoice() {

    let choice = null;

    buttons.forEach ((button) => {
        button.addEventListener('click', () => {
            choice = button.value;

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

    //winner.textContent = "";

    humanChoiceDisplay.textContent = humanChoice;
    computerChoiceDisplay.textContent = computerChoice;

    if (humanChoice === "✊" && 
        computerChoice === "✌️") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Rock Smashes Scissors.";
        
    } else if (humanChoice === "✌️" &&
               computerChoice === "✋") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Scissors Cuts Paper.";

    } else if (humanChoice === "✋" && 
              computerChoice === "✊") {

        humanScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Paper Wraps Rock.";
        
    } else  if (computerChoice === "✊" && 
              humanChoice === "✌️") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Scissors Smashed By Rock.";
        
    } else if (computerChoice === "✌️" && 
               humanChoice === "✋") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Paper Cut By Scissors.";

    } else if (computerChoice === "✋" && 
               humanChoice === "✊") {

        computerScore++;
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

        roundResult.textContent = "Rock Wrapped by Paper.";
        
    } else if (humanChoice === computerChoice) { 
            computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;
    
                roundResult.textContent = "It's a Tie!";
    }   

    if (humanScore === 5 ) {
        //You Win

        alert("You Win!");
        location.reload();

    }
    
    if (computerScore === 5) {
        //You Lose
        alert("You Lose!"); 
        location.reload();   
    }


}

//console.log(getHumanChoice());

