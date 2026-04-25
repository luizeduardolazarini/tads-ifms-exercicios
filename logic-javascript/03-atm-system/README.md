# 🏧 Simulação de Caixa Eletrônico

Este projeto simula as operações fundamentais de um terminal bancário (ATM), focando na manipulação de variáveis numéricas e controle de fluxo com menus interativos.

## 📝 Enunciado
Crie um algoritmo que simule um caixa eletrônico com as opções:
1. Ver saldo
2. Depositar
3. Sacar
4. Sair
O sistema deve combinar a estrutura `do-while` com `if/else`.

## 🚀 Conceitos Aplicados
- **Loop `do-while`**: Utilizado para garantir que o menu de opções seja exibido pelo menos uma vez antes da verificação de saída.
- **Acumuladores e Operadores**: Lógica de soma (`+=`) para depósitos e subtração (`-=`) para saques.
- **Tratamento de Dados**: Conversão de entradas (Strings) para números (`Number`) e validação de saldo insuficiente.
- **Formatação Monetária**: Uso do método `.toFixed(2)` para exibição padronizada de valores.

## 💻 Como Rodar o Projeto

1. Certifique-se de estar na pasta do exercício:
   ```bash
   cd 03-atm-system
