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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();

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

    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        //console.log("looped");
        //console.log(humanSelection);
        //console.log(computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You are the winner! The score was ${humanScore} to ${computerScore}`); 
    }
    else if (computerScore > humanScore) {
        console.log(`You lost! The score was ${computerScore} to ${humanScore}`); 
    }
    else {
        console.log(`It's a tie! The score was ${humanScore} to ${computerScore}`);
    }

    

}