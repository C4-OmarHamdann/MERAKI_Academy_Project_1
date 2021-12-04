let cards = document.querySelectorAll(".card");
let move = document.querySelector(".count");
let image = document.querySelectorAll("img");
let count = 0;
console.log(move);
//Add Click Listener to all card\\
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    move.innerText = ++count;
    this.children[0].classList.toggle("show");
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

imageArray.forEach((element, i) => {
  let randomNum = Math.floor(Math.random() * 12);
  image[i].src = element;
});

//Timer\\
