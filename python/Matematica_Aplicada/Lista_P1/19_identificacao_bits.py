bits = 16

# Análise para a prova:
# 1. (bits == 8) -> (16 == 8) é False.
# 2. (bits == 16) -> (16 == 16) é True.
# Como a segunda condição é verdadeira, o Python executa o print(65536) e ignora o resto.

if bits == 8:
    print(256)
elif bits == 16:
    print(65536)
elif bits == 32:
    print(4294967296)
else:
    print('Desconhecido')

# Saída esperada: 65536