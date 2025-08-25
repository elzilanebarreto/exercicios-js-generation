/* Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as
Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.
    SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) -
DESCONTOS
*/

const leia = require('readline-sync');

// Entrada
let salarioBruto = leia.questionFloat('Informe o salario bruto do colaborador: ');
let adicionalNoturno = leia.questionFloat('Informe o adicional noturno: ');
let horasExtras = leia.questionFloat('Informe as horas extras: ');
let descontos = leia.questionFloat('Informe os descontos: ');

// Processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Saída
console.log('\nSalario liquido: R$ %f', salarioLiquido);