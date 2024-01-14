function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const Choice = ["Rock", "Paper", "Scissors"];
const computerSelection = getComputerChoice(Choice);

console.log(computerSelection);

let playerSelection = prompt("What is your choice?");
console.log(playerSelection);

function playRound (playerSelection, computerSelection) {
    let MatchResult="You Win";
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) 
        {MatchResult="Tie"}
        else if (playerSelection.toLowerCase() === "rock" & computerSelection.toLowerCase() === "paper") 
        {MatchResult="You Lose! Paper beats Rock."}
        else if (playerSelection.toLowerCase() === "paper" & computerSelection.toLowerCase() === "scissors") 
        {MatchResult="You Lose! Scissors beats Paper."}
        else if (playerSelection.toLowerCase() === "scissors" & computerSelection.toLowerCase() === "rock") 
        {MatchResult="You Lose! Rock beats Scissors."};
            
    return MatchResult;   
}
console.log(playRound(playerSelection, computerSelection));



