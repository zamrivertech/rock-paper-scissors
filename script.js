console.log("hello world");

const choices = ["rock","paper","scissors"];




function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)+1];
    // Always choosing scissors and paper, not rock or 0
}

console.log(Math.floor(Math.random()*2)+1);
