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

    return choice;
}

// function for that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return ` Game Tie! computer select : ${computerSelection} you also select : ${playerSelection}`;
    }
    else if (computerSelection === "scissor" && playerSelection === "paper") {
        computerScore++;
        return "You Lose! computer select : scissor beats you select : paper";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You Lose! computer select : paper beats you select : rock";
    }
    else if (computerSelection === "rock" && playerSelection === "scissor") {
        computerScore++;
        return "You Lose! computer select : rock beats you select : scissor";
    }
    else {
        playerScore++;
        return `You Win! you select : ${playerSelection} beats computer select : ${computerSelection}`;
    }

}
//final function playGame include 5 rounds this without user interface function
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`round(${i+1})`);
//     const playerSelection = prompt("Enter 'rock' 'scissor' or 'paper'").toLowerCase();
//     const computerSelection = getComputerChoice();
//     const currentRound = playRound(playerSelection, computerSelection);
//     console.log(currentRound);
//     }

//     if(playerScore < computerScore){
//         console.log(`Loser! your score ${playerScore} - computer score ${computerScore}`);
//     }
//     else if(playerScore > computerScore){
//         console.log(`Winner! your score ${playerScore} - computer score ${computerScore}`);
//     }
//     else{
//         console.log(`Draw! your score ${playerScore} - computer score ${computerScore}`);
//     }
// }

// final function playGame with user interface function

function playGame() {
    const result = document.querySelector(".result");
    // create h1 element to show the result of current round
    const displyResult = document.createElement("h1");
    result.appendChild(displyResult);
    // create h4 element to show the scores
    const displayScore = document.createElement("h4");
    result.appendChild(displayScore);
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => {

        if (playerScore === 5) {
            displayScore.textContent = `You won ${playerScore}-${computerScore}!`;
            displyResult.textContent = "Congratulations!";

        } else if (computerScore === 5) {
            displayScore.textContent = `Computer wins ${computerScore}-${playerScore}.`;
            displyResult.textContent = "Sorry try again";

        }
        else {
            const playerSelection = button.textContent.toLowerCase();
            const computerSelection = getComputerChoice();
            const currentRound = playRound(playerSelection, computerSelection);
            displyResult.textContent = currentRound;
            displayScore.textContent = `Your Score: ${playerScore} | Computer Score: ${computerScore}`;
        }

    }))
}
document.body.style.textAlign = "center"; /* to center the whole body text horizantally*/ 
let playerScore = 0;
let computerScore = 0;
playGame();



