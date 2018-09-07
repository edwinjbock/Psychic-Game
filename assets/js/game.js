// List all of the array possibilities
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold the data inputted so far
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuess = "";

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("htmlWins");
var lossesText = document.getElementById("htmlLosses");
var guessesRemainingText = document.getElementById("htmlGuessesRemaining");
var guessesSoFarText = document.getElementById("htmlGuessesSoFar");
var resultsText = document.getElementById("htmlMessage");

// Global function to test for alpha event.key
function isAlpha(str) {
  for (i = 0; i < computerChoices.length; i++) {
    if (str === computerChoices[i]) {
      return true;
    } else { }
  } // end of for loop
  return false;
} // end of isAlpha()




// ******* TESTING ********
// console.log(winsText);
// console.log(lossesText);
// console.log(guessesRemainingText);
// console.log(guessesSoFarText);

// KICK OFF THE GAME WITH A KEYSTROKE
document.onkeyup = function (event) {

  // Clears the You Won/You Lost message after a key is pressed
  var resultsText = "";

  // Determine which key was pressed and then convert it to lowercase for comparing to the array above
  var userGuess = event.key;
  var userGuessVetted = userGuess.toLowerCase();

  // Computer Choice
  
  var computerChoice = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];
  // Equate the result to a letter in the array
  // ******* TESTING ********
  console.log("computerChoices.length: " + computerChoices.length);
  console.log("computerChoice: " + computerChoice);
  console.log("computerChoices.length - 1: " + (computerChoices.length - 1));

  // Make sure that the computer didn't randomly choose index zero, resulting in a possible value of index [-1]



  // Verify that the user pressed an alpha character
  isAlpha(userGuessVetted);

  // ******* TESTING ********
  console.log("isAlpha: " + isAlpha(userGuess));

  // Vet the key stroke, making sure that it is contained in the array above
  // <A>






  // ******* TESTING ********
  console.log("userGuess: " + userGuess);
  console.log("computerChoice: " + computerChoice);
  console.log("userGuessVetted: " + userGuessVetted);

  // TESTING BELOW OUTPUT
  winsText = 100;
  lossesText = 101;
  guessesRemainingText = 102;
  guessesSoFarText = "a";
  var resultsText = "Test";

  // Port the results back to the DOM
  htmlWins.textContent = winsText;
  htmlLosses.textContent = lossesText;
  htmlGuessesRemaining.textContent = guessesRemainingText;
  htmlGuessesSoFar = htmlGuessesSoFar + ", " + guessesSoFarText;
  htmlMessage = resultsText;


  // <A> Need logic for when remaining guesses reach zero
  // guessesRemainingText = (parseInt(guessesRemaining) - 1);


} // End of document.onkeyup

