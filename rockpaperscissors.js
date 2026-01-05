

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                console.log("DRAW!");
            }
            if (computerChoice === "rock") {
                console.log("WIN!");
                humanScore++;
            }
            if (computerChoice === "scissors") {
                console.log("LOSE!");
                computerScore++;
            }
        } else if (humanChoice === "rock") {

            if (computerChoice === "paper") {
                console.log("LOSE!");
                computerScore++;
            }
            if (computerChoice === "rock") {
                console.log("DRAW!");
            }
            if (computerChoice === "scissors") {
                console.log("WIN!");
                humanScore++;
            }
        } else if (humanChoice === "scissors") {

            if (computerChoice === "paper") {
                console.log("WIN!");
                humanScore++;
            }
            if (computerChoice === "rock") {
                console.log("LOSE!");
                computerScore++;
            }
            if (computerChoice === "scissors") {
                console.log("DRAW!");
            }
        } else {};
        console.log("Your Score Is " + humanScore);
        console.log("Your Opponent's Score Is " + computerScore);
    } 

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    

    // for (let i = 0; i < 99; i++) {
    //     if (i == 0) {
    //         playRound(humanSelection, computerSelection);
    //     } else {
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    //     }
    // }

    
   



    // if (humanScore > computerScore) {
    //         alert("You Win The Game!");
    //     } else if (computerScore > humanScore) {
    //         alert("You Lose The Game!");
    //     } else {
    //         alert("It's a Draw!");
    // };

};

playGame();


// Create a new function named getComputerChoice
function getComputerChoice() {
    compchoice = Math.random();
    compchoice = Math.round(compchoice * 10) / 10
    if (compchoice >= 0.1 && compchoice <= 0.3) {
        console.log("-- Computer chooses: rock --");
        return "rock";
    } else if (compchoice >= 0.4 && compchoice <= 0.6) {
        console.log("-- Computer chooses: paper --");
        return "paper";
    } else {
        console.log("-- Computer chooses: scissors --");
        return "scissors";
    }
};
// Function returns a random Rock, Paper or Scissors

// Create a new function named getHumanChoice
function getHumanChoice() {
    humchoice = prompt("Choose Your Weapon: Rock, Paper or Scissors?");
    console.log("-- Human chooses: " + humchoice + " --");
    return humchoice;
};
// Prompt method that loads on page load
// Take whatever score is entered
// Run computer choice
