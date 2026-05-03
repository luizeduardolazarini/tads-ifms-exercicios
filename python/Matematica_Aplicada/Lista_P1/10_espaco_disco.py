
total_gb = 16
usado_mb = 8500

# 1 GB equivale a 1024 MB
total_mb = total_gb * 1024

# Cálculo do espaço que sobra após o uso
livre = total_mb - usado_mb

print(livre) # Saída esperada: 7884