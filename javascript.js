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