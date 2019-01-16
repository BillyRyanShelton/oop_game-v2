/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
 	constructor(){
	 	this.missed = 0;
	 	this.phrases = [];
	 	this.activePhrase = null;
	 	}	
	
	/**
	* Creates 80s phrases for use in game
	* @return {array} An array of phrases that could be used in the game
	*/
	createPhrases(){
		this.phrases = [new Phrase('Blade Runner'), new Phrase('Gremlins'), new Phrase('Pacman'), new Phrase('Blanka'),
						new Phrase('The Fall Guy'), new Phrase('Sulaco'), new Phrase('Delorean'), new Phrase('Maverick'),
						new Phrase('Spanish Peacock'), new Phrase('Apple II'), new Phrase('Bohemian Rhapsody'), new Phrase('Cowabunga'),
						new Phrase('Take On Me'), new Phrase('Dragon ball'), new Phrase('Spielberg'), new Phrase('Rubik'),
						new Phrase('Pork Chop Express'), new Phrase('Akira'), new Phrase('Gundam'), new Phrase('King of Pop')
		]; return this.phrases;
	}

	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	};

	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
	startGame() {
		//the start screen overlay is hidden from view
		document.getElementById('overlay').style.visibility = 'hidden';

		//phrases are created
		this.createPhrases();

		//a random phrase is added to the display
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	};

	handleInteraction() {

	};

	//returns true or false is user has won the game
	checkForWin() {
		for(let i = 0; i < this.activePhrase; i++) {
			let letterClass = 'hide letter ' + this.activePhrase[i];
 			if(document.getElementsByClassName(letterClass).style.visibility === 'hidden') {
 				return false;
 			} 
 		} return true;
	};

	//removes a life and increments the missed property
	removeLife() {
		//a live heart is replaced with a lost heart
		let ol = document.getElementsByClassName('section').getElementsByTagName('ol');
		for(let i = 0; i < ol.length; i++) {
			if(ol[i].src === "images/liveHeart.png") {
				ol[i].src = "images/lostHeart.png";
				this.missed++;
			}
		}

		//if the user has lost 5 hearts the end game function is called
		if(this.missed === 5) {
			this.gameOver();
		}
	};

	gameOver() {
		//the start screen overlay is made visible
		document.getElementById('overlay').style.visibility = 'visible';

		//the start button is hidden from view
		document.getElementsById("btn__reset").style.visibility = 'hidden';

		//if the user loses a game over message is displayed
		if(this.missed === 5) {
			let gameOVer = 'Game Over Man, Game Over!';
 			document.getElementById("game-over-message").innerText = gameOver;
 			document.getElementsByClassName("start").className = 'win';
		} //if the user wins a win message is dispalyed
		else {
			let gameOVer = 'You Win!';
 			document.getElementById("game-over-message").innerText = gameOver;
 			document.getElementsByClassName("start").className = 'lose';
		}
	};
};