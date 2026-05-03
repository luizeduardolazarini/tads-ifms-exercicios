arquivo_mb = 2500
velocidade = 40

# // calcula o tempo total em segundos (apenas a parte inteira)
tempo = arquivo_mb // velocidade

# % calcula quantos MB restam após a última parte inteira de 40 ser baixada
resto = arquivo_mb % velocidade

print(tempo, resto) # Saída esperada: 62 20