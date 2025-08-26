/*Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora
simples. O programa deverá ler dois números reais: numero1 e numero2, e na
sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
*/

const leia = require('readline-sync');

let numero1, numero2; 
let operacao, resultado, sinal;

numero1 = leia.questionFloat('Digite o 1. numero: ');
numero2 = leia.questionFloat('Digite o 2. numero: ');

console.log('Operacoes: 1 - Soma | 2 - Subtracao | 3 - Multiplicacao | 4 - Divisao');

operacao = leia.questionInt('Operacao: ');
switch (operacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`${numero1} x ${numero2} = ${(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        if (numero2 !== 0) {
            console.log(`${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(1)}`);
        } else {
            console.log("Indeterminacao!");
        }
        break;
    default:
        console.log("Operacao invalida!");
        break;
}