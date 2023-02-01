/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Todo esta funcionando");
};

const suits = ["♦", "♥", "♠", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cards = [];

function cardBuilder() {
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let value = values[v];
      let suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
console.log(cardBuilder());
