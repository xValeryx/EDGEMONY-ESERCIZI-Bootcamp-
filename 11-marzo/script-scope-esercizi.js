/*
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare prima a dare la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.

  -- COMMENTO in fondo alla pagina -- 
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual è il risultato dei console.log?
// RISPOSTA:  3.14 , 3.14 

const PI = 3.14;  

console.log(PI);

if (PI >= 3) {         
  console.log(PI);
}

// Es. 2: Dato il seguente, qual è il risultato dei console.log?
// RISPOSTA: Il mio colore preferito è: violet - Ci sono 12 mesi in un anno.


var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual è il risultato dei console.log?
// RISPOSTA: nulla , non ritorna niente. 

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}


/* RISPOSTA APPROFONDITA >> 

In base al tipo di variabile che abbiamo, dobbiamo vedere dove inserire il console.log in modo che ci dia un risultato.

VARIABILE GLOBALE = può essere usata ovunque nello spazio quindi effettuando il console.log darà sempre un risultato. 
Non importa dove lo inseriamo perchè può essere accessibile in tutto lo spazio, quindi dentro o fuori le parentesi.

VARIABILE LOCALE = può essere usata solo all'interno del BLOCK SCOPE in cui è inserita e il console.log deve essere messo 
all'interno delle parentesi, altrimenti il risultato ci darà errore. Quindi se abbiamo una variabile locale all'interno
di una funzione dobbiamo inserire il console.log dentro la funzione e dentro le parentsi e non al di fuori. 
Per evitare che ci ritorni errore. 

*/