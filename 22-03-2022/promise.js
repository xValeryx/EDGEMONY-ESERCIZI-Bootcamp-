
// ESERCIZIO JS - PROMISE - 22-03

//  Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt 
//  e che faccia il console.log della somma soltanto dopo 10 secondi. 
// ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, eccetto il prompt che chiede i numeri all'utente. 
// Scegliete saggiamente tra setInterval e setTimeout!

function Sum() { 
    const firstNum = parseInt(prompt("Inserisci il primo numero"));
    const secondNum = parseInt(prompt("Inserisci il secondo numero"));
    alert (firstNum + secondNum); 
    let result;

}

console.log();

let result = Sum();
setTimeout(() => console.log("il risultato è:", Sum), 10000);


/*

const sumInterval = setInterval(Sum, 10000);

console.log(sumInterval);

clearInterval(2);

*/



// ESEMPI 

/*

const welcomeHere = () => console.log("Ciao raga");

setTimeout(welcomeHere, 3000);

console.log("Secondo");

setTimeout(() => console.log("Prima dell'altro"),  500);

*/

