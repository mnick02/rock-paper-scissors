//console.log("Hello World");
function getComputerChoice() {
    num = Math.floor(Math.random() * 60) + 1;
    //console.log(num);
    if (num >= 0 && num < 20) {
        return "rock";
    }
    else if (num >= 20 && num < 40) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose a move:");
    if (choice.toLowerCase() === "rock" ||
        choice.toLowerCase() === "paper" ||
        choice.toLowerCase() === "scissors") {
            //console.log(typeof(choice));
            return choice;
        }
    else {
        return "Sorry, I don't know this move!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        else if (humanChoice === computerChoice) {
            console.log(`It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}`);
        }
        else {
            console.log(`You lose! ${humanChoice} loses to ${computerChoice}`);
            computerScore++;
        }
    }
}