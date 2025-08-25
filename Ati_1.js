/* Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a
soma de A + B é maior, menor ou igual a C. */

const leia = require('readline-sync');

let valorA, valorB, valorC, somaAB;

valorA = leia.questionInt('Digite o numero A: '); 
valorB = leia.questionInt('Digite o numero B: '); 
valorC = leia.questionInt('Digite o numero C: '); 

somaAB = valorA + valorB;

if(somaAB > valorC){
    console.log(`\n${valorA} + ${valorB} = ${somaAB} > ${valorC}\nA Soma de A + B é Maior do que C`);
} else if (somaAB === valorC){
    console.log(`\n${valorA} + ${valorB} = ${somaAB} = ${valorC}\nA Soma de A + B é Igual a C`);
} else {
    console.log(`\n${valorA} + ${valorB} = ${somaAB} < ${valorC}\nA Soma de A + B é Menor do que C`);
}