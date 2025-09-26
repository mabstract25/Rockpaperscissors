let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("DRAW!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("WIN!");
    };
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// Create a new function named getComputerChoice
function getComputerChoice() {
    compchoice = Math.random();
    compchoice = Math.round(compchoice * 10) / 10
    if (compchoice >= 0.1 && compchoice <= 0.3) {
        console.log("rock");
        return "rock";
    } else if (compchoice >= 0.4 && compchoice <= 0.6) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
};
// Function returns a random Rock, Paper or Scissors

// Create a new function named getHumanChoice
function getHumanChoice() {
    humchoice = prompt("Choose Your Weapon: Rock, Paper or Scissors?");
    console.log(humchoice);
    return humchoice;
};
// Prompt method that loads on page load
// Take whatever score is entered
// Run computer choice




