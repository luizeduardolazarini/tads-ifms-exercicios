arquivo_mb = 1800
velocidade = 25
tempo_maximo = 70

# Cálculo do tempo: 1800 / 25 = 72.0
tempo = arquivo_mb / velocidade

# Saída direta da expressão lógica (72.0 <= 70)
print(tempo <= tempo_maximo) # Saída esperada: False