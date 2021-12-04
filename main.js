let cards = document.querySelectorAll(".card");
let move = document.querySelector(".count");
let count = 0;
console.log(move);
//Add Click Listener to all card\\
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    move.innerText = ++count;
    this.children[0].classList.toggle("show");
  });
}
