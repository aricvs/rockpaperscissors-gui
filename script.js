// global score keeping variables
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// generate random number for computer play and assigns string to it
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

// get player choice and plays a round once a button is clicked
function getPlayerChoice() {
  let playerChoice;
  const choiceButton = document.querySelectorAll(".choice-button");
  for (const button of choiceButton) {
    button.addEventListener("click", (e) => {
      playerChoice = e.target.textContent.toLowerCase();
      addScore(playRound(playerChoice, getComputerChoice()));
    });
  }
}

// plays a round, prints the play and returns the results
function playRound(playerSelection, computerSelection) {
  const drawResult = `Draw!`;
  const lossResult = `You lose, ${computerSelection} beats ${playerSelection}!`;
  const winResult = `You win, ${playerSelection} beats ${computerSelection}!`;
  const roundBreakdown = document.querySelector(".round-breakdown");
  const resultOutput = document.querySelector(".result");

  roundBreakdown.textContent = `You play ${playerSelection} and the computer plays ${computerSelection}`;
  roundBreakdown.style.visibility = "visible";

  if (playerSelection === computerSelection) {
    resultOutput.textContent = drawResult;
    resultOutput.style.visibility = "visible";
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultOutput.textContent = lossResult;
    resultOutput.style.visibility = "visible";
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    resultOutput.textContent = winResult;
    resultOutput.style.visibility = "visible";
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultOutput.textContent = lossResult;
    resultOutput.style.visibility = "visible";
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultOutput.textContent = winResult;
    resultOutput.style.visibility = "visible";
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultOutput.textContent = lossResult;
    resultOutput.style.visibility = "visible";
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultOutput.textContent = winResult;
    resultOutput.style.visibility = "visible";
    return 2;
  }
}

// compare the round results and add score
function addScore(result) {
  switch (result) {
    case 0:
      break;
    case 1:
      computerScore++;
      break;
    case 2:
      playerScore++;
      break;
  }

  const scoreCounter = document.querySelector(".score-counter");
  scoreCounter.textContent = `Player ${playerScore} | Computer ${computerScore}`;
  roundsPlayed++;
  const roundCounter = document.querySelector(".round-counter");
  roundCounter.textContent = `Rounds played ${roundsPlayed}/5`;

  if (roundsPlayed === 5) {
    gameOver();
  }
}

function gameOver() {
  document.querySelector(".choice-buttons").style.display = "none";
  document.querySelector(".call-to-action").style.display = "none";
  const finalResult = document.querySelector(".final-result");
  if (playerScore > computerScore) {
    finalResult.textContent = "Game Over! Winner: Player!";
  } else if (playerScore < computerScore) {
    finalResult.textContent = "Game Over! Winner: Computer!";
  } else {
    finalResult.textContent = "Game Over! No one wins! It's a draw!";
  }
  finalResult.style.visibility = "visible";
}

getPlayerChoice();
