let cards = document.querySelectorAll(".card");
let move = document.querySelector(".count");
let count = 0;
console.log(move);
//Add Click Listener to all card\\
for (i = 0; i < cards.length; i++) {
  console.log(cards[i].children[0].src);
  console.log(
    (cards[i].children[0].src =
      "./images/" + Math.floor(Math.random() * 5) + ".jpg")
  );
  cards[i].addEventListener("click", function () {
    move.innerText = ++count;
    this.children[0].classList.toggle("show");
  });
}
