renda = 3000
valor = 1200

# 0.5 * renda (50% da renda) = 1500
# Primeira condição: (1200 <= 1500) -> True
# Segunda condição: (3000 >= 2500) -> True
# True and True resulta em True
print(valor <= 0.5 * renda and renda >= 2500) # Saída esperada: True