// Author: Billy Shelton
// Date: 1/17/19
// Description:  This is the client code file for a 80s pop culture hangman
// game.  The user must correctly guess phrases from the 80s to win the game.


//game variable is created
let game;

//starts the game when the start button is pressed
let startButton = document.getElementById('btn__reset');
startButton.addEventListener('click',(e) => {

	//if the game over message is not empty then a game has already been displayed and the previous game must be reset
	if(document.getElementById("game-over-message").innerText != '') {
		game.resetGame();
	}

	game = new Game();
	game.startGame();
});

//event listeners are created for each button on screen
for(let i = 0; i < 36; i++) {
	let letter = document.getElementsByClassName('key')[i];

	//the handle interaction function is called when a button is pressed
	letter.addEventListener('click', (e)=> {
		game.handleInteraction(e.target);
	});
}
