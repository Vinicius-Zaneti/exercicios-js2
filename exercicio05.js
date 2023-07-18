//5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// for(inicialização; condição; contador)



// meu numero vai ser igual aos dois ultimos somados, ou seja
// ele começa em 0, depois vai ser igual a 1 e depois vai somar com ele mesmo

let fibonacci = 0;
let fibo = 1;

for (let contador = 0; contador < 10; contador ++) { 
    fibonacci = fibonacci
    fibo = fibo + fibo++
    
    console.log (fibonacci + fibo) 
}

