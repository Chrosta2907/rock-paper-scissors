// A function gets a random interger between 0 and 2 and assigns a choice to each one
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    if (randomNumber === 0) {
        return "Rock"
    }
    else if (randomNumber === 1) {
        return "Paper"
    }
    else {return "Scissors"}}
console.log(getComputerChoice())

// A function asks the user for the input, and makes it case-insensitive. If input is not one of the options print a message and repeat the prompt.
function getPlayerChoice() {
    let text = prompt("What is your choice: rock, paper or scissor?")
    if (text.toLowerCase === "rock" || text.toLowerCase === "paper" || text.toLowerCase === "scissors"){
        return text.toLowerCase()
    }
    else {
    alert("Oopsie, that's not right in this game, wanna try again?");
    getPlayerChoice(); }}
console.log(getPlayerChoice())

// A function takes the computer choice and player choice, determines the winner and returns a string with explanation eg. ""You Lose! Paper beats Rock""

// A function that calls the previous function(s) to start a new round and keep the score of the entire game