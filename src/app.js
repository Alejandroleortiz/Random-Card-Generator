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
const mazoCartas = [];

//function cardBuilder() {
for (let s = 0; s < suits.length; s++) {
  for (let v = 0; v < values.length; v++) {
    let value = values[v];
    let suit = suits[s];
    mazoCartas.push({ value, suit });
  }
}
//return cards;
//}

console.log(
  "La carta es " +
    JSON.stringify(mazoCartas[Math.floor(Math.random(mazoCartas.length) * 52)])
);

/*let card = cardBuilder();

let randomCards = () => {
  return Math.floor(Math.random(card) * 52);
};

console.log(randomCards(cards));*/
