/* Matriz:
Elabore um algoritmo que leia as notas de uma turma com 10 participantes, dos 4
bimestres de um ano. As 4 notas de cada participante serão armazenadas em uma
linha de uma matriz de números reais, logo cada linha da matriz representará as notas de um participante. Em um vetor de números reais, armazene as médias de cada participante e exiba as médias de cada um na tela.
*/

const leia = require('readline-sync');

let matrizDeNotas = [];
let mediaPorParticipantes = [];

for(let i = 0; i < 10; i++){
    matrizDeNotas[i] = [];
    let somaDaLinha = 0;

    for(let j = 0; j < 4; j++){
        let nota = leia.questionFloat(`Nota ${j + 1}.: `);
        matrizDeNotas[i][j] = nota;

        console.table(matrizDeNotas);
        somaDaLinha += nota;
    }

    mediaPorParticipantes[i] = somaDaLinha / 4;
}

for(let i = 0; i < 10; i++){
    console.log(mediaPorParticipantes[i].toFixed(1));
}