/* Vetores:
    Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.
*/

const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]; // vetor já alimentado
let numeroPesquisa, encontrado = false, posicao;

numeroPesquisa = leia.questionInt('Digite o numero que deseja encontrar: ');

for(let i = 0; i < 10; i++){
    if(numeroPesquisa === vetor[i]){
        encontrado = true;
        posicao = i;
        break;
    } 
}

console.clear();

if(encontrado){
    console.log(`O numero ${numeroPesquisa} esta na localizado na posicao: ${posicao}`);
} else{
    console.log(`O numero ${numeroPesquisa} não foi encontrado!`);
}