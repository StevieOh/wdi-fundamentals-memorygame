console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");

var cardOne = cards[0];
var cardTwo = cards[2];
//var cardThree = "King";
//var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
  alert("You found a match!"); 
} else {
  alert("Sorry try again.");
}


