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

function getHumanChoice(choice) {

    choice = choice.toLowerCase();

    if (choice == "rock") {
        return "rock";
        
    } else if (choice == "paper") {
        return "paper";
    } else if (choice == "scissors") {
        return "scissors";
    }

    return;
}

console.log("You: " + getHumanChoice(prompt("Rock, Paper Or Scissors?", "sCiSsOrS")));

console.log("Computer: " + getComputerChoice());