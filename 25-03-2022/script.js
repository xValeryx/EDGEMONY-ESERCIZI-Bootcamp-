import { createCard, createModal } from "./utils.js";


// Testo 

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";


// CHIAMATA FETCH - API DATA 


const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    // Redirect
    // window.location.href = "/";

    const h1El = document.createElement("h1");
    h1El.textContent = "404 pagina non trovata";

    document.body.append(h1El);

    throw new Error("La pagina non è stata trovata");
  }
};

// Elementi relativi alla modale
//const modalEl = document.querySelector(".modalWrapper");
const overlayEl = document.querySelector(".overlay");

// Elementi relativi al form
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

let data = [];

getMoviesData()
  .then((resultAPI) => {
    data = resultAPI;

    resultAPI.map((movie, index) =>
      createCard(
        movie.title,
        formatMinText(movie.description),
        movie.poster,
        movie.year,
        index
      )
    );
  })
  .then(() => {
    const cardsEl = document.querySelectorAll(".card");

    cardsEl.forEach((movie) => {
      movie.addEventListener("click", () => {
        const id = parseInt(movie.id);
        console.log(data[id]);
        const obj = data[id];
        createModal(obj.title, obj.year, obj.description, obj.poster);

        const modalEl = document.querySelector(".modalWrapper");
        modalEl.classList.toggle("showModal");
        overlayEl.classList.toggle("hideOverlay");
     });
    });
  });

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genre: [""],
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    
    }),
  }).then(() => location.reload());
});

overlayEl.addEventListener("click", () => {
  modalEl.classList.toggle("showModal");
  overlayEl.classList.toggle("hideOverlay");
});
