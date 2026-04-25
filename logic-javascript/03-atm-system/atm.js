/**
 * NOTA PARA O PROFESSOR:
 * Sistema de Caixa Eletrônico desenvolvido para ambiente Node.js.
 * Uso de biblioteca 'prompt-sync' para capturar dados via terminal.
 * Estrutura: Loop do-while com condicionais if/else para operações bancárias.
 */
const prompt = require('prompt-sync')();

let saldo = 1000; // Saldo inicial para teste
let opcao;

do {
   console.log("1. Para ver Saldo")
   console.log("2. Para Depositar")
   console.log("3. Para realizar Saque")
   console.log("4. Para Sair")
   opcao = Number(prompt("Escolha uma opção: "));
   if (opcao === 1) {
    console.log(`O saldo disponivel na sua conta é: ${saldo}`)
   } else if (opcao === 2) {
    let deposito = Number(prompt("Valor do deposito: "))
    saldo += deposito
   } else if (opcao ===3) {
    let saque = Number(prompt("Valor do saque: "))
    if (saque > saldo) {
        console.log("Saldo insuficiente para realizar o saque.")
    } else {
        saldo -= saque
    }
   } else if (opcao === 4) {
    console.log("Encerrando o sistema. Obrigado por usar nosso serviço!")
   }


}while (opcao !== 4);