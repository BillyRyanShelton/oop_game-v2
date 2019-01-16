/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase;
 	}

	/**
	* Displays the phrase on game board
	*/
 	addPhraseToDisplay() {
 		//converts the phrase to HTML and inserts it in the phrase attribute
 		let phraseHTML = '<div id="phrase" class="section"> <ul>';
 		for(let i = 0; i < this.phrase.length; i++) {
 			//if the letter in the phrase is not a space then add the hide letter class corresponding to that letter is added to the HTML phrase
 			if(this.phrase[i] != ' ') {
 				phraseHTML += '<li class="hide letter ' + this.phrase[i] + '">' + this.phrase[i] +'</li>';
 			} //if the letter is a space then it is given the space class and added to the HTML phrase
 			else {
 				phraseHTML += '<li class="space"> </li>';
 			}
 		} document.getElementById('phrase').innerHTML = phraseHTML;

 	}
 };