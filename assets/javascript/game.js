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

//array of letters. I saw this cool trick to make it a little easier to create an array with as many items as the alphabet.
var userChoices;
userChoices = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(userChoices);

// creating variables to hold the wins/lives left. Wins start at 0. Number of guesses starts at 15.
var wins = 0;
var lossess = 0;
var guessCount = 15;

// creates variables to hold user and computer selections

var RandomChar = "";
var hiddenWord = lotrChar[0];
var underscores = 0;
var correctGuesses = [];
var wrongGuesses = [];



// The Game - Start Game

document.onkeyup = function () {
    console.log(event);
    startGame();

    var userGuess = event.key;
    var hiddenWord = lotrChar[Math.floor(Math.random() * lotrChar.length)];
    console.log("user guess: " + userGuess);
}


// document.

function startGame() {
    var guessCount = 15;
    hiddenWord;

};

// Hide the directions 
// directionsText.innerHTML = "";

//create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsCounter = document.getElementById("wins-counter");
var underScores = document.getElementById("underscores");
var wrongGuesses = document.getElementById("wrong-gueses");
var GuessesRemaining = document.getElementById("guesses-remaining");













