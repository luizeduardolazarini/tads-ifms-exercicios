/**
 * NOTA PARA O PROFESSOR:
 * Exercício de Tabuada Interativa.
 * Ambiente: Node.js com prompt-sync.
 * Estrutura: Loop do-while para gerar a sequência de 1 a 10.
 */

const prompt = require('prompt-sync')();

let num;
let i = 0; 

num = Number(prompt("Digite o número para gerar a tabuada: "));

console.log(`\n--- Tabuada do ${num} ---`);

do {
   i++;
   console.log(`${num} x ${i} = ${num * i}`);
} while (i < 10);

console.log("-----------------------");