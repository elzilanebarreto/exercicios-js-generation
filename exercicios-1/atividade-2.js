/*Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela
a média final do participante
    CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4
*/ 

const leia = require('readline-sync');

// Entrada
let nota1 = leia.questionFloat('Digite a primeira nota do participante: ');
let nota2 = leia.questionFloat('Digite a segunda nota do participante: ');
let nota3 = leia.questionFloat('Digite a terceira nota do participante: ');
let nota4 = leia.questionFloat('Digite a quarta nota do participante: ');

// Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Saída
console.log('Resultado da média do participante: ' + media.toFixed(1));