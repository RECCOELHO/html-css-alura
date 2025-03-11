num = int(input("Digite um numero:"))
print('''Escolha ums das bases para conversão:
      [ 01 ] Para converter em BINARIO
      [ 02 ] Para converter em OCTAL
      [ 03 ] Para converter  em HEXADECIMAL''')
OPCAO = int(input('Qual opção?'))

if OPCAO == 1:
    binario = num / 2
    print('{}convertido para BINARIO é igual a {}')

if OPCAO == 2:
    print('{}convertido para octal é igual a {}')

if OPCAO == 3:
    print('{} convertido para HEXADECIMAL é igual a {}')
else: print('Opção invalida'))