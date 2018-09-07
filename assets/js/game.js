// List all of the array possibilities
var computerChoices = ["a", "b", "c"];

// Variables to hold the data inputted so far
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("htmlWins");
var lossesText = document.getElementById("htmlLosses");
var guessesRemainingText = document.getElementById("htmlGuessesRemaining");
var guessesSoFarText = document.getElementById("htmlGuessesSoFar");

// Use these as needed for testing links
// console.log(winsText);
// console.log(lossesText);
// console.log(guessesRemainingText);
// console.log(guessesSoFarText);

// Kick off the game with a keystroke
document.onkeyup = function (event) {

  // Clears the You Won/You Lost message after a key press
  var resultsText = document.getElementById("htmlMessage");

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly choose a choice from the options array. This is the Computer's guess.
  // <A> FIND A RANDOMIZER!!!!!!!!!!!!
  var computerChoice = "a";

// Use these as needed for testing 
// console.log("userGuess: " + userGuess);
// console.log("computerChoice: " + computerChoice);
  
  
  
  
  winsText.textContent = "wins";
  lossesText.textContent = "losses";

  // <A> Need logic for when it reaches zero
  guessesRemainingText.textContent = guessesRemaining - 1;

  



  
  
  
  } // End of document.onkeyup

  