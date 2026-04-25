/**
 * NOTA PARA O PROFESSOR:
 * Exercício de Somatório desenvolvido para ambiente Node.js.
 * Utiliza 'prompt-sync' para entrada de dados via terminal.
 */

const prompt = require('prompt-sync')();

let soma = 0;
let numeros; 

console.log("--- Bem-Vindo ---");
console.log("--- Digite os números que deseja somar ---");

while (numeros !== 0) {
    numeros = Number(prompt("Digite o numero (Digite 0 para sair): "));
    soma += numeros;
}

console.log(`\n A soma total é: ${soma}`);