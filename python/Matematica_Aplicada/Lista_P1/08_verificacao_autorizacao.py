idade = 16
tem_autorizacao = True

# O operador 'or' (OU) retorna True se pelo menos uma das condições for verdadeira.
# Aqui: (16 >= 18) é False, mas 'tem_autorizacao' é True. Resultado: True.
print(idade >= 18 or tem_autorizacao) # Saída esperada: True