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
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    switch(true){
    // there's a tie
        case playerSelection === computerSelection:
            console.log("It's a draw, " + playerSelection + " versus " + computerSelection)
            return "It's a tie!";
            break;
    
    // player wins here
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
        case playerSelection === "rock" && computerSelection === "scissors":
            console.log("You've won, " + playerSelection + " beats " + computerSelection)
            return "You've won!";
            break;
    // player loses here
        default:
            console.log("You've lost, " + computerSelection + " beats " + playerSelection)
            return "You've lost!";
            break;}
}
// A function that calls the previous function(s) to start a new round and keep the score of the entire game up to five rounds
// Record number of wins for each side in two variables,
    function game() {
        let playerWins = 0
        let computerWins = 0
        let result
// increment them for each win  
for (let i = 0; i < 5; i++){ 
    result = playRound()    
        if (result === "You've won!") {
            playerWins++;
        }
        else if (result === "You've lost!") {
            computerWins++;
        }
        else {
            playerWins++;
            computerWins++;
        }
    }
// at the end of the game compare the two and announce who the winner is       
        if (playerWins > computerWins){
            return "Player has won " + playerWins + ":" + computerWins
        }
        else if (computerWins > playerWins){
            return "Computer has won " + computerWins + ":" + playerWins
        }
        else {
            return "A draw!" + playerWins + ":" + computerWins + " for the player"
        }
    }
    console.log(game())