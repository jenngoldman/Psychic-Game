var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
// letterToGuess is the result of the getRandomLetter function.
var letterToGuess = getRandomLetter();

document.addEventListener("DOMContentLoaded", function(){ 
    updateGuessesLeft();
    updateWins();
    updateLosses();
}, false);

function getRandomLetter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    // charAt() --> returns a character at a specified index.
    // Math.floor() -->  rounds decimal down to the nearest integer. 
    // Math.random() --> returns a random # between 0-1.
    return letters.charAt(Math.floor(Math.random() * letters.length));   
}

document.onkeydown = function(event) {
    var keyPressed = String.fromCharCode(event.which).toLowerCase();

    if (keyPressed == letterToGuess) {
        wins++;
        updateWins();
        resetGame();
    } 
    else if (guessesLeft == 1) {
        losses++;
        updateLosses();
        resetGame();
    }
    else {
        guessesLeft--;
        updateGuessesLeft();
        guessesSoFar.push(keyPressed);
        document.getElementById("guesses-so-far").textContent = guessesSoFar.join(", ");
    }
};

function resetGame() {
    letterToGuess = getRandomLetter();
    guessesLeft = 10;
    updateGuessesLeft();
    guessesSoFar = [];
    document.getElementById("guesses-so-far").textContent = "";
}

function updateGuessesLeft() {
    document.getElementById("guesses-left").textContent = guessesLeft;
};

function updateWins() {
    document.getElementById("wins").textContent = wins;
};

function updateLosses() {
    document.getElementById("losses").textContent = losses;
};
