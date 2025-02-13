// returns rock, paper, or scissors randomly
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

// prompts the user to type in rock, paper, or scissors; not case-sensitive
function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?")
    return input.toLowerCase();
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const humanChoice = document.querySelector("#humanChoice");
const computerChoice = document.querySelector("#computerChoice");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const result = document.querySelector("#result");

btnRock.addEventListener("click", function() {playRound("rock")});
btnPaper.addEventListener("click", function() {playRound("paper")});
btnScissors.addEventListener("click", function() {playRound("scissors")});

// initializes score counters at 0
let humanScore = 0;
let computerScore = 0;

// compares choice variables and increments score counters
function playRound(humanChoice) {

    // converts both choice function outputs to selection variables, aka args
    // let humanChoice = getHumanChoice();
    console.log("You have chosen " +humanChoice+ "!");
    let computerChoice = getComputerChoice();
    console.log("The computer has chosen " +computerChoice+ "!");

    // evaluates choices vs win conditions
    if (humanChoice === computerChoice) {
        console.log("It's a draw! The score has not changed.")
    }
    // all computer win conditions
    if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        ++computerScore
        console.log("The score is currently You: " +humanScore+ ", Computer: " +computerScore+ ".")
    }
    // all human win conditions
    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        ++humanScore
        console.log("The score is currently You: " +humanScore+ ", Computer: " +computerScore+ ".")
    }

    //after 5 points, runs checkScore()
    if (humanScore === 5 || computerScore === 5) {
        checkScore(humanScore, computerScore);
    }
}

// compares scores and displays win/loss message
function checkScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won! Refresh to play again.");
        let winText = document.createElement("p");
        winText.textContent = "You win! Refresh to play again.";
        result.appendChild(winText);
    } if (humanScore < computerScore) {
        console.log("You have lost! Refresh to play again.");
        let loseText = document.createElement("p");
        loseText.textContent = "You have lost! Refresh to play again.";
        result.appendChild(loseText);
    } if (humanScore === computerScore) {
        console.log("It's a draw! Refresh to play again.");
        let drawText = document.createElement("p");
        drawText.textContent = "It's a draw! Refresh to play again.";
        result.appendChild(drawText);
    }
}