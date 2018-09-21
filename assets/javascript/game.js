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
//array of letters

var userChoices;
userChoices = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(userChoices);

// creating variables to hold the wins/lives left. Wins start at 0. Number of guesses starts at 15.
var wins = 0;
var lossess = 0;
var guessCount = 15;

// creates variables to hold user and computer selections
var chosenWord = "";
var hiddenWord = [];
var underscores = 0;
var correctGuesses = [];
var wrongGuesses = [];



// The Game - Start Game

function startGame() {
    var guessCount = 15;

    //testing testing...
    console.log("game started")

    //have computer choose random word from the array 
    chosenWord = lotrChar[Math.floor(Math.random() * lotrChar.length)];
    console.log(chosenWord);

    hiddenWord = chosenWord.split("");
    underscores = hiddenWord.length;
    correctGuesses = [];
    wrongGuesses = [];
    //then return a value of underscores in place of the letters
    for (var i = o; i < underscores; i++) {
        correctGuesses.push("_");
    }
    document.getElementById("underscores").innerHTML = correctGuesses.join("");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");

}

//check user input function after event takes place. 
function letterCheck(userSelection) {
    var CorrectLetter = false;
    //this loop checks to see if the chose letter is correct
    for (var i = 0; i < underscores; i++) {
        if (chosenWord[i] === userSelection) {
            CorrectLetter = true;
        }
    }
    if (CorrectLetter) {
        for (var i = 0; i < underscores; i++) {
            if (chosenWord[i] === userSelection) {
                correctGuesses[i] = userSelection;
            }
        }
    } else {
        wrongGuesses.push(userSelection);
        guessCount--;
    }
}





function gameOver() {
    document.getElementById("guesses-remaining").innerHTML = guessCount;
    document.getElementById("underscores").innerHTML = correctGuesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (hiddenWord.toString() === correctGuesses.toString()) {
        wins++;
    }

}


// create HTML reference variables



// 















