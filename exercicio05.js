//5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// for(inicialização; condição; contador)



// meu numero vai ser igual aos dois ultimos somados, ou seja
// ele começa em 0, depois vai ser igual a 1 e depois vai somar com ele mesmo

// let fibonacci = 0;
// let fibo = 1;
// let continuacao;

// for (let contador = 0; contador <= 10; contador ++) { 
    
//     continuacao = fibonacci + fibo
//     fibo = continuacao++
//     console.log ( continuacao )
// }

let numeroAnterior = 0;
let numeroAtual = 1;

console.log(numeroAnterior)
console.log(numeroAtual)

for (let contador = 3; contador <= 10; contador++){
    let proximoNumero = numeroAnterior + numeroAtual

    console.log(proximoNumero)
    numeroAnterior = numeroAtual
    numeroAtual = proximoNumero
}