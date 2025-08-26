/* FOR:
    Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares   
*/

const leia = require('readline-sync');

let numero, pares = 0, impares = 0;

for(let i = 0; i < 10; i++){
    numero = leia.questionInt(`Digite o ${i + 1}. numero: `);

    if(numero % 2 === 0){
        pares++;
    } else{
        impares++;
    }
}

console.clear();

console.log(`\nTotal de numeros pares: ${pares}\nTotal de numeros impares: ${impares}`);