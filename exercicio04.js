// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.
// for(inicialização; condição; contador)

let prompt = require("prompt-sync")();

 let numero = parseInt(prompt("Digite um número: "));

for(let contador = 0; contador <= 10 ; contador++) {
    console.log ((numero*contador));
}