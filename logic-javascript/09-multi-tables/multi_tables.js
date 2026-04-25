/**
 * NOTA PARA O PROFESSOR:
 * Exercício: Tabuada com Repetição de Fluxo.
 * Foco: Loops aninhados e controle de estado por confirmação do usuário.
 */

const prompt = require('prompt-sync')();

let continuar;

do {
    let num = Number(prompt("Digite o número da tabuada: "));
    let i = 1;

    console.log(`\n--- Tabuada do ${num} ---`);
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }

    continuar = prompt("\nDeseja calcular outra tabuada? (S/N): ");

} while (continuar === "S");
