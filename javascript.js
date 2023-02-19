// A function gets a random interger between 0 and 2 and assigns a choice to each one
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    }
    else if (randomNumber === 1) {
        return "paper"
    }
    else {return "scissors"}}

// A function asks the user for the input, and makes it case-insensitive. If input is not one of the options print a message and repeat the prompt.
function getPlayerChoice() {
    let text = prompt("What is your choice: rock, paper or scissors?")
    if (text.toLowerCase() === "rock" || text.toLowerCase() === "paper" || text.toLowerCase() === "scissors"){
        return text.toLowerCase()
    }
    else {
        alert("Oopsie, that's not right in this game, wanna try again?");
        getPlayerChoice();
 }}

// A function takes the computer choice and player choice, determines the winner and returns a string with explanation eg. ""You Lose! Paper beats Rock""
function playRound(playerSelection, computerSelection){
    switch(true){
    // there's a tie
        case playerSelection === computerSelection:
            return "It's a tie!";
            break;
    
    // player wins here
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
        case playerSelection === "rock" && computerSelection === "scissors":
            return "You've won!";
            break;
    // player loses here
        default:
            return "You've lost!";
            break;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("Human choice: " + playerSelection);
console.log("Computer choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

// A function that calls the previous function(s) to start a new round and keep the score of the entire game