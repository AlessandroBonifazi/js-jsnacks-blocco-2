// Debug
console.log('JS OK!')

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

let primoArray = ["james", "durant", "curry", "george", "leonard", "embiid", "morant"];

let secondoArray = ["jordan", "magic", "bryant"];

let element = "element";

let i = 0;

while (secondoArray.length < primoArray.length) {
    secondoArray.push(element + i);
    i++;
}

console.log(secondoArray.length);
console.log(primoArray.length);
