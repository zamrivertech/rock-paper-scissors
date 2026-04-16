const choices = ["rock","paper","scissors"];

let humanScore = 0;
let computerScore = 0;
let currentHumanChoice = "";
let currentComputerChoice = "";

function getComputerChoice() {
    currentComputerChoice = choices[Math.floor(Math.random()*3)];
    return currentComputerChoice;
    //it does not reach 3, only 0, 1 and 2
}

function getHumanChoice(choice) {
    choice = choice.toLowerCase();

    for (let i = 0; i < choices.length; i++) {
        if (choice == choices[i]) {
            currentHumanChoice = choice;
            return choice;
        }
    }

    return "Choice Invalid";
    //it does not reach 3, only 0, 1 and 2
}

function playRound(humanChoice, computerChoice) {

    humanChoice = currentHumanChoice;
    computerChoice = currentComputerChoice;
    //make game logic

    //HUMAN

    //scissors beats paper
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You Won!";
    }

    //paper beats rock
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You Won!";
    }

    //rock beats scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You Won!";
    }    

        //COMPUTER

    //scissors beats paper
    if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return "You Lost!";
    }

    //paper beats rock
    if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return "You Lost!";
    }

    //rock beats scissors
    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        return "You Lost!";
    } 

        return "It's a Tie";

}

function playGame() {

}

console.log("Hello, Dear User, please enter one of the following below");
console.log("Rock, Paper or Scissors");
console.log("You chose: ");
console.log(getHumanChoice(prompt("Your choice is:", "paper")));
console.log("Computer choice is:");
console.log(getComputerChoice());
console.log(playRound(currentComputerChoice, currentHumanChoice));