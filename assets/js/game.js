// List all of the alpha array possibilities
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables related to the scripting logic
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuess = "";
var computerChoice = "";

// Variables that refer to the HTML
var winsText = document.getElementById("htmlWins");
var lossesText = document.getElementById("htmlLosses");
var guessesRemainingText = document.getElementById("htmlGuessesRemaining");
var guessesSoFarText = document.getElementById("htmlGuessesSoFar");
var resultsText = document.getElementById("htmlMessage");

// Global function to test for an alpha event.key
function isAlpha(str) {
  for (i = 0; i < computerChoices.length; i++) {
    if (str === computerChoices[i]) {
      return true;
    } else { }
  } // end of for loop
  return false;
} // end of isAlpha()

// ******* TESTING ********
console.log(winsText);
console.log(lossesText);
console.log(guessesRemainingText);
console.log(guessesSoFarText);

// KICK OFF THE GAME WITH A KEYSTROKE
document.onkeyup = function (event) {

  // Clears the You Won/You Lost message after a key is pressed
  var resultsText = "";

  // guessesRemaining needs to be an integer. Not a string.
  guessesRemaining = parseInt(guessesRemaining);
  guessesRemainingText = parseInt(guessesRemainingText);

  // Determine which key was pressed and then convert it to lowercase for comparing to the array above
  var userGuess = event.key;
  var userGuessVetted = userGuess.toLowerCase();

  // Verify that the user pressed an alpha character
  if (isAlpha(userGuessVetted) == false) {
    // If they didn't, tell them and return
    resultsText = "Letters only, please";
    htmlMessage = resultsText;
    return;
  }
  else if (isAlpha(userGuessVetted) == true) {
    // if alpha then do everything else
    if (guessesRemainingText == 10) {
      // Computer Choice Randomizes ONLY ONCE during each match
      computerChoice = "a";
      // computerChoice = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];
      // Change key variables
      guessesSoFarText = userGuessVetted;
      guessesRemainingText = guessesRemainingText - 1;
    }
    else {
      guessesRemainingText = guessesRemainingText - 1;
      guessesSoFarText = guessesSoFarText + ", " + userGuess;
      // Check for win or loss
      if (userGuessVetted == computerChoice) {
        wins++;
        resultsText = "You won!";
        // Reset malleable variables
        guessesRemainingText = 10;
        guessesSoFarText = "";
      }
      else if (guessesRemainingText == 0) {
        losses++;
        resultsText = "You lost the Gypsy's Challenge";
        // Reset due to end of match
        guessesRemainingText = 10;
        guessesSoFarText = "";
      }
      else { } // do nothing
    }
    // Port the results back to the DOM
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesRemainingText.textContent = guessesRemainingText;
    guessesSoFarText.textContent = guessesSoFarText;
    resultsText.textContent = resultsText;
  }
  else {
    return;
  }

  // ******* TESTING ********
  console.log("userGuess: " + userGuess);
  console.log("userGuessVetted: " + userGuessVetted);
  console.log("isAlpha: " + isAlpha(userGuess));
  console.log("computerChoices.length: " + computerChoices.length);
  console.log("computerChoice: " + computerChoice);
  console.log("computerChoices.length - 1: " + (computerChoices.length - 1));

}; // End of document.onkeyup

// END OF FILE