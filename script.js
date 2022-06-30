let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}
console.log("Game results:");
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(
    "Choose between rock, paper or scissors"
  ).toLowerCase();
  computerSelection = computerPlay();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return console.log(
      `You've won ${playerSelection} beats ${computerSelection}.`
    );
  } else if (playerSelection === computerSelection) {
    return console.log(`It's a tie, you've both choose ${playerSelection}.`);
  } else {
    computerScore++;
    return console.log(
      `You've lost ${playerSelection} lose against ${computerSelection}.`
    );
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log("Final result:");
  if (playerScore > computerScore) {
    return console.log(`You've won by ${playerScore} to ${computerScore}.`);
  } else if (playerScore === computerScore) {
    return console.log(`It's a tie! You've both won ${playerScore} times.`);
  } else {
    return console.log(
      `Computer has won by ${computerScore} to ${playerScore}`
    );
  }
}
game();
