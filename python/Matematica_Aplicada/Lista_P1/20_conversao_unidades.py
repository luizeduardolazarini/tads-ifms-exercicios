mb = 2048

# Análise para a prova:
# 1. A condição é (mb >= 1024).
# 2. Como 2048 é maior que 1024, a condição é True.
# 3. O cálculo realizado é gb = 2048 / 1024, que resulta em 2.0.

if mb >= 1024:
    gb = mb / 1024
    print(gb, 'GB')
else:
    print(mb, 'MB')

# Saída esperada: 2.0 GB