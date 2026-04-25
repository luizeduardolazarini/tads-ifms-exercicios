/**
 * NOTA PARA O PROFESSOR:
 * Sistema de Votação desenvolvido para ambiente Node.js.
 * Utiliza a biblioteca 'prompt-sync' para entrada de dados via terminal.
 * Estrutura: Loop do-while com contadores independentes para cada candidato.
 */

const prompt = require('prompt-sync')();

let opcao;
let candidatoA = 0;
let candidatoB = 0; 

console.log("--- Início da Votação ---");

do {
   console.log("\n1. Para Candidato A");
   console.log("2. Para Candidato B");
   console.log("3. Para Sair e Ver Resultados.");
   
   opcao = Number(prompt("Escolha uma opção: "));

   if (opcao === 1) {
     candidatoA += 1;
     console.log(" Voto computado para o Candidato A.");
   } else if (opcao === 2) {
     candidatoB += 1;
     console.log(" Voto computado para o Candidato B.");
   } else if (opcao === 3) {
     console.log("\nEncerrando votação...");
   } else {
     console.log(" Opção inválida! Tente novamente.");
   }
} while (opcao !== 3);

console.log("\n--- APURAÇÃO DOS VOTOS ---");
console.log(`Candidato A: ${candidatoA} votos`);
console.log(`Candidato B: ${candidatoB} votos`);