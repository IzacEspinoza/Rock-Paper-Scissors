//Array of possible answers
const choices = ["rock", "paper", "scissors"];

//Scores, updates on each round
let playerScore = 0;
let computerScore = 0;

//Player choice, blank until user clicks a button
let playerChoice;

//Computers choice, random between rock, paper, scissors
const computerChoice = () => {
  let randomNumber = Math.floor(Math.random() * (0 + 3));
  return choices[randomNumber];
};

//Display div
const display = document.querySelector('#display');
//Display div, made on a window load
window.onload = (e) => {
  console.log('page is loaded');
  // display.innerHTML = playerChoice;
}



// Game buttons, user clicks these to choose what to draw for round
const buttons = document.querySelectorAll("button");
//check if buttons work
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.id;
    console.log(playerChoice);
    playRound(playerChoice, computerChoice());
    display.innerHTML = playerChoice;
  })
);

//Round of play, compares users and computers answers, give point to who won round
const playRound = (playerChoice, computerChoice) => {
  //Player picked Rock?
  if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "rock" && computerChoice == "rock") {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
  //Player picked Scissors?
  else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
  //Player picked Paper
  else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log(
      `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    console.log(
      `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`
    );
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    console.log(`Player and Computer picked ${playerChoice}`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  } else {
    console.log(`Come again?`);
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
};

//5 Round game, winner decided at end
// const game = () => {
//   for (let i = 0; i <= 5; i++) {
//     playRound(playerChoice(), computerChoice());
//   }
//   if (playerScore > computerScore) {
//     console.log(
//       `Player has won! Player score: ${playerScore}, Computer score: ${computerScore}`
//     );
//   } else if (computerScore > playerScore) {
//     console.log(
//       `Computer has won!  Player score: ${playerScore}, Computer score: ${computerScore}`
//     );
//   } else {
//     console.log(`Probably a tie?`);
//   }
//   //play again?
//   rematch();
// };
//rematch
const rematch = () => {
  //Play again?
  const replay = prompt("Would you like to play again? Y / N");
  if (replay.toUpperCase() == "y".toUpperCase()) {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log(
      `Final scores: Player: ${playerScore} - Computer: ${computerScore}`
    );
    playerScore = 0;
    computerScore = 0;
  }
};
