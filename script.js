// console.log("Hello world");
// creating function for computer
function getComputerChoice() {
    let choice;
    const ranNum = Math.floor(Math.random() * 3) + 1;

    switch (ranNum) {
        case 1:
            choice = "scissor";
            break;
        case 2:
            choice = "rock";
            break;
        case 3:
            choice = "paper";

    }
    console.log(choice);
    return choice;
}

// function for that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "The game is tie";
    }
    else if (computerSelection === "scissor" && playerSelection === "paper") {
        computerSoccer++;
        return "You Lose! scissor beats paper";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerSoccer++;
        return "You Lose! paper beats rock";
    }
    else if (computerSelection === "rock" && playerSelection === "scissor") {
        computerSoccer++;
        return "You Lose! rock beats scissor";
    }
    else {
        playerSoccer++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

}
//final function playGame include 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter 'rock' 'scissor' or 'paper'").toLowerCase();
    const computerSelection = getComputerChoice();
    const currentRound = playRound(playerSelection, computerSelection);
    console.log(currentRound);
    }
    if(playerSoccer < computerSoccer){
        console.log(`Loser! your score ${playerSoccer} - computer score ${computerSoccer}`);
    }
    else if(playerSoccer > computerSoccer){
        console.log(`Winner! your score ${playerSoccer} - computer score ${computerSoccer}`);
    }
    else{
        console.log(`Draw! your score ${playerSoccer} - computer score ${computerSoccer}`);
    }
}

let playerSoccer = 0;
let computerSoccer = 0;
playGame();



