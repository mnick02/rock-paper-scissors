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
        choice.toLowerCase() === "scissors"){
            return "valid choice!";
        }
    else {
        return "Sorry, I don't know this move!";
    }
}