valor_compra = 180
cliente_premium = True
cupom = False
distancia_km = 12

# Análise manual para a prova:
# Parte 1: (valor_compra >= 200 or cliente_premium)
#          (180 >= 200 or True) -> (False or True) -> True
#
# Parte 2: (cupom or distancia_km <= 10)
#          (False or 12 <= 10) -> (False or False) -> False
#
# Final: True and False -> False

print((valor_compra >= 200 or cliente_premium) and (cupom or distancia_km <= 10))