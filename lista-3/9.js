/* Matriz:
    Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
        ● Todos os elementos da Diagonal Principal
        ● Todos os elementos da Diagonal Secundária
        ● A Soma de todos os elementos da Diagonal Principal
        ● A Soma de todos os elementos da Diagonal Secundária
*/

const leia = require('readline-sync');

let matriz = [];
let somaDaPrincipal = 0, somaDaSecundaria = 0;

for (let i = 0; i < 3; i++){
    matriz[i] = [];

    for(let j = 0; j < 3; j++){
        let valor = leia.questionInt('Digite o valor: ');
        matriz[i][j] = valor;

        console.table(matriz);
    }
}

console.log('Elementos da Diagonal Principal: ')
for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(i === j ){
            console.log(matriz[i][j]);
            somaDaPrincipal += matriz[i][j];
        }
    }
}

console.log('Elementos da Diagonal Principal: ')
for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        if(j === 3 - i - 1){
            console.log(matriz[i][j]);
            somaDaSecundaria += matriz[i][j];
        }
    }
}

console.log(`Soma dos Elementos da Diagonal Principal: ${somaDaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundaria: ${somaDaSecundaria}`);