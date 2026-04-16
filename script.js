//console.log("Hello, World!")

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;


    return random;
}

console.log(getComputerChoice());