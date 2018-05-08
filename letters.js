/*jshint esversion: 6*/

var inquirer = require("inquirer");
var userWords = require("./words.js");

var Letter = function() {
  this.wrongLetters = [];
  this.guessesLeft = 15;
  this.winCount = 0;
  this.userWord = new userWords();

  this.wrongGuess = function() {
    console.log("Wrong letter. Guess Again.");
    console.log("\n" + result);
    // this.guessesLeft--;
    this.prompts();
  };

  this.userWord.randomWord();

  this.prompts = function() {
    // console.log(`WINCOUNT: ${this.winCount}`); **WINCOUNT IS BEING INCREASED WITH CORRECT GUESS, NOT ROUND
    // console.log(`USERWORD BLANK: ${this.userWord.blanks}`); **UNSPLIT ARRAY OF USER RESULT
    if (this.winCount == this.userWord.blanks.length) {
      console.log("\n ~~~~~~~~~~~GAME OVER YOU WIN~~~~~~~~~~~~~");
      return;
    }

    if (this.guessesLeft == 0) {
      console.log("\n ~~~~~~~~~~~~~GAME OVER you lose~~~~~~~~~~~");
      return;
      letter1.prompts();
    }

    if (this.guessesLeft > 0) {
      inquirer
        .prompt([
          {
            name: "name",
            message: "Guess a letter...: "
          }
        ])
        .then(answers => {
          for (var letter in this.wrongLetters) {
            // this.wrongLetters - array of wrong letters guessed
            if (letter == answers.name) {
              console.log("You already guessed this letter. Pick again.");
              this.guessesLeft--;
              console.log(
                "You have " + this.guessesLeft + " guesses remaining."
              );
              this.prompts();
              
              return;
              // if (!this.userWord.result) {
              //   // this.userWord.result - updated array of underscores after user guess ( _ _ a _ _)
              //   console.log("\n" + this.userWord.blanks);
              //   var x = this.userWord.blanks.toString();
              //   var result = x.replace(/,/g, " ");
              //   console.log(result + "\n");
              //   return;
              // } else {
              //   console.log(
              //     "You have already guessed this letter. Pick again."
              //   );
              //   this.guessesLeft--;
              //   console.log(
              //     "You have " + this.guessesLeft + " guesses remaining."
              //   );
              //   this.prompts();
              //   console.log("\n" + this.userWord.result);
              //   return;
              // }
            }
          }

          this.wrongLetters.push(answers.name);

          var guess = false;
          var result = "";
          for (i in this.userWord.blanks) {
            if (this.userWord.selectedWord[i] == answers.name) {
              guess = true;
              this.userWord.blanks[i] = answers.name;
            }
          }
          var x = this.userWord.blanks.toString();
          this.userWord.result = x.replace(/,/g, " ");

          this.guessesLeft--;
          this.prompts();
          console.log("~~~~~CORRECT~~~~~~");
          console.log("You have " + this.guessesLeft + " guesses remaining.");
          console.log("\n" + this.userWord.result);
          console.log("\n Letters already guessed: " + this.wrongLetters);
          // return;

          console.log("Wrong Guess");
          console.log("\n Letters already guessed: " + this.wrongLetters);

          this.prompts();
          this.guessesLeft--;
          console.log("You have " + this.guessesLeft + " guesses remaining.");
          if (!this.userWord.result) {
            console.log("\n" + this.userWord.blanks);
            x = this.userWord.blanks.toString();
            result = x.replace(/,/g, " ");
            console.log(result + "\n");
          } else {
            console.log("\n" + this.userWord.result);
          }
        });
    }
  };
};

module.exports = Letter;
