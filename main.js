let cards = document.querySelectorAll(".card");
let move = document.querySelector(".count");
let image = document.querySelectorAll("img");
let count = 0;
let cardFlip = 0;
let cardOne, cardTwo;
let gameStarted = false;
//Add Click Listener to all card\\
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    cardFlip++;
    move.innerText = ++count;

    this.children[0].classList.add("show");

    //Compare Two Card\\
    if (cardFlip == 1) {
      startTimer(gameStarted);
      cardOne = this.children[0];
    } else {
      cardTwo = this.children[0];
    }

    if (cardFlip >= 2) {
      compareCard(cardOne, cardTwo);
      cardOne = "";
      cardTwo = "";
      cardFlip = 0;
    }
  });
}

//Compare Card\\
const compareCard = (cardOne, cardTwo) => {
  if (cardOne.src == cardTwo.src) {
  }
  if (cardOne.src != cardTwo.src) {
    setTimeout(() => {
      cardOne.classList.remove("show");
      cardTwo.classList.remove("show");
    }, 500);
  }
};

//Array images random\\

const imageArray = [
  "./images/4.jpg",
  "./images/1.jpg",
  "./images/5.jpg",
  "./images/3.jpg",
  "./images/2.jpg",
  "./images/0.jpg",
  "./images/3.jpg",
  "./images/2.jpg",
  "./images/1.jpg",
  "./images/5.jpg",
  "./images/0.jpg",
  "./images/4.jpg",
];
//Random Image \\
let newArray = [];
for (let index = 0; index < 12; index++) {
  let randomNum = Math.floor(Math.random() * imageArray.length);
  newArray[index] = imageArray[randomNum];
  imageArray.splice(randomNum, 1);
  image[index].src = newArray[index];
}

//Timer\\

const timer = document.querySelector(".timer");
let numTimer = 10;

const startTimer = (started) => {
  if (!started) {
    gameStarted = true;
    const gameTimer = setInterval(() => {
      timer.innerText = numTimer;
      --numTimer;

      if (numTimer == -1) {
        clearInterval(gameTimer);
      }
    }, 1000);
  }
};
