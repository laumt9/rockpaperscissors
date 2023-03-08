const choices = ["rock", "paper", "scissors"];
const imgs = document.querySelectorAll('img');

let playerScore = 0;
let computerScore = 0;

imgs.forEach ((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        playRound(image.dataset.img);
    })
);

function getComputerChoice() { 
    const computerRandom = Math.floor((Math.random() * choices.length));
    const computerSelection = choices[computerRandom];
    return(computerSelection);    
} 

function scoreKeep() {
    const playerScore_div = document.getElementById('playerScore');
    const computerScore_div = document.getElementById('computerScore');
    playerScore_div.textContent = `${playerScore}`;
    computerScore_div.textContent = `${computerScore}`; 
} 

function playRound(playerSelection) {
    const roundResult_div = document.getElementById('roundResult');
    const gameResult_div = document.getElementById('gameResult');
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult_div.textContent = ("It's a draw! We both chose " + playerSelection + "!");
    } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        roundResult_div.textContent = ("You won! You chose " + playerSelection 
        + " and I chose " + computerSelection + ".");
        if (playerScore >= 5) {
            gameResult_div.textContent = ("You got lucky and won the game this time. I demand a rematch!");
        }
    } else {
        computerScore += 1;
        roundResult_div.textContent = ("You lost! You chose " + playerSelection 
        + " and I chose " + computerSelection + ".");
        if (computerScore >= 5) {
            gameResult_div.textContent = ("Game over! Better luck next time. Reload the page for a rematch.");
        }
    } 
    scoreKeep();
}