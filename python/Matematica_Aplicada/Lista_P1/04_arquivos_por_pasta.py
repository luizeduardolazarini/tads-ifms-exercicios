# Objetivo: Calcular a distribuição de arquivos em pastas e o que sobra.

arquivos = 23
por_pasta = 5

# // calcula quantas pastas ficam totalmente cheias
pastas_completas = arquivos // por_pasta 

# % calcula quantos arquivos restam fora das pastas completas
sobras = arquivos % por_pasta

print(pastas_completas, sobras) # Saída esperada: 4 3