//choice character selections from one of the greatest epics of all time
var lotrChar = [
    "Gandalf the Grey",
    "Saruman the White",
    "Frodo Baggins",
    "Bilbo Baggins",
    "Peregrin Took",
    "Meriadoc Brandybuck",
    "Samwise Gamgee",
    "Legolas Greenleaf",
    "Arwen Undomiel",
    "Gimli",
    "Aragorn",
    "Borimir",
    "Treebeard",
    "Gollum",
    "Sauron"
];

//array of letters. I saw this cool trick to make it a little 
//easier to create an array with as many items as the alphabet.
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(alphabet);

// creating variables to hold the wins/lives left. Wins start at 0. 
//Number of guesses starts at 15.
var wins = 0;
var lossess = 0;
var guessCount = 0;


var correctOrBlank = [];
var wrongGuesses = [];
var hiddenWord = "";
var hiddenWordArr = [];
var underscores = 0;



// GAME LOGIC
// function startGame
function startGame() {
    guessCount = 15;

    //choose random word
    hiddenWord = lotrChar[Math.floor(Math.random() * lotrChar.length)];
    //take that word and break it up into an array

    hiddenWordArr = hiddenWord.toLowerCase().split("");

    underscores = hiddenWordArr.length;

    correctOrBlank = [];
    wrongGuesses = [];

    // convert hiddenWordArr to underscores
    for (var i = 0; i < hiddenWordArr.length; i++) {
        correctOrBlank.push("_");
    }
    console.log(`Guess Count: ${guessCount}\nHidden Word: ${hiddenWord}\nHidden Letters: ${hiddenWordArr}\nCustomer Facing: ${correctOrBlank} \n`);

    // Display the blanks of the guess word on the DOM
    document.getElementById("underscores").innerHTML = correctOrBlank.join(" ");

    // Clear the wrong guesses from the previous round on the DOM
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// function check letters
function checkLetters(userGuess) {
    letterInWord = false;
    for (var i = 0; i < hiddenWordArr.length; i++) {
        if (hiddenWord[i] === userGuess) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < hiddenWord.length; j++) {
            if (hiddenWord[j] === userGuess) {
                correctOrBlank[j] = userGuess;
            }
        }
    } else {
        wrongGuesses.push(userGuess);
        guessCount--;
    }
    console.log(`Updated Hidden Word: ${correctOrBlank}\nWrong Guesses: ${wrongGuesses}\nGuess Count: ${guessCount}`);
}


// roundFinish() function
// After a guess is made, run this function
function roundFinish() {

    // Log the wins, losses, and guesses to the console
    console.log(`Wins: ${wins} | LossCount: ${lossess} | Guesses Left: ${guessCount}`);

    // Update DOM with the number of guesses remaining
    document.getElementById("guesses-remaining").innerHTML = guessCount;
    // Update page with guesses and underscores
    document.getElementById("underscores").innerHTML = correctOrBlank.join(" ");
    // Update wrong guesses to DOM
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // If all the letters have been guessed
    if (hiddenWordArr.toString() === correctOrBlank.toString()) {
        // increment wins and alert the user. Congrats!
        wins++;
        alert(`Congrats! You guessed ${hiddenWord}`);

        // Update the win counter and restart the game
        document.getElementById("win-counter").innerHTML = wins;
        startGame();
    }
    // If the user runs out of hearts
    else if (guessCount === 0) {
        // Add to the loss counter
        losses++;
        // Show an alert - oh noo!
        alert("Oh no! The word was " + hiddenWord + "! \n\nIt's dangerous to go alone...");

        // Update loss counter in the DOM
        document.getElementById("loss-counter").innerHTML = losses;
        // Restart the game
        startGame();
    }

}

startGame();

// capture user entry
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Check to see if the key pressed is a letter
    for (var j = 0; j < alphabet.length; j++)
        if (userGuess == alphabet[j]) {
            // Check for correct guesses
            checkLetters(userGuess);
            // Move to the next round
            roundFinish();
        };
    console.log(`User Guess: ${userGuess}`)

};