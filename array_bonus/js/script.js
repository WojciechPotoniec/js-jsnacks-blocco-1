/* (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let number = [1, 2, 3, 4, 5];
let number2 = [10, 20, 30];
// let newnumber = [number.length - number2.lenght]; // determino la lunghezza della differenza tra i due array

console.log(number.length);
console.log(number2.length);
// console.log(newnumber);

for (number2.lenght = 3; number2.length < number.length; number2.length++) {
  let newnumber = (number2.length + 1);
  console.log(newnumber);
}

