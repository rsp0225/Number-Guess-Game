let randomNumber = 0;
let userInput = document.querySelector("#user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5;
let userValueList = [];

chanceArea.textContent = "Remaining chances: " + chances;
playButton.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Correct number: ", randomNumber);
}

function playGame() {
  const userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "Please, enter a number a between 1 and 100!";
    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent =
      "This number is already entered. Please, enter a different number!";
    return;
  }

  chances--;
  chanceArea.textContent = "Remaining chances: " + chances;
  userValueList.push(userValue);

  if (userValue < randomNumber) {
    resultAreaImg.src =
      "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    resultText.textContent =
      "Result: Your number is small! Guess a bigger number!!";
  } else if (userValue > randomNumber) {
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    resultText.textContent =
      "Result: Your number is big! Guess a smaller number!!";
  } else {
    resultAreaImg.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    resultText.textContent = "Result: That's right!!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
    resultAreaImg.src =
      "https://media0.giphy.com/media/efn76x8TzEbvtkcCaS/giphy.gif?cid=6c09b9524d6585bc8613d08d8fab79c6aa5337a8a22b1b6d&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=g";
    resultText.textContent =
      "Result: You lost... Correct answer was " +
      randomNumber +
      "... Take a shot!!!";
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function resetGame() {
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src =
    "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
  resultText.textContent = "Guess if you don't want to die";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.textContent = "Remaining chances: " + chances;
  userValueList = [];
}

pickRandomNumber();
