function getComputerChoice() {
    num = Math.floor(Math.random() * 60) + 1;
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
            return choice;
        }
    else {
        return "Sorry, I don't know this move!";
    }
}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

const score_text = document.createElement("div");
score_text.classList.add("score_text");
container.appendChild(score_text);


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
                content.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
            }
        else if (humanChoice === computerChoice) {
            content.textContent = `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}`;
        }
        else {
            content.textContent = `You lose! ${humanChoice} loses to ${computerChoice}`;
            computerScore++;
        }

    }


    let humanSelction = "";

    let options = document.querySelector("#options");
    options.addEventListener("click", (event) => {
        let target = event.target;
        let computerSelection = getComputerChoice();
        switch(target.id) {
            case "rck":
                console.log("Rock button was clicked");
                humanSelection = "rock";
                playRound(humanSelection, computerSelection);
                break;
            case "per":
                console.log("Paper button was clicked");
                humanSelection = "paper";
                playRound(humanSelection, computerSelection);
                break;
            case "sci":
                console.log("Scissors button was clicked");
                humanSelction = "scissors";
                playRound(humanSelction, computerSelection);
                break;
        }

        if (humanScore > computerScore) {
            if (humanScore == 5) {
                content.textContent = "You won! You reached 5 points!";
                humanScore = 0;
                computerScore = 0;
            }
            score_text.textContent = `The score is ${humanScore} to ${computerScore}`;
            console.log(`The score is ${humanScore} to ${computerScore}`); 
        }
        else if (computerScore > humanScore) {
            if (computerScore == 5) {
                content.textContent = "You Lost! The computer reached 5 points!";
                humanScore = 0;
                computerScore = 0;
            }
            score_text.textContent = `The score is ${humanScore} to ${computerScore}`;
            console.log(`The score is ${computerScore} to ${humanScore}`); 
        }
        else {
            score_text.textContent = `The score is ${humanScore} to ${computerScore}`;
            console.log(`The score is ${humanScore} to ${computerScore}`);
        }
    });
    



    

