const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
    //it does not reach 3, only 0, 1 and 2
}

console.log(getComputerChoice());
