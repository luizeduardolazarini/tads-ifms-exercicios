/**
 * NOTA PARA O PROFESSOR:
 * Exercício de Cadastro com Confirmação para Node.js.
 * Foco: Uso de do-while para validação de dados de entrada.
 */

const prompt = require('prompt-sync')();

let confirmar; 

do {
    console.log("\n--- Iniciar Cadastro ---");
    let nome = prompt("Digite o Nome: ");
    let idade = Number(prompt("Digite a idade: "));

    console.log(`\nDados recebidos: Nome: ${nome}, Idade: ${idade}`);
    
    confirmar = prompt("Deseja confirmar os dados? (S/N): ").toUpperCase();

    if (confirmar === "N") {
        console.log("Reiniciando cadastro...");
    }

} while (confirmar !== "S"); 

console.log("\n Cadastro confirmado! Obrigado.");