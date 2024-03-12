/* Descrizione: TuttiFrutti
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare 
nel frigorifero.
*/

let fridge = [
  "banana", //0
  "mela", //1
  "pera", //2
  "ciliegia", //3
  "arancia", //4
  "mandarino", //5
  "cocomero", //6
  "limone", //7
  "fragola", //8 conteggio array
];

fridge.push("pesca");
let fruit = "cocomero"
let flag = false
// console.log(fridge);

for (let i = 0; i < fridge.length; i++) {
  if (fruit === fridge[i]) {
    let flag = true
  }
}

if (flag) {
  console.log("Si ce l'ho");
} else console.log("Oh no, devo uscire a comprare il cocomero!");
// else console.log('Devi comprare il cocomero')
