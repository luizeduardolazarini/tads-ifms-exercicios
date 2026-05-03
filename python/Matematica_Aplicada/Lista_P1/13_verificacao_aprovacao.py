nota = 5.5
frequencia = 80
recuperacao = True

# Passo a passo para calcular na mão na prova:
# 1. (nota >= 6) -> (5.5 >= 6) é False
# 2. (frequencia >= 75) -> (80 >= 75) é True
# 3. Resolve o 'and' dentro dos parênteses: (False and True) é False
# 4. Resolve o 'or' com a recuperação: (False or True) é True

print((nota >= 6 and frequencia >= 75) or recuperacao) # Saída esperada: True