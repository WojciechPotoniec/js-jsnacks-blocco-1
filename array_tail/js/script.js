/* Descrizione: 2. La coda dell'Array
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali 
(compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array

Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande 
del numero di elementi totali dell'array.
*/


//devo creare una lista di elementi chiedendo all'user il numero degli elementi.


number = [];
usernumber = parseInt(prompt('Inserisci un numero'));

for(let i = 0; i <= usernumber; i++){
    number.push(getRndInteger(1, 100));
}
console.log(number);
console.log (number.slice(-5)); 

/*if(number >= 5){
    let numbers = number.slice(-5);     // number.slice(-5); ci servirà per prendere gli'ultimi 5 elementi
        console.log(numbers);
    }else console.log('Inserisci un valore maggiore di 5');*/