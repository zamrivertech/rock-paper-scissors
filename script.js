const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
    //it does not reach 3, only 0, 1 and 2
}

function getHumanChoice(choice) {
    return choices[choice];
    //it does not reach 3, only 0, 1 and 2
}
console.log("Hello, Dear User, please enter one of the following below");
console.log("Rock: 0, Paper: 1, Scissors: 2");
console.log(getHumanChoice(prompt("Your choice is:")));
