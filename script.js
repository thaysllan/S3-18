let precoRefrigerante = 11.99
let quantidadeRefrigerante = 3

total1 = precoRefrigerante * quantidadeRefrigerante

alert(`Valor total a ser pago em Refrigerante: ${total1}`)

let precoMacarrao = 6.99
let quantidadeMacarrao = 4

total2 = precoMacarrao * quantidadeMacarrao

alert(`Valor total a ser pago em Macarrão: R$ ${total2}`)

let precoErvilha = 6.99
let quantidadeErvilha = 3

total3 = precoErvilha * quantidadeErvilha

alert(`Valor total a ser pago em Ervilha: R$ ${total3}`)

let precoArroz = 22.99
let quantidadeArroz = 3

total4 = precoArroz * quantidadeArroz

alert(`Valor total a ser pago em Arroz: R$ ${total4}`)

let precoFeijao = 11.89
let quantidadeFeijao = 2

total5 = precoFeijao * quantidadeFeijao

alert(`Valor total a ser pago em Feijão: R$ ${total5}`)

let precoVinho = 70
let quantidadeVinho = 3

total6 = precoVinho * quantidadeVinho

alert(`Valor total a ser pago em Vinho: R$ ${total6}`)

total = total1 + total2 + total3 + total4 + total5 + total6
 

alert(`O valor total de compras é R$ ${total}`)

if (total %2 === 0){
    console.log ; alert(`Como o valor total é par, não pagarei o vinho totalizando em R$ ${(total - total6)/2}`)
}
else{
console.log ; alert(`Como o valor total é impar, pagarei metade incluindo o vinho, no total de R$ ${total/2} `)
}