/* eslint-disable */
import "./style.css";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"]; // Definir contenido de simbolos de las cartas
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
  ]; // Definir valor del contenido de las cartas
  const mazoCartas = []; //Objeto donde se introduccen las cartas

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let value = values[v];
      let suit = suits[s];
      mazoCartas.push({ value, suit });
    }
  } // Se recorren los arreglos, se establece el valor individual y se introducen las cartas en un solo objeto

  let card = mazoCartas[Math.floor(Math.random(mazoCartas.length) * 52)]; // Se asigna una nueva variable que representa el valor aleatoria de una carta

  console.log("La carta es " + JSON.stringify(card)); // Verificacion del objeto en la consola

  let cartaValor = document.getElementById("valor");
  cartaValor.innerHTML = card.value; // Establecer el los valores de las cartas en el DOM

  let cartaSimbolo = document.getElementById("simbolo1");
  cartaSimbolo.innerHTML = card.suit; // Establecer el los simbolos superiores de las cartas en el DOM

  let cartaSimbolo2 = document.getElementById("simbolo2");
  cartaSimbolo2.innerHTML = card.suit; // Establecer el los simbolos inferiores de las cartas en el DOM

  if (card.suit === "♥" || card.suit === "♦") {
    cartaSimbolo.className += " redColor";
    cartaSimbolo2.className += " redColor";
    cartaValor.className += " redColor";
  } // asignar solo el color rojo a los simbolos de corazon y diamento con sus respectivos numeros

  /*setTimeout(function() {
    //function para cambiar carta cada 10 segundos
    location.reload();
  }, 10000);

  console.log("Todo esta funcionando");*/

  document.getElementById("height").addEventListener("input", function() {
    document.querySelector(".card").style.height = this.value + "px";
  });

  document.getElementById("width").addEventListener("input", function() {
    document.querySelector(".card").style.width = this.value + "px";
  });
};
