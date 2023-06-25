var dinheiro = window.prompt('Quanto voce tem?')


var anoAtual = window.prompt('Em que ano estamos?')
var anoNasceu = window.prompt('Em que ano voce nascel? ')
var idade = anoAtual-anoNasceu
document.write('Em ', anoAtual, ' voce tera ', idade, ' anos')


if (dinheiro >= 10000 & idade >= 18){
    document.write('partiu disney!! por que tu tem dinheiro e é maior de idade')
}if (dinheiro < 10000 & idade >= 18){
    document.write(' Nao vai da para ir para disney!! Porque voce é pobre! Mas tu ja tem idade para ir')
}if (dinheiro >= 10000 & idade < 18){
    document.write(' Nao vai da para ir para disney!! Porque voce nao tem idade. CRESÇA E APACERÇA')
}if (dinheiro < 10000 & idade < 18){
    document.write(' Nao vai da para ir para disney!! Porque voce nao tem dinheiro e nem idade!VAI TRABALHAR E CRESCER...')
}
