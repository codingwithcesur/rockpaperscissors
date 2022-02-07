const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}
function playerPlay() {
  let playerPick = prompt(
    "Pick a piece from rock paper or scissors"
  ).toLowerCase();
  function playerCheck() {
    if (choices.includes(playerPick)) {
      return choices.includes(playerPick);
    } else {
      return false;
    }
  }
  while (playerCheck() === false) {
    playerPick = prompt("Pick a piece from rock , paper or scissors only!");
  }
  return playerPick;
}
let computerSelection;
let playerSelection;
function playRound() {
  computerSelection = computerPlay();
  playerSelection = playerPlay();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You've won the round");
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else {
    console.log("You've lost the round");
  }
}

for (let i = 0; i < 5; i++) {
  playRound();
  console.log(`You: ${playerSelection} , computer: ${computerSelection}`);
}
