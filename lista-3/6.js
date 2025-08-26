/*  DO… WHILE
    Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3.
*/

const leia = require('readline-sync');

let numero, media = 0, somaMultiplos = 0, acumuladorMultiplos = 0;

do{
    numero = leia.questionInt('Digite um numero: ');

    if(numero % 3 === 0 && numero !== 0){ // Se for contar com o 0, irá entrar no acumulador
        somaMultiplos += numero;
        acumuladorMultiplos++;
    }
    
} while(numero !== 0);

media = somaMultiplos / acumuladorMultiplos;

console.log(`A media de todos os numeros multiplos de 3 é: ${media.toFixed(2)}`);