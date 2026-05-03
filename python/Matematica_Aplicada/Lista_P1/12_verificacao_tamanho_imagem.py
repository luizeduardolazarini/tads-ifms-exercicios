largura = 1280
altura = 720
bytes_pixel = 3

# Cálculo: 1280 * 720 * 3 = 2.764.800
tamanho = largura * altura * bytes_pixel

# Comparação: 2.764.800 > 2.500.000?
print(tamanho > 2500000) # Saída esperada: True