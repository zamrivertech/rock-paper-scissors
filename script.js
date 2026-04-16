//console.log("Hello, World!")

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

console.log(getComputerChoice());