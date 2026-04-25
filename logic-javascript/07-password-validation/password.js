/**
 * NOTA PARA O PROFESSOR:
 * Exercício de Validação de Senha desenvolvido para ambiente Node.js.
 * Foco: Uso da propriedade .length para validar requisitos mínimos de segurança.
 */

const prompt = require('prompt-sync')();

let senha;

do {
    senha = prompt("Digite uma senha (mínimo 6 caracteres): ");

    if (senha.length < 6) {
        console.log("Erro: A senha é muito curta! Tente novamente.");
    }

} while (senha.length < 6);

console.log("\n✅ Senha cadastrada com sucesso!");