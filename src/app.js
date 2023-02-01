/* eslint-disable */
import "./style.css";

window.onload = function() {
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

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let value = values[v];
      let suit = suits[s];
      mazoCartas.push({ value, suit });
    }
  }

  let card = mazoCartas[Math.floor(Math.random(mazoCartas.length) * 52)];

  console.log("La carta es " + JSON.stringify(card));

  let cartaValor = document.getElementById("valor");
  cartaValor.innerHTML = card.value;

  let cartaSimbolo = document.getElementById("simbolo1");
  cartaSimbolo.innerHTML = card.suit;

  let cartaSimbolo2 = document.getElementById("simbolo2");
  cartaSimbolo2.innerHTML = card.suit;

  if (card.suit === "♥" || card.suit === "♦") {
    cartaSimbolo.className += " redColor";
    cartaSimbolo2.className += " redColor";
    cartaValor.className += " redColor";
  }

  console.log("Todo esta funcionando");
};
