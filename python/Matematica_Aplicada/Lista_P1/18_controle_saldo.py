saldo = 500
saque = 300

# Análise para a prova:
# 1. (saque > saldo) -> (300 > 500) é False.
# 2. (saque == saldo) -> (300 == 500) é False.
# 3. Como as condições anteriores falharam, o código entra no 'else'.
# 4. Cálculo: saldo = 500 - 300 = 200.

if saque > saldo:
    print('Saldo insuficiente')
elif saque == saldo:
    print('Conta zerada')
else:
    saldo = saldo - saque
    print(saldo)

# Saída esperada: 200