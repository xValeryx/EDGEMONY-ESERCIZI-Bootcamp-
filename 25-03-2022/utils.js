export { createCard,  createModal};
// export default createCard;

const createCard = (title, desc, imgUrl, genre, index) => { // tolto genre, year
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const genreEl = document.createElement("h2");
  //const yearEl = document.createElement("h2")

  divEl.classList.add("card");
  genreEl.classList.add("genre");
  parDescEl.classList.add("description");
  //yearEl.classList.add("year");

  divEl.id = index;
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", "img cosi");
  h3El.textContent = title;
  parDescEl.textContent = desc;
  genreEl.textContent = genre;
  //yearEl.textContent = year;

  divEl.append(imgEl, h3El, parDescEl, genreEl); // tolto yearEl, parDescEl
  document.querySelector(".wrapperMovies").appendChild(divEl);
};


// CREATE MODAL 

const createModal = (title, movieYear, movieDescription, poster) => {
  const create = (elem) => document.createElement(elem);

  const wrapper = create("div");
  const img = create("img");
  const info = create("div");
  const h1 = create("h1");
  const year = create("p");
  const desc = create("p");

  wrapper.classList.add("modalWrapper");
  info.classList.add("info");
  img.setAttribute("src", poster);
  img.setAttribute("alt", "");

  
  h1.textContent = title;
  year.textContent = movieYear;
  desc.textContent = movieDescription;

  info.appendChild(h1);
  info.appendChild(year);
  info.appendChild(desc);

  wrapper.appendChild(img);
  wrapper.appendChild(info);
   

  const host = document.querySelector("#modalHost");
  host.appendChild(wrapper);
};



/*

// CREATE MODAL AND REMOVER 

function modalGenerator(poster, title, description, year, genre, id) {
    overlay.classList.add("visible");
    const modal = c("div");
    modal.classList.add("modal");

    if (Array.isArray(genre)) {
        genres = genres.join(", ");
    };

    modal.innerHTML =
        `
          <img class="modalImage" src="${poster}">
          <div class="mainModal">
            <h2>${title}</h2>
            <p><strong>Descrizione: </strong>${maxLength(180, description)}</p>
            <p><strong>Anno: </strong>${year}</p>
            <p><strong>Generi: </strong>${genre}</p>
            <div class="actions">
              <strong>Actions: </strong>
              <button class="deleteCardBtn">Delete</button>
              // <button class="updateCardBtn">Update</button>
            </div>
          </div>
        `;

    document.body.prepend(modal);
    

    // CLOSE MODAL

    overlay.addEventListener("click", () => {
        modal.classList.remove("modal");
        modal.innerHTML = "";
        overlay.classList.remove("visible");
    }) //close modal end..

}; //modalGenerator end..


*/