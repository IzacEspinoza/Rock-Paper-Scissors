//Array of possible answers
const choices = ["rock", "paper", "scissors"];

//Scores, updates on each round
let playerScore = 0;
let computerScore = 0;

//Player choice, blank until user clicks a button
let playerChoice;

//Round result div
const display = document.querySelector("#display");
//Scoreline div
const scoreline = document.querySelector("#scoreline");

// Game buttons, user clicks these to choose what to draw for round
const buttons = document.querySelectorAll("button");

//Once page is loaded, call game() to start the game
window.onload = (e) => {
  console.log("page loaded");
  //buttons.disabled = false;
  game();
};

//Computers choice, random between rock, paper, scissors
const computerChoice = () => {
  let randomNumber = Math.floor(Math.random() * (0 + 3));
  return choices[randomNumber];
};

//Round of play, compares users and computers answers, give point to who won round
const playRound = (playerChoice, computerChoice) => {
  //Player picked Rock?
  if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    //Display round results and current scoreline
    display.textContent = `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
    }
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
    //Display round results and current scoreline
    display.textContent = `Player's ${playerChoice} beats computer's ${computerChoice}, +1 point to Player`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
      //announce winner
      //display.textContent = `There has been a winner or some shit!!`;
    }
  } else if (playerChoice == "rock" && computerChoice == "rock") {
    //Display round results and current scoreline
    display.textContent = `Player and Computer picked ${playerChoice}`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
  //Player picked Scissors?
  else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    //Display round results and current scoreline
    display.textContent = `Computers ${computerChoice} beats players ${playerChoice}, +1 point to Computer`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
      //announce winner
      //display.textContent = `There has been a winner or some shit!!`;
    }
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
    //Display round results and current scoreline
    display.textContent = `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
      //announce winner
      //display.textContent = `There has been a winner or some shit!!`;
    }
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    //Display round results and current scoreline
    display.textContent = `Player and Computer picked ${playerChoice}`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
  //Player picked Paper
  else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    //Display round results and current scoreline
    display.textContent = `Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
      //announce winner
      //display.textContent = `There has been a winner or some shit!!`;
    }
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    //Display round results and current scoreline
    display.textContent = `Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    //Test of #2
    if (playerScore == 5 || computerScore == 5) {
      //announce winner
      display.textContent = `There has been a winner or some shit!!`;
      //disable buttons,
      buttons.disabled = true;
      //announce winner
      //display.textContent = `There has been a winner or some shit!!`;
    }
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    //Display round results and current scoreline
    display.textContent = `Player and Computer picked ${playerChoice}`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  } else if (playerChoice == "paper" && computerChoice == "paper") {
    //Display round results and current scoreline
    display.textContent = `Player and Computer picked ${playerChoice}`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  } else {
    //Display round results and current scoreline
    display.textContent = `Come again mofo?`;
    scoreline.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
};

//5 Round game, winner decided at end
const game = () => {
  //check if buttons work
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      playerChoice = button.id;
      console.log(playerChoice);
      //playRound(playerChoice, computerChoice());
      //  //Test of #2
      //  if(playerScore == 5 || computerScore == 5){
      //   //announce winner
      //   display.textContent = `There has been a winner or some shit!!`;
      //   //disable buttons,
      //   buttons.disabled = true;
      //   //announce winner
      //   //display.textContent = `There has been a winner or some shit!!`;
      
      playRound(playerChoice, computerChoice());
    })
  );

  // //Test of #2
  // if(playerScore == 5 || computerScore == 5){
  //   //disable buttons,
  //   buttons.disabled = true;
  //   //announce winner
  //   display.textContent = `There has been a winner or some shit!!`;

  // }
};

/*
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
*/
