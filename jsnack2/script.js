// Debug
console.log('JS OK!')

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;
let userNum;
while (isNaN(userNum)) {
    for (let i = 0; i < 5; i++) {
        userNum = parseInt(prompt(`${i + 1} 'inserisci un numero'`));
        sum += userNum;
    }
}
console.log(sum);
