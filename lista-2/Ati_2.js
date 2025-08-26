/*Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. */

const leia = require('readline-sync');

let numero, situacaoDeParidade, sinal;

numero = leia.questionInt('Digite um numero: ');

if (numero % 2 == 0){
    situacaoDeParidade = 'par'
    if(numero >= 0){
        sinal = 'positivo';
    } else{
        sinal = 'negativo';
    }
} else{
    situacaoDeParidade = 'impar'
    if(numero >= 0){
        sinal = 'positivo';
    } else{
        sinal = 'negativo';
    }
}

console.log(`O Numero ${numero} é ${situacaoParImpar} e ${situacaoPositivoNegativo}!`)