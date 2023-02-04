/* eslint-disable */
import "./style.css";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"]; // Array con los simbolos de las cartas
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
  ]; // Array con el valor  de las cartas
  const mazoCartas = []; //Objeto donde se origina el mazo de cartas

  /* Se recorren los arreglos, se establece el valor individual y 
  se introducen las cartas en un solo objeto con su valor y suit*/
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let value = values[v];
      let suit = suits[s];
      mazoCartas.push({ value, suit });
    }
  }

  /* Se asigna una nueva variable que representa el 
  valor aleatoria de una carta*/
  let card = mazoCartas[Math.floor(Math.random(mazoCartas.length) * 52)];

  /* Verificacion del objeto en la consola se utiliza el JSON.stringify 
  para poder ver el objeto en la consula */
  console.log("La carta es " + JSON.stringify(card));

  /* Establecer  los valores de las cartas en el DOM*/
  let cartaValor = document.getElementById("valor");
  cartaValor.innerHTML = card.value;

  /* Establecer  los simbolos superiores e inferiores de las cartas en el DOM*/
  let cartaSimbolo = document.getElementById("simbolo1");
  cartaSimbolo.innerHTML = card.suit;
  let cartaSimbolo2 = document.getElementById("simbolo2");
  cartaSimbolo2.innerHTML = card.suit;

  /* Asignar solo el color rojo a los simbolos de corazon y 
  diamante con sus respectivos numeros*/
  if (card.suit === "♥" || card.suit === "♦") {
    cartaSimbolo.className += " redColor";
    cartaSimbolo2.className += " redColor";
    cartaValor.className += " redColor";
  }

  //function para cambiar carta cada 10 segundos
  setTimeout(function() {
    location.reload();
  }, 10000);

  /*El siguiente evento agrega una funcion a cada input, 
  el this hace referencia al disparador del evento, en este caso el input, 
  luego se utiliza value para obtener el valor introducido*/
  document.getElementById("height").addEventListener("input", function() {
    document.querySelector(".card").style.height = this.value + "px";
  });

  document.getElementById("width").addEventListener("input", function() {
    document.querySelector(".card").style.width = this.value + "px";
  });
};
