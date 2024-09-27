//console.log("Hello World");
function getComputerChoice() {
    num = Math.floor(Math.random() * 60) + 1;
    console.log(num);
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