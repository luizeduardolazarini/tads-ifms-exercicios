# 📦 Controle de Estoque (Desafio de Ouro)

Este é o décimo e último exercício da trilha de lógica fundamental. Ele representa a síntese de todo o conhecimento adquirido, simulando um sistema de gestão com regras de negócio reais.

## 📝 Enunciado
Desenvolva um sistema de gerenciamento de inventário que:
1. Inicie com um estoque base (10 unidades).
2. Ofereça um menu interativo com as opções:
   - **Comprar**: Adiciona quantidades ao total.
   - **Vender**: Remove quantidades, com a trava de segurança de não permitir estoque negativo.
   - **Ver Status**: Exibe a quantidade atual.
   - **Sair**: Encerra o programa.

## 🚀 Conceitos Aplicados
- **Regras de Negócio**: Implementação de verificação condicional prévia (só subtrair se houver saldo), um conceito vital para a integridade de dados.
- **Acumuladores e Subtratores**: Manipulação dinâmica de variáveis numéricas.
- **Tratamento de Exceções Lógicas**: Mensagens de erro amigáveis para operações inválidas.
- **Interface de Terminal**: Uso de espaçamentos e símbolos para melhorar a legibilidade (UX).

## 💻 Como Rodar
1. Certifique-se de estar na pasta do exercício:
   ```bash
   cd 10-inventory-control
