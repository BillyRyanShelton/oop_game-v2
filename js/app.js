let game;

//starts the game when the start button is pressed
let startButton = document.getElementById('btn__reset');
startButton.addEventListener('click',(e) => {
	game = new Game();
	game.startGame();
});

//event listeners are created for each button on screen
for(let i = 0; i < 36; i++) {
	let letter = document.getElementsByClassName('key')[i];
	letter.addEventListener('click', ()=> {
		game.handleInteraction(letter.innerText);
	});
}


// //event listeners are created for each button on screen
// for(let i = 0; i < 36; i++) {
// 	document.getElementsByClassName('key')[i].addEventListener('click', (button) => {
// 		game.handleInteraction();
// 	});
// }