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
	 };