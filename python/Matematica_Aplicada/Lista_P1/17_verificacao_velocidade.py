velocidade = 85

# Análise para a prova:
# 1. (velocidade <= 60) -> (85 <= 60) é False.
# 2. (velocidade <= 80) -> (85 <= 80) é False.
# 3. Como nenhuma das condições anteriores foi atendida, o código executa o 'else'.

if velocidade <= 60:
    print('Normal')
elif velocidade <= 80:
    print('Atencao')
else:
    print('Multa')

# Saída esperada: Multa