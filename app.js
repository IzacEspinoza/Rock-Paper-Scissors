console.log("Hello"); //Saying hello

//Array of possible answers
const choices = ["Rock", "Paper", "Scissors"];
//Scores
let playerScore = 0;
let computerScore = 0;

//Players(users)choice
const playerChoice = () => {
  let answer = prompt("Pick Rock, paper, or scissors:");
  return answer;
};
//Computers choice
const computerChoice = () => {
  let randomNumber = Math.floor(Math.random() * (0 + 3));
  return choices[randomNumber];
};
//Round of play
const playRound = (playerChoice, computerChoice) => {
  //Player picked Rock?
  if (
    playerChoice.toUpperCase() === "rock".toUpperCase() &&
    computerChoice.toUpperCase() === "paper".toUpperCase()
  ) {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "rock".toUpperCase() &&
    computerChoice.toUpperCase() === "scissors".toUpperCase()
  ) {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "rock".toUpperCase() &&
    computerChoice.toUpperCase() === "rock".toUpperCase()
  ) {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
  //Player picked Scissors?
  else if (
    playerChoice.toUpperCase() == "scissors".toUpperCase() &&
    computerChoice.toUpperCase() === "rock".toUpperCase()
  ) {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "scissors".toUpperCase() &&
    computerChoice.toUpperCase() === "paper".toUpperCase()
  ) {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "scissors".toUpperCase() &&
    computerChoice.toUpperCase() === "scissors".toUpperCase()
  ) {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
  //Player picked Paper
  else if (
    playerChoice.toUpperCase() == "paper".toUpperCase() &&
    computerChoice.toUpperCase() === "scissors".toUpperCase()
  ) {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "paper".toUpperCase() &&
    computerChoice.toUpperCase() === "rock".toUpperCase()
  ) {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (
    playerChoice.toUpperCase() == "scissors".toUpperCase() &&
    computerChoice.toUpperCase() === "scissors".toUpperCase()
  ) {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else {
    console.log(`Come again?`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
};
//5 Round game, winner decided at end
const game = () => {
  for (let i = 0; i <= 5; i++) {
    playRound(playerChoice(), computerChoice());
  }
  if (playerScore > computerScore) {
    return `Player has won! Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else if (computerScore > playerScore) {
    return `Computer has won!  Player score: ${playerScore}, Computer score: ${computerScore}`;
  } else {
    return `Probably a tie?`;
  }
};
