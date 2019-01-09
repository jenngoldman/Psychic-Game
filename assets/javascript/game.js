onDocumentReady() {
	var wins, losses = 0;
	var guessesLeft = 9;
	var guessesSoFar = [];
	var letterToGuess = getRandomLetter();
};

function getRandomLetter() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    // charAt() --> returns a character at a specified index.
    // Math.floor() -->  rounds decimal down to the nearest integer. 
    // Math.random() --> returns a random # between 0-1.
    return letters.charAt(Math.floor(Math.random() * letters.length));   
}

document.onkeydown = function(event) {
    if (keypressed == letterToGuess) {
        wins++;
    } 
    else if (guessesLeft == 1) {
        losses++;
    }
    else {
       guessesLeft--; 
    }

};

a
b 
c 