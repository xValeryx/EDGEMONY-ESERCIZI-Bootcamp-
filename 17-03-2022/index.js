const q = (selector) => document.querySelector(selector);
const listContainer = q("#list");
const userString = q("#userString");
const movies = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado",
  "Blade Runner",
];

listContainer.innerHTML = movies.map((movie) => `<li>${movie}</li>`).join("");

q("#pulsante").addEventListener("click", () => {
  const filteredList = movies.filter((movie) =>
    movie.toLowerCase().includes(userString.value.toLowerCase())
  );

  listContainer.innerHTML = filteredList
    .map((movie) => `<li>${movie}</li>`)
    .join("");

  if (filteredList.length === 0)
    listContainer.innerHTML = "Nessun film trovato";
});