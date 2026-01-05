const rockbutton = document.getElementById('rockButton');
const paperbutton = document.getElementById('paperButton');
const scissorsbutton = document.getElementById('scissorsButton');



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

    // Button Event Listeners
    
    rockbutton.addEventListener("click", (e) => {
        console.log("-- Human chooses: rock");
        playRound("rock", getComputerChoice());
        
    });

    paperbutton.addEventListener("click", (e) => {
        console.log("-- Human chooses: paper")
        playRound("paper", getComputerChoice());
    });

    scissorsbutton.addEventListener("click", (e) => {
        console.log("-- Human chooses: scissors")
        playRound("scissors", getComputerChoice());
    });
    

    

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

