//choice character selections from one of the greatest epics of all time
var lotrChar = [
    "Gandalf",
    "Saruman",
    "Frodo",
    "Bilbo",
    "Pippin",
    "Merry",
    "Samwise",
    "Legolas",
    "Arwen",
    "Gimli",
    "Aragorn",
    "Borimir",
    "Treebeard",
    "Gollum",
    "Sauron",
    "Galadriel"
];

//array of letters. I saw this cool trick to make it a little 
//easier to create an array with as many items as the alphabet.
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(alphabet);

// creating variables to hold the wins/lives left. Wins start at 0. 
//Number of guesses starts at 15.
var wins = 0;
var losses = 0;
var guessCount = 0;

var guesses = [];
var hiddenWord = "";
var displayWord = [];
var wrongGuesses = [];




// GAME LOGIC
// function startGame
function startGame() {
    guessCount = 5;
    guesses = [];
    wrongGuesses = [];

    //choose random word
    hiddenWord = lotrChar[Math.floor(Math.random() * lotrChar.length)].toLowerCase();
    //take that word and break it up into an array

    displayWord = hiddenWord.split("").map(letter => {
        return "_"
    });

    console.log(`Guess Count: ${guessCount}\nHidden Word: ${hiddenWord}\nHidden Letters: ${displayWord}\nWrong Guesses: ${wrongGuesses}\nGuesses: ${guesses}`);

    // Display the blanks of the guess word on the DOM
    document.getElementById("underscores").textContent = displayWord.join(" ");

    // Clear the wrong guesses from the previous round on the DOM
    document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");
}

// function check letters
function checkLetters(userGuess) {
    var wrongGuesses = true;
    for (var i = 0; i < displayWord.length; i++) {
        if (hiddenWord[i] === userGuess) {
            displayWord[i] = userGuess;
            wrongGuesses = false;
        }

    }
    console.log(`Guess Count: ${guessCount}\nUpdated Hidden Word: ${displayWord.join("")}\nWrong Guesses: ${wrongGuesses}\nGuesses: ${guesses}`);
    return wrongGuesses;
}


// roundFinish() function
// After a guess is made, run this function
function roundFinish() {

    // Log the wins, losses, and guesses to the console
    console.log(`Wins: ${wins} | LossCount: ${losses} | Guesses Left: ${guessCount}`);

    // Update DOM with the number of guesses remaining
    document.getElementById("guesses-remaining").textContent = guessCount;
    // Update page with guesses and underscores
    document.getElementById("underscores").textContent = displayWord.join(" ");
    // Update wrong guesses to DOM
    document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");

    // If all the letters have been guessed
    if (displayWord.indexOf("_") === -1) {
        // increment wins and alert the user. Congrats!
        wins++;
        alert(`Congrats! You guessed ${hiddenWord}`);

        // Update the win counter and restart the game
        document.getElementById("win-counter").textContent = wins;
        startGame();
    }
    // If the user runs out of hearts
    else if (guessCount <= 0) {
        // Add to the loss counter
        losses++;
        // Show an alert - oh noo!
        alert("Oh no! The word was " + hiddenWord + "! \n\nIt's dangerous to go alone...");

        // Update loss counter in the DOM
        document.getElementById("loss-counter").textContent = losses;
        // Restart the game
        startGame();
    }

}

startGame();

// capture user entry
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("directions").textContent = " ";
    // Check to see if the key pressed is a letter
    if (alphabet.indexOf(userGuess) === -1) {
        return
    };
    if (guesses.indexOf(userGuess) === -1) {
        guesses.push(userGuess);
        // Check for correct guesses
        if (checkLetters(userGuess)) {
            wrongGuesses.push(userGuess);
            guessCount--;
        }
    }
    // Move to the next round
    roundFinish();
    console.log(`User Guess: ${userGuess}`)

};