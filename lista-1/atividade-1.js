// Salário e abono
const leia = require('readline-sync');

// Entrada
let salario = leia.questionFloat('Digite o salario: ');
let abodo = leia.questionFloat('Digite o abodo: ');

// Processamento
let novoSalario = salario + abodo;

// Saída
console.log('Valor do salario: ' + novoSalario);