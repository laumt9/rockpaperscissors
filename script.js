console.log("How about a game of Rock, Paper, Scissors? First to 5, wins!");
console.log("-----------------------------------------------------------");

const choices = ["rock", "paper", "scissors"];
const playerWin = "You win this round!";
const computerWin = "You lost this round.";
const draw = "It's a tie this round.";
let playerScore = 0;
let computerScore = 0;

//Gets computer choice
function getComputerChoice() { 
    const computerRandom = Math.floor((Math.random() * choices.length));
    const computerSelection = choices[computerRandom];
    return(computerSelection);    
} 

//Prompts & gets player choice
function getPlayerSelection() { 
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (choices.includes(playerSelection)) {
        return(playerSelection);
    } else {
        playerSelection = prompt("That's not a valid selection. Check your spelling!")
        .toLowerCase();
        return(playerSelection);
    }
}
                                                                                                                                                                                
//Plays 1 round of RPS & alerts outcome
function playRound() { 
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerSelection();
    console.log("I picked " + computerSelection + " and you picked " + playerSelection + ".");
    if (playerSelection === computerSelection) {
        roundResult = draw;
    } else if 
    ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        roundResult = playerWin;
    } else {
        computerScore += 1;
        roundResult = computerWin;
    }   
    return(roundResult);
}
//Plays 5 rounds of RPS
function game() {
    for (let i = 0; i < 999; i++) {
        playRound();
        console.log(roundResult);
        console.log("The current score is: ");
        console.log("Your score: " + playerScore);
        console.log("My score: " + computerScore);
        console.log("-----------------------------------------------------------");
        if (playerScore === 5 || computerScore === 5) {
            break;
        }     
    }
}
function winGame() {
    if (playerScore === 5) {
        console.log("You won this game! Congratulations!");
    } else { (computerScore === 5)
        console.log("I won this game. Better luck next time.");
    }
}
game();
winGame();


