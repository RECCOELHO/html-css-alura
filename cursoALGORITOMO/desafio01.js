var emprestimoString = window.prompt('Qual valor do emprestimo?')
var emprestimoFloat = parseFloat(emprestimoString)

var emprestimo = emprestimoFloat * 1.2 

var parcelasString = window.prompt('Em quantas parcelas voce quer parcelar?')    
var parcelasInt = parseInt(parcelasString)

var mensalidade = emprestimo/parcelasInt

var fator = Math.pow(10,2)
var mensalidadeArredondada = Math.ceil(mensalidade*fator)/fator

document.getElementById("demo").innerText = emprestimoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

document.getElementById("valor-a-pagar").innerText = emprestimo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

document.getElementById("parcelas").innerText = parcelasInt

document.getElementById("mensalidade").innerText = mensalidadeArredondada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})


/* toLocaleString('pt-br',{style: 'currency', currency: 'BRL'} trandormar em real*/