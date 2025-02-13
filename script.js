// returns rock, paper, or scissors randomly
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

// hook up buttons
document.querySelector("#rock").addEventListener("click", function() {playRound("rock")});
document.querySelector("#paper").addEventListener("click", function() {playRound("paper")});
document.querySelector("#scissors").addEventListener("click", function() {playRound("scissors")});

// initializes score counters at 0
let humanScore = 0;
let computerScore = 0;

// capitalize displayed choices
function caps(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// compares choice variables and increments score counters
function playRound(humanChoice) {

    // displays choices
    let computerChoice = getComputerChoice();
    document.querySelector("#humanChoice").textContent = caps(humanChoice);
    document.querySelector("#computerChoice").textContent = caps(computerChoice);

    // evaluates choices vs win conditions
    if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")
    ) {++computerScore} 
    else {++humanScore}

    document.querySelector("#humanScore").textContent = humanScore;
    document.querySelector("#computerScore").textContent = computerScore;

    //after 5 points, runs checkScore()
    if (humanScore === 5 || computerScore === 5) {
        checkScore(humanScore, computerScore);
    }
}

const gameResult = document.querySelector("#gameResult");

// compares scores and displays win/loss message
function checkScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        let winText = document.createElement("p");
        winText.textContent = "You win!";
        gameResult.appendChild(winText);
    } else if (humanScore < computerScore) {
        let loseText = document.createElement("p");
        loseText.textContent = "You have lost!";
        gameResult.appendChild(loseText);
    } else {
        let drawText = document.createElement("p");
        drawText.textContent = "It's a draw!";
        gameResult.appendChild(drawText);
    }
}