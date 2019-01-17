# Week 5: Word Guess Game

- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 11/24/2018

- **Built With** HTML, CSS, Bootstrap, Javascript, JQuery

## Description & Requirements
---
For this assignment we were required to build a dynamic word guess web application using Javascript and JQuery. We were tasked with dyncamilly displaying items to the DOM, using event listeners, methods and making use of loops and arrays to determine outcomes. 

I chose a Lord of The Rings (LOTR) theme for my game!

## Rules of the Game

Each round the computer will randomnly select a word for the player to guess. A player will receive 10 guesses (Guess Count) to try and guess the randomly selected word. Each correct guess will replace the corresponding _ with the letter and will NOT change the Guess Count.

        ex. 
                hidden word: _ _ _ _ _

                user guess : 'b'

                result     : b _ _ b _


 Each *incorrect* guess will deduct one guess will display the letter in the Incorrect Guess Display and take the Guess Count down one. If the user can guess the word correctly before the Guess Count gets down to 0 they win the game. If the cannot, they will have to try again!



## How it Works

1. Using a document ready function, the game is comprised of 3 functions. 

    * startGame(): is run at the start of the game
        1. Sets the Guess Count to 10
        2. Empties Incorrect Guess Display
        3. Randomly selects a word from the words array
        4. Takes the randomly selected word and splits the word up into a new letters array for the player to guess
        5. Replaces each letter and replaces it with underscores to be displayed on the DOM
        

    * checkLetters(): is run every time the player makes a guess
        1. Takes the user letter selection by listening for a button press
        2. Checks the user guess against those in the new array
        3. It returns a true value if the letter is correc and a false value if the guess is incorrect. 

    * roundFinish(): runs after a guess is made and until the game conclusion.
        1. Updates the DOM displays with scores, guesses and guess count
        2. Runs code that will alert the player when the game is won or lost
        3. Calls the startGame() function
        
### Notes

This was probably one of the harder assignments that we were given in the class. It really helped to cement the concept of looping and 









