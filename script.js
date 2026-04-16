const choices = ["rock","paper","scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
    //it does not reach 3, only 0, 1 and 2
}

function getHumanChoice(choice) {
    choice = choice.toLowerCase();

    for (let i = 0; i < choices.length; i++) {
        if (choice == choices[i]) {
            return choice;
        }
    }

    return "Choice Invalid";
    //it does not reach 3, only 0, 1 and 2
}

function playRound(humanChoice, computerChoice) {

}

console.log("Hello, Dear User, please enter one of the following below");
console.log("Rock, Paper or Scissors");
console.log("You chose: ");
console.log(getHumanChoice(prompt("Your choice is:")));
