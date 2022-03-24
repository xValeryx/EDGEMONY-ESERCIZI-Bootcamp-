
import createCard from "./utils2.js";


const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";



// CHIAMATA FETCH 

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

getMoviesData().then((resultAPI) => {
  resultAPI.map((movie) =>
    createCard(
      movie.title,
      formatMinText(movie.description),
      movie.poster,
      movie.genres,
      movie.year,
      movie.id

    )
  );
});

try {
  throw new Error("ERROR");
} catch (err) {
  console.log(err);
}



// FORM Aggiunta movie/poster
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const genresInputEl = document.getElementById("genres");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");
const buttonCard = document.getElementById("button");




// AGGIUNTA FILM 

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: genresInputEl.value,
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
  }).then((data) => {
    location.reload();

  });
});




