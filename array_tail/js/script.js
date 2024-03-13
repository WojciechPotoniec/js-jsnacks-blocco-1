/* Descrizione: 2. La coda dell'Array
Creiamo un array 
chiedendo all'utente quanti elementi dovrà contenere
e generando tanti numeri casuali 
(compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array

Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande 
del numero di elementi totali dell'array.
*/

//devo creare una lista di elementi chiedendo all'user il numero degli elementi.

let number = [];
let usernumber = parseInt(prompt("Inserisci un numero di elementi da inserire in lista"));

for (let i = 0; i < usernumber; i++) {
  number.push(getRndInteger(1, 100));
}

let useroutput = parseInt(
  prompt("Quanti numeri della lista vuoi visualizzare?")
);
if (number.length < useroutput) {
  console.log("Errore, il numero che vuoi visualizzare non può essere maggiore della lista degli elementi inseriti inizialmente");
} else console.log(number.slice(-useroutput));
// number.slice(); ci servirà per prendere un tot numero di elementi
