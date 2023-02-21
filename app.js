console.log("Hello");//Saying hello

//Array of possible answers
const choices = ['Rock', 'Paper', 'Scissors'];

//Players(users)choice
const playerChoice = () => {
    let answer = prompt("Pick Rock, paper, or scissors:");
    return answer;
}
//Computers choice
const computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * (0 + 3));
    return choices[randomNumber];
}
//Round of play
const playRound = (playerChoice, computerChoice) => {
    //Player picked Rock?
    if(playerChoice.toUpperCase() === 'rock'.toUpperCase() && computerChoice.toUpperCase() === 'paper'.toUpperCase()){
        console.log(`Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`);
    }else if(playerChoice.toUpperCase() == 'rock'.toUpperCase() && computerChoice.toUpperCase() === 'scissors'.toUpperCase()){
        console.log(`Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`);
    }else if(playerChoice.toUpperCase() == 'rock'.toUpperCase() && computerChoice.toUpperCase() === 'rock'.toUpperCase()){
        console.log(`Player and Computer picked ${playerChoice}`);
    }
    //Player picked Scissors?
    else if(playerChoice.toUpperCase() == 'scissors'.toUpperCase() && computerChoice.toUpperCase() === 'rock'.toUpperCase()){
        console.log(`Computer's ${computerChoice} beats players ${playerChoice}, +1 point to Computer`);
    }
    else if(playerChoice.toUpperCase() == 'scissors'.toUpperCase() && computerChoice.toUpperCase() === 'paper'.toUpperCase()){
        console.log(`Player's ${playerChoice} beats computers ${computerChoice}, +1 point to Player`);
    }
    else if(playerChoice.toUpperCase() == 'scissors'.toUpperCase() && computerChoice.toUpperCase() === 'scissors'.toUpperCase()){
        console.log(`Player and Computer picked ${playerChoice}`);
    }
    //Player picked Paper
}
//5 Round game, winner decided at end