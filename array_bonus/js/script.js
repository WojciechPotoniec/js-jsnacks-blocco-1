/* (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let number = [];
let number2 = [];
// let newnumber = [number.length - number2.lenght]; // determino la lunghezza della differenza tra i due array

//console.log(number);
//console.log(number2);
// console.log(newnumber);

// for (number2.lenght = 3; number2.length < number.length; number2.length++) {
//   let newnumber = (number2.length + 1);
//   console.log(newnumber);
// }

for (let i = 0; i < getRndInteger(1, 20); i++) {
  number.push("numero");
}
//console.log(number2.length);

for (let i = 0; i < getRndInteger(1, 20); i++) {
  number2.push("numero2");
}

for(let i = 0; number2.length < number.length; i++){
    number2.push("Nuovo elemento"); 
}
for(let i = 0; number2.length > number.length; i++){
  //number1.push("Nuovo elemento"); 
}
console.log(number);
console.log(number2);
