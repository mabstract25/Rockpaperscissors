const rockbutton = document.getElementById('rockButton');
const paperbutton = document.getElementById('paperButton');
const scissorsbutton = document.getElementById('scissorsButton');
const humanMessage = document.getElementById('human');
const computerMessage = document.getElementById('computer');
const resultMessage = document.getElementById('result');
const humanScoreTotal = document.getElementById('humanScoreTotal');
const computerScoreTotal = document.getElementById('computerScoreTotal');

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                resultMessage.textContent = "DRAW!";
            }
            if (computerChoice === "rock") {
                resultMessage.textContent = "WIN!";
                humanScore++;
            }
            if (computerChoice === "scissors") {
                resultMessage.textContent = "LOSE!";
                computerScore++;
            }
        } else if (humanChoice === "rock") {

            if (computerChoice === "paper") {
                resultMessage.textContent = "LOSE!";
                computerScore++;
            }
            if (computerChoice === "rock") {
                resultMessage.textContent = "DRAW!";
            }
            if (computerChoice === "scissors") {
                resultMessage.textContent = "WIN!";
                humanScore++;
            }
        } else if (humanChoice === "scissors") {

            if (computerChoice === "paper") {
                resultMessage.textContent = "WIN!";
                humanScore++;
            }
            if (computerChoice === "rock") {
                resultMessage.textContent = "LOSE!";
                computerScore++;
            }
            if (computerChoice === "scissors") {
                resultMessage.textContent = "DRAW!";
            }
        } else {};
        humanScoreTotal.textContent = humanScore;
        computerScoreTotal.textContent = computerScore;
        if (humanScore === 5) {
            alert("Congratulations, You Win!!");
            location.reload();
        } else if (computerScore === 5) {
            alert("Bad Luck, You Lose.");
            location.reload();
        };
        
    } 

    // Button Event Listeners
    
    rockbutton.addEventListener("click", (e) => {
        humanMessage.textContent = "-- Human chooses: rock"
        playRound("rock", getComputerChoice());
        
    });

    paperbutton.addEventListener("click", (e) => {
        humanMessage.textContent = "-- Human chooses: paper"
        playRound("paper", getComputerChoice());
    });

    scissorsbutton.addEventListener("click", (e) => {
        humanMessage.textContent = "-- Human chooses: scissors"
        playRound("scissors", getComputerChoice());
    });
    
    
        
   
    

};

playGame();


// Create a new function named getComputerChoice
function getComputerChoice() {
    compchoice = Math.random();
    compchoice = Math.round(compchoice * 10) / 10
    if (compchoice >= 0.1 && compchoice <= 0.3) {
        computerMessage.textContent = "-- Computer chooses: rock --";
        return "rock";
    } else if (compchoice >= 0.4 && compchoice <= 0.6) {
        computerMessage.textContent = "-- Computer chooses: paper --";
        return "paper";
    } else {
        computerMessage.textContent = "-- Computer chooses: scissors --";
        return "scissors";
    }
};
// Function returns a random Rock, Paper or Scissors

