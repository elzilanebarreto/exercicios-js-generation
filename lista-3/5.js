/*  Laço de Repetição DO… WHILE 
    Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.
 */

const leia = require('readline-sync');

let numero, totalNumerosPositivos = 0;

do{
    numero = leia.questionInt('Digite um numero: ');

    if(numero > 0){
        totalNumerosPositivos += numero;
    }

} while (numero != 0);

console.clear();

console.log(`A soma dos numeros positivos e: ${totalNumerosPositivos}`)