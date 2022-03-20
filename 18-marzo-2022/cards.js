/*
Realizzare una piccola web app per visualizzare delle card 
con i nomi del personaggi e l'universo di appartenenza 
stilati in maniera differente.

Requisiti:

visualizzazione dati iniziale
filtrare i dati nella lista utilizzando una ricerca testuale
possibilità di aggiungere un nuovo elemento tramite due campi di testo (nome e universo)
stilare gli elementi in lista per trasformarli in "cards"

*/


const list = (selector) => document.querySelector(selector);

const cards = list(".cards");
const filter = list("#search");
const inputName = list("#name");
const inputUniverse = list("#universe");

const people = [
  "Luke Skywalker - Star Wars",
  "Jack Burton - Grosso guaio a Chinatown",
  "Jhonny Silverhad - Cyberpunk 2077",
  "Bilbo Baggins - Il signore degli anelli",
  "Rick Sanchez - Rick & Morty",
  "Master Chief - Halo",
  "Eleven - Stranger Things",
];


list("#add").addEventListener("click", () => {
  people.push([inputName.value, inputUniverse.value].join(" - "));
  cardsGenerator();
  inputName.value = "";
  inputUniverse.value = "";
});

filter.addEventListener("keyup", () => {
  let val = list("#search").value;
  console.log(val);
  cardsGenerator(val);
});

function cardsGenerator(val = "") {
  let finalArray = [];
  const filteredCards = people.filter((card) =>
    card.toLowerCase().includes(val.toLowerCase())
  );

  filteredCards.forEach((elem) => {
    let elemArray = elem.split(" - ");
    finalArray.push(elemArray);
  });

  console.log(finalArray);

  cards.innerHTML = finalArray
    .map((card) => `<div><h3>${card[0]}</h3><p>${card[1]}</p></div>`)
    .join("");

  if (finalArray.length === 0) {
    cards.innerHTML = "Nessun risultato trovato";
  }
}

cardsGenerator();



