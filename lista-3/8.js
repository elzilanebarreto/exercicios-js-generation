/* Vetores: 
Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
    ● Todos os elementos dos índices ímpares do vetor
    ● Todos os elementos do vetor que são números pares
    ● A Soma de todos os elementos do vetor
    ● A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
*/

const leia = require('readline-sync');

let vetorInteiros = [];
let numero, indicesImpares, numerosPares, soma = 0, media = 0;

for (let i = 0; i < 10; i++){
    numero = leia.questionInt(`Valor: ${i + 1}: `);
    vetorInteiros[i] = numero;
    soma += vetorInteiros[i];
}

media = soma / vetorInteiros.length; //ou 10

console.clear();

console.log('\nElementos nos índices ímpares:')
for (let i = 0; i < 10; i++){
    if(i % 2 !== 0){
        indicesImpares = vetorInteiros[i];
        console.log(`${indicesImpares} `);
    }
}


console.log('\nElementos pares:')
for (let i = 0; i < 10; i++){
    if(vetorInteiros[i] % 2 === 0){
        numerosPares = vetorInteiros[i];
        console.log(`${numerosPares} `);
    }
}

console.log(`Soma: ${soma}\nMedia: ${media.toFixed(2)}`);