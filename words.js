class userWord {
	constructor() {
		this.wordOptions = ["drill", "hammer", "dry wall", "mud", "screws", "ladder", "hammer drill", "contractor", "paint", "sander", "brush"];
		this.blanks = [];
		this.lettersInWord = "";
		this.result = "";
		this.selectedWord = [];
		this.randomWord = function () {
			this.selectedWord = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
			this.lettersInWord = this.selectedWord.split("");
			for (const i in this.lettersInWord) {
				this.blanks.push("_");
			}
			var x = this.blanks.toString();
			this.result = x.replace(/,/g, " ");
			console.log(this.result + "\n");
		};
	}
}


module.exports = userWord;