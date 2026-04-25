const prompt = require('prompt-sync')();

let estoque = 10
let opcao

do {
   console.log("1. Para comprar")
   console.log("2. Paara vender")
   console.log("3. Para ver Status")
   console.log("4. Para sair")
   opcao = Number(prompt("Escolha uma opção: "))
   if (opcao === 1 ){
    let qtd = Number(prompt("Quantidade para adicionar: "));
    estoque += qtd;
    console.log("Estoque atualizado!");
   } else if (opcao === 2 ) {
    let venda = Number(prompt("Digite a quantidade que deseja vender: "))
    estoque -= venda
    if (venda > estoque) {
        console.log("Nao possui produtos o suficiente!")
    }
   } else if (opcao === 3) {
    console.log(`A quantidade no estoque é: ${estoque}`)
   } else if (opcao === 4 ) {
    console.log("Encerrando Gerenciamento do estoque!")
   } else {
    console.log("Invalido! Tente novamente")
   }
} while (opcao !== 4)