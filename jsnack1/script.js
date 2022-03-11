// Debug
console.log('JS OK!')

// Crea un array di numeri interi. 
// Fai la somma di tutti gli elementi che sono in posizione dispari.

const array = [1, 3, 22, 47, 13, 21, 35];

let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        sum += array[i];
    }
}
console.log(sum);