let cards = document.querySelectorAll(".card");
let move = document.querySelector(".count");
let image = document.querySelectorAll("img");
let count = 0;

//Add Click Listener to all card\\
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    move.innerText = ++count;
    this.children[0].classList.add("show");
  });
}

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

const startTimer = setInterval(() => {
  timer.innerText = numTimer;
  --numTimer;

  if (numTimer == -1) {
    clearInterval(startTimer);
  }
}, 1000);
