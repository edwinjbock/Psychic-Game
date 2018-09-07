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
var resultsText = document.getElementById("htmlMessage");

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
  If ()
  var computerChoice = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];
  // Equate the result to a letter in the array
  // ******* TESTING ********
  console.log("computerChoices.length: " + computerChoices.length);
  console.log("computerChoice: " + computerChoice);
  console.log("computerChoices.length - 1: " + (computerChoices.length - 1));

  // Make sure that the computer didn't randomly choose index zero, resulting in a possible value of index [-1]



  // Verify that the user pressed an alpha character
  isAlpha(userGuess);

  function isAlpha(str) {
    if (!(str > 64 && str < 91) && // upper alpha (A-Z)
      !(str > 96 && str < 123))  // lower alpha (a-z)
        {
        return false;
      }
    }
    return true;
  };

  // ******* TESTING ********
  console.log("isAlpha: " + userGuess.isAlpha(userGuess));

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
  guessesRemainingText.textContent = guessesRemaining - 1;








 // End of document.onkeyup

