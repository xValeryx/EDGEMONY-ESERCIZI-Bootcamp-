// IMPORTO I DATI 

import {createCard, getProducts, formatMaxText, formatMinText} from './create-card.js';
    

//  CREO FUNZIONE CON FETCH - async e await 

/*
async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();

    return data;
  
}

getProducts().then((data) => console.log(data));

*/

getProducts("https://fakestoreapi.com/products").then((data) => {
  data.map((product) => {
    createCard(
      product.title,
      formatMinText(product.description),
      product.image,
      product.price + " $"
    );

    const cardEls = document.querySelectorAll(".card");

    cardEls.forEach((card) => {
      card.addEventListener(
        "click",
        () =>
          (card.innerHTML = `<p style="padding: 20px">${product.description}</p>`)
      );
    });
  });
           
  const Els = document.querySelectorAll(".card");

    Els.forEach((card) => {
      card.addEventListener("click", () =>
      card.textContent = "");
    });

});





/*

// ARROW FUNCION 

const getProductAPI = async (URL, index)  => {
    const res = await fetch(`${URL}${index}`);

    return await res.json();
};

getProductAPI("https://fakestoreapi.com/products").then((data) =>
   console.log(data)
);

*/