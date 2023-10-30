"use strict";

//Generating the random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Initializing the variables
let score = 20;
let highscore = 0;

//Function to display message to the user
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Main logic of the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //Verifying the input entered by the user is between 1 and 20
  if (guess > 20 || guess < 1) {
    alert("Only numbers between 1 and 20 are allowed for this game");
    document.querySelector(".guess").value = "";
  } else {
    //If no number entered by the user
    if (!guess) {
      displayMessage("⛔ No number");
    }
    //Logic when the user won the game
    else if (guess === secretNumber) {
      displayMessage("🎉 Correct answer");

      //Setting up the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".number").textContent = secretNumber;

      //Styles when the user wins the game
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
    //If the user guess is incorrect
    else if (guess !== secretNumber) {
      if (score > 1) {
        //Displaying the appropriate messages according to the incorrect guess
        displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("🛑 you lost the game");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

//Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".highscore").textContent = highscore;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  //Resetting the styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
