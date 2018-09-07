// List all of the alpha array possibilities
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables related to the scripting logic
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuess = "";
var computerChoice = "z";

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



guessesRemainingText = 10;



// KICK OFF THE GAME WITH A KEYSTROKE
document.onkeyup = function(event) {

  // Clears the You Won/You Lost message after a key is pressed
  var resultsText = "";

  // guessesRemaining needs to be an integer. Not a string.
  guessesRemaining = parseInt(guessesRemaining);
  guessesRemainingText = parseInt(guessesRemainingText);

  // ******* TESTING *******
  console.log(guessesRemainingText);
  console.log(guessesRemaining);

  // Determine which key was pressed and then convert it to lowercase for comparing to the array above
  var userGuess = event.key;
  var userGuessVetted = userGuess.toLowerCase();

  // Verify that the user pressed an alpha character
  if (isAlpha(userGuessVetted) == false) {
    // If they didn't, tell them and return
    resultsText.textContent = "Letters only, please";

            console.log(resultsText);

    return;
  }
  else if (isAlpha(userGuessVetted) == true) {
    // if alpha then do everything else
    if (parseInt(guessesRemainingText) === 10) {
      // Computer Choice Randomizes ONLY ONCE during each match
      computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      // Change key variables
      guessesSoFarText = userGuess;
      guessesRemainingText = parseInt(guessesRemainingText) - 1;
    }
    else {
      guessesRemainingText.textContent = parseInt(guessesRemainingText) - 1;
      guessesSoFarText.textContent = guessesSoFarText + ", " + userGuess;
      // Check for win or loss
      if (userGuessVetted == computerChoice) {
        wins++;
        resultsText.textContent = "You won!";
        // Reset malleable variables
        guessesRemainingText.textContent = 10;
        guessesSoFarText.textContent = "";
      }
      else if (guessesRemainingText == 0) {
        losses++;
        resultsText = "You lost the Gypsy's Challenge";
        // Reset due to end of match
        guessesRemainingText = 10;
        guessesSoFar = "";
      }
      else { } // do nothing
    }
    // Port the results back to the DOM
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesRemainingText.textContent = guessesRemaining;
    guessesSoFarText.textContent = guessesSoFar;
    resultsText.textContent = resultsMsg;
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