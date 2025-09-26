let humanScore = 0;
let computerScore = 0;

// Create a new function named getComputerChoice
function getComputerChoice() {
    let choice = Math.random();
    choice = Math.round(choice * 10) / 10
    console.log(choice);
    if (choice >= 0.1 && choice <= 0.3) {
        console.log("Rock");
    } else if (choice >= 0.4 && choice <= 0.6) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}
// Function returns a random Rock, Paper or Scissors

// Create a new function named getHumanChoice
function getHumanChoice() {
    let choice2 = prompt("Choose Your Weapon: Rock, Paper or Scissors?");
    console.log(choice2);
}
// Prompt method that loads on page load
// Take whatever score is entered
// Run computer choice


