var wins = 0;
var losses = 0;
var guesses = "";
var guessesLeft = 9;
var computerGuess;

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


var gameStarted = false

function startGame(){
	computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
	guesses = "";
	guessesLeft = 9;
	gameStarted = true;
	write();
}

function write(){
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.querySelector("#guesses").innerHTML = guesses;


}


document.onkeyup = function(event){
	if (gameStarted == false){
		startGame();
	}
    if(event.key == computerGuess){
        wins++;
        gameStarted= false;
        write();

        return
    }
    else{
    	guesses += event.key;
    	guessesLeft--;
    	write();
    	if (guessesLeft == 0){
    		losses++;
    		gameStarted= false;
    		write();
    		return
    	}


    }
}