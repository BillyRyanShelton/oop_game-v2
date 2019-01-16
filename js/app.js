let game;

//starts the game when the start button is pressed
let startButton = document.getElementById('btn__reset');
startButton.addEventListener('click',(e) => {
	game = new Game();
	game.startGame();
});
