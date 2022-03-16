
// ESERCIZIO 1 - CITAZIONI 

const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",

];

const div = document.querySelector("#quotes");
document.querySelector("button").addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    div.innerHTML = quotes[random]
});





// ESERCIZO 2 -  COMMENTI


const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");
const InputURL = document.querySelector("#inputURL");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");



const comments = [];

const renderComments = () => {
  // Versione "separata"
  // const commentItems = comments.map(
  //   (comment) => `<li>
  //     <h4>Utente anonimo (vigliacco)</h4>
  //     <p>${comment}</p>
  //   </li>`
  // );

  // commentsList.innerHTML = commentItems.join("");

  // Versione "one-liner"
  commentsList.innerHTML = comments
    .map(
      (comment) => `<li>
        <h4>Utente</h4>
        <p>${comment}</p>
      </li>`
    )
    .join("");
};

submit.addEventListener("click", () => {
  comments.push(input.value);
  input.value = "";
  renderComments();
});

renderComments();

