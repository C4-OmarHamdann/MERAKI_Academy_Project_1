const game = document.querySelector(".game");
//add card\\
for (let index = 0; index < 12; index++) {
  const div = document.createElement("div");
  div.classList.add("card");
  game.append(div);
  const img = document.createElement("img");
  div.append(img);
}

const cards = document.querySelectorAll(".card");
const move = document.querySelector(".count");
const image = document.querySelectorAll("img");

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
    numTimer += 2;
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
let numTimer = 20;

const startTimer = (started) => {
  if (!started) {
    gameStarted = true;
    const gameTimer = setInterval(() => {
      timer.innerText = numTimer;
      --numTimer;
      const showArray = document.querySelectorAll(".show");
      console.log(showArray.length);
      if (showArray.length >= 12) {
        win();
        clearInterval(gameTimer);
      } else if (numTimer < 0 || count >= 20) {
        loss();
        clearInterval(gameTimer);
      }
    }, 1000);
  }
};

//start game\\

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  cards.forEach((element) => {
    element.style.visibility = "visible";
  });

  startButton.style.display = "none";
});

//Game Over\\
//loss\\
const over = document.querySelector(".over");
const loss = () => {
  cards.forEach((element) => {
    element.style.display = "none";
  });
  over.style.display = "block";
  over.children[0].innerText = "Loss";
};
//win\\
const win = () => {
  cards.forEach((element) => {
    element.style.display = "none";
  });
  over.style.display = "block";
};
//play again\\
over.addEventListener("click", () => {
  window.location.reload();
});
