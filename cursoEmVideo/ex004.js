var name= window.prompt('qual seu nome?')
document.write(`Ola, seu nome tem ${name.length} tantas letras.<br>`)
document.write(`Seu nome em maiúsculas é ${name.toUpperCase()}.<br>`)
document.write(`Seu nome em minúsculas é ${name.toLowerCase()}.`)

/* toLocaleString('pt-br',{style: 'currency', currency: 'BRL'} trandormar em real*/