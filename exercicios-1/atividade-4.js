/* Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto
entre o n1 e n2 pelo produto entre o n3 e o n4
    CALCULO = (n1 * n2) – (n3 * n4)
*/

const leia = require('readline-sync');

// Entrada
let n1 = leia.questionInt('Digite o primeiro valor: ');
let n2 = leia.questionInt('Digite o segundo valor: ');
let n3 = leia.questionInt('Digite o terceiro valor: ');
let n4 = leia.questionInt('Digite o quarto valor: ');

// Processamento
let resultadoDaDiferenca = (n1 * n2) - (n3 * n4);

// Saída
console.log(`\nResultado da diferença do produto: ${resultadoDaDiferenca}`);