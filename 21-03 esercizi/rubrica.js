/* Esercizio 21-03-2022
Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
permette l'aggiunta di nomi alla lista dei contatti
permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
che conservi e peschi la lista dei contatti servendoci del LocalStorage.
*/


const q = (selector) => document.querySelector(selector);

const ul = q("ul");
const search = q("#search");
const name = q("#name");
const surname = q("#surname");
const telefono = q("#number");
const add = q("button");


const myRubrica = [ 
    
   "Giovanni - Boccaccio - Tel. 3472436456",
   "Francesco - Petrarca - Tel. 3402455643",
   "Dante - Alighieri - Tel. 340246542",
   "Giacomo - Leopardi - Tel. 3233546554",
   "Alessandro - Manzoni - Tel. 33223435",
   "Elsa - Morante - Tel. 3475666298",
   "Alma - Sabatini - Tel. 347889463",
   "Dacia - Maraini - Tel. 3274546573",

];

myRubrica.sort()

const render = (value = "") => { 

    const results = myRubrica.filter((contact) =>
      contact.toLowerCase().includes(value.toLowerCase())
    );

    ul.innerHTML = results
    .map((character) => character.split("-"))
    .map(
        (person) => `<li class="card">
            <span class="name">${person[0]}</span>
            <span class="surname">${person[1]}</span>
            <span class="telefono">${person[2]}</span>
            
          </li>`
      )
    .join("");
};
     
render();

// Aggiungere un contatto 

add.addEventListener("click", () => {
    myRubrica.push(`${name.value} - ${surname.value} - ${number.value}`);
    render();

    name.value = "";
    surname.value = "";
    telefono.value = "";

});


// Cercare i contatti

search.addEventListener("keyup", () => render(search.value));


// Eliminare un contatto

/*

const remove = document.querySelectorAll("li");

  try {
    remove.forEach((card) => {
      card.addEventListener("click", () => {
        const index = card.getAttribute("data-index");
        addresses.splice(index, 1);
        localStorage.setItem("addresses", JSON.stringify(addresses));
        myRubrica();
      });
    });
  } catch (error) {
    const p = document.createElement("p");
    newContactBtn.insertAdjacentHTML(
      "afterend",
      "<p class = 'error'>Attenzione, errore nell'aggiunta del contatto!</p>"
    );
  }

  
}; 

*/   

const deleteLiElContent = (element) => {
    element.addEventListener("click", () => {
       element.textContent = "";
  
      ulEl.removeChild(element);
  
      element.classList.toggle("li-text");
    
    });
};

const liEls = document.querySelectorAll("li");

liEls.forEach((liEl) => deleteLiElContent(liEl));



 
