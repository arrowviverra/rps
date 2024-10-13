// returns rock, paper, or scissors randomly
function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

// prompts the user to type in rock, paper, or scissors; not case-sensitive
function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?")
    return input.toLowerCase();
}

// initializes score counters at 0
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// compares choice variables and increments score counters
function playRound() {

    // converts both choice function outputs to selection variables, aka args
    let humanChoice = getHumanChoice();
    console.log("You have chosen " +humanChoice+ "!");
    let computerChoice = getComputerChoice();
    console.log("The computer has chosen " +computerChoice+ "!");

    // evaluates choices vs win conditions
    if (humanChoice === computerChoice) {
        ++roundCount
        console.log("It's a draw! The score has not changed.")
    }
    // all computer win conditions
    if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        ++roundCount
        ++computerScore
        console.log("The score is currently You: " +humanScore+ ", Computer: " +computerScore+ ".")
    }
    // all human win conditions
    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        ++roundCount
        ++humanScore
        console.log("The score is currently You: " +humanScore+ ", Computer: " +computerScore+ ".")
    }

    //after 5 rounds, runs checkScore()
    if (roundCount === 5) {
        checkScore(humanScore, computerScore);
    }
}

//runs playRound() x number of times
function playGame(x) {
    for (let round = 1; round <= x; round++) {
        playRound();
    }
}

// compares scores and displays win/loss message
function checkScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win! Refresh to play again.");
    } if (humanScore < computerScore) {
        console.log("You have lost! Refresh to play again.")
    } if (humanScore === computerScore) {
        console.log("It's a draw! Refresh to play again.");
    }
}

playGame(5);