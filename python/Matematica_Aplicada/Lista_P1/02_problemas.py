# Seção 2: Problemas Aplicados

# 6. Tempo de download em segundos
arquivo_mb = 2048
velocidade_mbs = 32
tempo_segundos = arquivo_mb / velocidade_mbs
print(f"Tempo de download: {tempo_segundos} segundos") # Saída: 64.0

# 7. Tamanho total da imagem em bytes 
pixels = 1920 * 1080
bytes_por_pixel = 3
tamanho_total = pixels * bytes_por_pixel
print(f"Tamanho total da imagem: {tamanho_total} bytes") # Saída: 6.220.800 

# 8. Bytes em 1 MB (Base 2) 
# 1 MB = 1024 KB | 1 KB = 1024 Bytes. Logo, 2^10 * 2^10 = 2^20.
bytes_1mb = 2**20
print(f"Bytes em 1 MB (base 2): {bytes_1mb}") # Saída: 1.048.576 

# 9. Bits em 1 KB 
# 1 KB = 1024 Bytes | 1 Byte = 8 Bits.
bits_1kb = 1024 * 8
print(f"Bits em 1 KB: {bits_1kb}") # Saída: 8192 