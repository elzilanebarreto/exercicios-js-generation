/* Laço de Repetição WHILE (Resolva 1 exercício):
    Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.
*/

const leia = require('readline-sync');

let idade, totalMenorIdade = 0, totalMaiorIdade = 0;

idade = leia.questionInt('Digite uma idade: ');

while(idade >= 0){

    if(idade < 21){
        totalMenorIdade++;
    } else if (idade > 50){
        totalMaiorIdade++;
    }

    idade = leia.questionInt('Digite uma idade: ');
}

console.clear();

console.log(`Total de pessoas menores de 21 anos: ${totalMenorIdade}\nTotal de pessoas maiores de 50 anos: ${totalMaiorIdade}`);