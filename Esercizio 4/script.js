/** Esercizi per casa
 * 
 * 1) Comprendere l'utilizzo delle funzioni normali ed arrow, spiegare tramite un esempio pratico di this. Presentare la differenza tra let e var in scope diversi. 
 * 
 * 2) Definire funzioni che implementino le 4 operazioni tipiche della calcolatrice
 * 
 * 3) Realizzare una funzione che permetta di salvare la stringa "15*(na)Batman" nella maniera più fantasiosa possibile
 * 
 */

// Esercizio 1
function myfunction() {
    if (true) {
        let life = 42;
        var falseLife = 41;

        function normalFunction() {
            console.log('Normal', life);
        }
    
        const arrowFunction = () => console.log('Arrow', life);
    }
    console.log(falseLife);
    //console.log(falseLife, life);

    normalFunction();
    arrowFunction();
}

// Esercizio 2
const sum = (a, b) => a+b;
const sub = (a, b) => a-b;
const mul = (a, b) => a*b;
const div = (a, b) => a/b;
const exp = (a, b) => a**b;
const mod = (a, b) => a%b;

// Esercizio 3
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const iamBatman = (na) => {
    let repeat = (times) => {
        let res = "";
        for (let i=0; i<times; i+=!(i==times)) {
            for(let c of na) {
                res += alphabet[c];
            }
        }
        return res;
    }
    console.log(repeat(15) + ' b' + repeat(1)[1] + 'tm' + repeat(1)[1] + repeat(1)[0]);
}

//myfunction();
iamBatman([alphabet.indexOf('n'), alphabet.indexOf('a')]);
console.log('Sum:', sum(40, 2));
console.log('Sub:', sub(40, 2));
console.log('Mul:', mul(40, 2));
console.log('Div:', div(40, 2));
console.log('Exp:', exp(40, 2));
console.log('Mod:', mod(40, 2));