/**
 * NOTA PARA O PROFESSOR:
 * Este exercício foi desenvolvido para execução via Terminal utilizando o Node.js.
 * Utilizei a biblioteca 'prompt-sync' para gerenciar as entradas de dados (usuário/senha).
 * * Estrutura: Loop com limite de 3 tentativas e validação de credenciais.
 * Para rodar: node login.js
 */

const prompt = require('prompt-sync')(); 

const usuario_correto = "admin";
const senha_correta = "1234";

let usuario; 
let senha;
let tentativas = 3; 
while (tentativas > 0) {
    usuario = prompt("Digite seu nome de usuário: ");
    senha = prompt("Digite sua senha: ");

    if (usuario === usuario_correto && senha === senha_correta) {
        console.log("Acesso Permitido! Bem-vindo.");
        break; 
    } else {
        tentativas--; 
        if (tentativas > 0) {
            console.log(`Credenciais incorretas! Você ainda possui ${tentativas} tentativas.`);
        } else {
            console.log("Acesso Bloqueado! Você excedeu o limite de tentativas.");
        }
    }
}