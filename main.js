let cards = document.querySelectorAll(".card");
let i = 0,
  length = cards.length;

//Add Click Listener to all card\\
for (i; i < length; i++) {
  cards[i].addEventListener("click", function () {
    this.children[0].classList.toggle("show");
  });
}
