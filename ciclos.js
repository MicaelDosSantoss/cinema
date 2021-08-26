let numerosPares = [2,4,6,8,10]

let numerosParesDobro = numerosPares.map(function(valor) {
    return valor*2
})

console.log(numerosParesDobro)

//filter/

let valoresFiltrados = numerosPares.filter(valor => {
    return valor <6
})

console.log(valoresFiltrados)

//reduce/

let somarTudo = numerosPares.reduce((valor,acum) => {
    return acum + valor
})

console.log(somarTudo)

// forEach

let nomear = numerosPares.forEach( (valor,indice) => {
    console.log("O indice "+ indice +"tem valor "+valor)
});