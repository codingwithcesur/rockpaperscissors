function startGame() {
  startBtn.classList.remove("btn");
  startBtn.setAttribute("id", "start-btn-inv");
  btnContainer.style.display = "flex";
  toggleBtnInv();
}
let currentScore = document.querySelector(".current-score");
let roundWinner = document.querySelector(".round-winner");
let finalResult = document.querySelector(".final-result");
const startBtn = document.querySelector("#start-btn");
const btn = document.querySelectorAll("button");
const btnContainer = document.querySelector(".btn-container");
const btn1 = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
btnContainer.style.display = "block";
function toggleBtnInv() {
  for (const button of btn1) {
    button.classList.toggle("btnInvisible");
  }
}
toggleBtnInv();
startBtn.addEventListener("click", startGame);
const choices = ["rock", "paper", "scissors"];
function addResetBtn() {
  function resetBtnOpt() {
    playerScore = 0;
    computerScore = 0;
    finalResult.textContent = "";
    currentScore.textContent = "Player 0 Computer 0";
    roundWinner.textContent = "";
    resetBtn.classList.toggle("btn");
    startBtn.classList.add("btn");
    startBtn.setAttribute("id", "start-btn");
    btnContainer.removeChild(resetBtn);
  }
  currentScore.textContent = "";
  roundWinner.textContent = "";
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("id", "reset-btn");
  resetBtn.classList.toggle("btn");
  resetBtn.textContent = "Reset";
  btnContainer.appendChild(resetBtn);
  resetBtn.addEventListener("click", resetBtnOpt);
}

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
      playRound(btn.id, computerPlay());
      currentScore.textContent = `Player ${playerScore} Computer ${computerScore}`;
    }
    if (playerScore === 5) {
      finalResult.textContent = `You've won the game by ${playerScore} to ${computerScore}`;
      btnContainer.style.display = "block";
      toggleBtnInv();
      addResetBtn();
    } else if (computerScore === 5) {
      finalResult.textContent = `Computer won the game by ${computerScore} to ${playerScore}`;
      btnContainer.style.display = "block";
      toggleBtnInv();
      addResetBtn();
    }
  });
});

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return (roundWinner.textContent = `You've won ${playerSelection} beats ${computerSelection}.`);
  } else if (playerSelection === computerSelection) {
    return (roundWinner.textContent = `It's a tie, you've both choose ${playerSelection}.`);
  } else if (playerSelection === "start-btn-inv") {
    return;
  } else {
    computerScore++;
    return (roundWinner.textContent = `You've lost ${playerSelection} lose against ${computerSelection}.`);
  }
}
