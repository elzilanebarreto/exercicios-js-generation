/* Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.
                Código do Cargo   Cargo       Percentual do Reajuste
                        1       Gerente               10%
                        2       Vendedor               7%
                        3       Supervisor             9%
                        4       Motorista              6%
                        5       Estoquista             5%
                        6       Técnico de TI          8%

Novo Salário = salário + (reajuste * salário)
*/

const leia = require('readline-sync');

let codigoDoCargo, nomeDoColaborador, cargo, salario, reajuste, novoSalario;

nomeDoColaborador = leia.question('Nome do colaborador: ');
salario = leia.questionFloat('Salario do colaborador: R$ ');

codigoDoCargo = leia.questionInt('Codigo do cargo: ');

switch(codigoDoCargo){
    case 1:
        cargo = 'Gerente';
        reajuste = 10 / 100;
        break;
    case 2:
        cargo = 'Vendedor';
        reajuste = 7 / 100;
        break;
    case 3:
        cargo = 'Supervisor';
        reajuste = 9 / 100;
        break;
    case 4:
        cargo = 'Motorista';
        reajuste = 6 / 100;
        break;
    case 5:
        cargo = 'Estoquista';
        reajuste = 5 / 100;
        break;
    case 6:
        cargo = 'Técnico de TI';
        reajuste = 8 / 100;
        break;
    default:
        console.log('Opcao invalida.');
        return;
}

novoSalario = salario + (reajuste * salario);

console.log(`\nNome do Colaborador: ${nomeDoColaborador}\nCargo: ${cargo}\nSalario: ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);