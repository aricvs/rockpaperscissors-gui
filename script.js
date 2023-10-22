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

function getPlayerChoice() {
  let playerChoice;

  while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    playerChoice = prompt("Make your play: rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();
    console.clear();
  }

  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  const drawResult = `Draw!`;
  const lossResult = `You lose, ${computerSelection} beats ${playerSelection}!`;
  const winResult = `You win, ${playerSelection} beats ${computerSelection}!`;

  console.log(
    `You play ${playerSelection} and the computer plays ${computerSelection}`
  );

  if (playerSelection === computerSelection) {
    console.log(drawResult);
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(lossResult);
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(winResult);
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(lossResult);
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(winResult);
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(lossResult);
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(winResult);
    return 2;
  }
}

function game() {
  let roundsPlayed = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (roundsPlayed < 5) {
    switch (playRound(getPlayerChoice(), getComputerChoice())) {
      case 0:
        break;
      case 1:
        computerScore++;
        break;
      case 2:
        playerScore++;
        break;
    }

    console.log(`Score: Player ${playerScore} x Computer ${computerScore}`);
    console.log(`Round ${roundsPlayed + 1}/5`);
    roundsPlayed++;
  }

  if (playerScore > computerScore) {
    console.log("Winner: Player!");
  } else if (playerScore < computerScore) {
    console.log("Winner: Computer!");
  } else {
    console.log("Winner: No one! It's a draw!");
  }
}

game();
