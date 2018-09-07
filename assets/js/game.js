// List all of the array possibilities
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold the data inputted so far
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("htmlWins");
var lossesText = document.getElementById("htmlLosses");
var guessesRemainingText = document.getElementById("htmlGuessesRemaining");
var guessesSoFarText = document.getElementById("htmlGuessesSoFar");

// ******* TESTING ********
// console.log(winsText);
// console.log(lossesText);
// console.log(guessesRemainingText);
// console.log(guessesSoFarText);

// KICK OFF THE GAME WITH A KEYSTROKE
document.onkeyup = function (event) {

  // Clears the You Won/You Lost message after a key press
  var resultsText = document.getElementById("htmlMessage");

  // Vet the key stroke, making sure that it is contained in the array above
  // <A>

  // Determine which key was pressed and then convert it to lowercase for comparing to the array above
  var userGuess = event.key;
  var userGuessVetted = userGuess.toLowerCase();

  // Randomly choose a choice from the options array. This is the Computer's guess.
  // <A> FIND A RANDOMIZER!!!!!!!!!!!!
  var computerChoice = "a";

// ******* TESTING ********
console.log("userGuess: " + userGuess);
console.log("computerChoice: " + computerChoice);
console.log("userGuessVetted: " + userGuessVetted);

  
  
  
  winsText.textContent = "wins";
  lossesText.textContent = "losses";

  // <A> Need logic for when it reaches zero
  guessesRemainingText.textContent = guessesRemaining - 1;





  
  
  
  } // End of document.onkeyup

  