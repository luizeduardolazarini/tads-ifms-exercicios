/**
 * NOTA PARA O PROFESSOR:
 * Este código foi desenvolvido para ser executado via Terminal (Node.js).
 * Para permitir a entrada de dados (input) de forma síncrona no terminal,
 * utilizei a biblioteca 'prompt-sync'. 
 * Comando para rodar: node guessing-game.js
 */

const prompt = require('prompt-sync')(); 

const numero_correto = 7; 

let chute = Number(prompt("Digite um número entre 0 e 10: "));

while (chute !== numero_correto) {
    if (chute > numero_correto) {
        console.log("O número é menor");
    } else {
        console.log("O número é maior");
    }
    chute = Number(prompt("Digite um número entre 0 e 10: "));
}

console.log("Parabéns! Você acertou!");