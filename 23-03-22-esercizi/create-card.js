// ESPORTO I DATI 

export { createCard, getProducts, formatMaxText, formatMinText };


// CREARE CARD

const createCard = (title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
  
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
  
    divEl.append(h3El, parDescEl, imgEl, parPriceEl);
    document.querySelector(".cardsWrapper").appendChild(divEl);
};
  

// INSERISCO LA MIA FUNZIONE 

async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();

    return data;
  
}

getProducts().then((data) => console.log(data));



// DIVIDERE TESTO DESCRIZIONE 

const formatMaxText = (text) => text.split(".")[0];

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";
