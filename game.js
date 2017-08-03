
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and guesses. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 0;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)



   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess == computerChoice){
        guesses++;
        wins++;
    }
    if(userGuess != computerChoice){
        guesses++;
    }

    if(guesses == 5){
        losses++;

        
    }
  

    document.getElementById('Letter Guessed').innerHTML = "Letter Guessed: " + userGuess;
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('Guesses').innerHTML = "Guesses : " + guesses;


}  // moved to below the innerHTML update
