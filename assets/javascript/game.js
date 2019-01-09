var wins, losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
// letterToGuess is the result of the getRandomLetter function.
var letterToGuess = getRandomLetter();

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
        resetGame();
    } 
    else if (guessesLeft == 1) {
        losses++;
        resetGame();
    }
    else {
        guessesLeft--;
        guessesSoFar.push(keyPressed);
    }
};

function resetGame() {
    letterToGuess = getRandomLetter();
    guessesLeft = 9;
}