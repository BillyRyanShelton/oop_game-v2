// Author:	Billy R. Shelton
// Date: 1/17/2019
// Description:  This is a header and implementation file for the Game class.

 class Game {
 	constructor(){
	 	this.missed = 0;
	 	this.phrases = [];
	 	this.activePhrase = null;
	 	this.currentPhraseIndex = null;
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
						new Phrase('Pork Chop Express'), new Phrase('Akira'), new Phrase('Gundam'), new Phrase('King of Pop'), 
						new Phrase('Pretty In Pink')]
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

	//function that handles the logic behind when a button is pressed on screen
	handleInteraction(button) {
		//if the button is pressed it is disabled from being pressed again
		button.disabled = true;

		//if the button is match to a letter in the phrase its class is changed to chosen and the letter is shown in the phrase
		if(this.activePhrase.checkLetter(button.innerText)) {
			let correctSound = document.getElementsByTagName('audio')[0];
			correctSound.play();
			button.className = 'chosen';
			this.activePhrase.showMatchedLetter(button.innerText);
			if(this.checkForWin()) {
				this.gameOver();
			}
		} //if the button pressed is an incorrect match its class is changed to wrong and a life is removed
		else {
			let incorrectSound = document.getElementsByTagName('audio')[1];
			incorrectSound.play();
			button.className = 'wrong';
			this.removeLife();
		}

	};

	//returns true or false is user has won the game
	checkForWin() {
		let hiddenClass = 'hide';
 		let numHidden = document.getElementsByClassName(hiddenClass).length;
 		if(numHidden === 0) {
 			return true;
 		} else { return false; }
	};

	//removes a life and increments the missed property
	removeLife() {
		//the number of missed is updated
		this.missed++;
		//if the user has lost 5 hearts the end game function is called
		if(this.missed === 5) {
			this.gameOver();
		}

		//a live heart is replaced with a lost heart
		let hearts = document.getElementsByClassName('tries');
		let numLives = document.getElementsByClassName('tries').length;
		let lostHeart = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';
		let liveHeart = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
		for(let i = 0; i < numLives; i++) {
			if(hearts[i].innerHTML === '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
			{
				hearts[i].innerHTML = lostHeart;
				return;
			}

		}
	};

	gameOver() {
		//the start screen overlay is made visible
		document.getElementById('overlay').style.visibility = 'visible';

		// //the start button is hidden from view
		// document.getElementById("btn__reset").style.visibility = 'hidden';

		//if the user loses a game over message is displayed
		if(this.missed === 5) {
			let gameOver = 'Game Over Man, Game Over!';
 			document.getElementById("game-over-message").innerText = gameOver;
 			document.getElementsByClassName("start").className = 'win';
		} //if the user wins a win message is dispalyed
		else {
			let cheer = document.getElementsByTagName('audio')[2];
			cheer.play();
			let gameOver = 'You Win!';
 			document.getElementById("game-over-message").innerText = gameOver;
 			document.getElementsByClassName("start").className = 'lose';
		}
	};

	//this function resets the game so the user can play a new game
	resetGame() {
		//the phrase is removed
		document.getElementById('phrase').getElementsByTagName('ul')[0].innerHTML = '';
		
		
		//all the key classes are reset to 'key' and all the keys are undisabled from being pressed
		for(let i = 0; i < 4; i++) {
			let key = document.getElementsByClassName('keyrow')[i];
			for(let j = 0; j < key.children.length; j++) {
				key.children[j].className = 'key';
				key.children[j].disabled = false;
			}
		}

		//all the hearts are restored
		let hearts = document.getElementsByClassName('tries');
		let liveHeart = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
		for(let i = 0; i < 5; i++) {
			if(hearts[i].innerHTML != '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
			{
				hearts[i].innerHTML = liveHeart;
			}

		}


	}
};