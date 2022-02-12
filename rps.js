let playerVictories = 0;
let computerVictories = 0;

game();

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (playerVictories == computerVictories) {
    alert(`Final score: You tied ${playerVictories} - ${computerVictories}.`)
  } else if (playerVictories > computerVictories) {
    alert(`Final score: You won ${playerVictories} - ${computerVictories}!`)
  } else {
    alert(`Final score: You lost ${computerVictories} - ${playerVictories}.`)  
  }
}

function playRound(playerSelection, computerSelection) {

  let computerChoices = ["rock", "paper", "scissors"];
  computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerSelection);
  playerSelection = prompt("Type rock, paper, or scissors:", '');
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    alert(`You entered "${playerSelection}". You must type \"rock\", \"paper\", or \"scissors\".`);
    playRound();
  } else if
    (playerSelection == computerSelection) {
    alert("It's a tie. Boring.");
  } else if
    (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" &&
        computerSelection == "rock" ||playerSelection == "scissors" && computerSelection == "paper") {
    alert(`The computer chose ${computerSelection}. Hot damn, you win!`);
    playerVictories = (playerVictories + 1);
  } else {
    alert(`The computer chose ${computerSelection}. You lose. I'm so very, very sorry.`);
    computerVictories = (computerVictories + 1);
  }
}

